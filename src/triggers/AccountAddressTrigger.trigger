/**
 * Created by nagesingh on 2/2/2018.
 */

trigger AccountAddressTrigger on Account (before insert, before update) {


    List<Account> accounts = (List<Account>) Trigger.new;

    for (Account account : accounts) {
        List<GenericObject__c> genericObject = [SELECT Id,GenericData__c FROM GenericObject__c LIMIT 1];
        if (!genericObject.isEmpty()) {
            genericObject.get(0).GenericData__c = JSON.serialize(account);
            upsert genericObject.get(0);
        }
    }

}