/**
 * Created by nagesingh on 2/29/2020.
 */

global class ContinuationCallAuraLWC {

    @AuraEnabled(Cacheable = true)
    public static List<Account> fetchAllAccounts() {
        List<Account> lstAccounts = [SELECT Id, Name, CompanyExtId__c, Phone, BillingCity, ShippingCity FROM Account LIMIT 10];
        System.debug(lstAccounts);
        return lstAccounts;
    }


}