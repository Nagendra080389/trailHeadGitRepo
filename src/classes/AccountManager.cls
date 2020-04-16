/**
 * @description AccountManager new description 12
 */
@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {

    /**
    * @description Method to fetch account
    * @return Account
    */
    @HttpGet
    global static Account getAccount() {
        Vehicle__c vehicle = new Vehicle__c();
        RestRequest req = RestContext.request;
        String accId = req.requestURI.substringBetween('Accounts/', '/contacts');
        Account acc = [
                SELECT Id, Name, (SELECT Id, Name FROM Contacts)
                FROM Account
                WHERE Id = :accId
        ];
        return acc;
    }

    /**
    * @description Method to test commit
    */
    public static void testThisMethod() {
        System.debug(LoggingLevel.DEBUG, '');
    }
}