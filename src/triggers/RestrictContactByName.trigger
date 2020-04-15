/**
 * Created by nagesingh on 2/2/2018.
 */

trigger RestrictContactByName on Contact (before insert, before update) {
//check contacts prior to insert or update for invalid data
    if (Trigger.isBefore && Trigger.isInsert) {
        List<Contact> lstContacts = (List<Contact>) Trigger.new;
        List<String> lstCompanyExtensionId = new List<String>();
        Map<String, Contact> mapExtIdAndContact = new Map<String, Contact>();
        Map<String, Account> mapExtIdAndAccount = new Map<String, Account>();
        for (Integer i = 0; i < lstContacts.size(); i++) {
            if (String.isNotBlank(lstContacts[i].companyEXTID__c)) {
                lstCompanyExtensionId.add(lstContacts[i].companyEXTID__c);
                mapExtIdAndContact.put(lstContacts[i].companyEXTID__c, lstContacts[i]);
            }
        }

        if (!lstCompanyExtensionId.isEmpty()) {
            List<Account> account = [SELECT Id, CompanyExtId__c FROM Account WHERE CompanyExtId__c IN :lstCompanyExtensionId];
            for (Integer i = 0; i < account.size(); i++) {
                mapExtIdAndAccount.put(account[i].CompanyExtId__c, account[i]);
            }
        }

        if (!mapExtIdAndContact.isEmpty()) {
            for (String eachKeyFromContact : mapExtIdAndContact.keySet()) {
                Contact contact = mapExtIdAndContact.get(eachKeyFromContact);
                contact.AccountId = mapExtIdAndAccount.get(eachKeyFromContact).Id;
            }
        }
    }
}