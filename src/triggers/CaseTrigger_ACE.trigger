/**
* This is a trigger for Case object.
* <p/><p/>
* @author Hemangini Vashishtha
*/
trigger CaseTrigger_ACE on Case (before insert, before update, after insert, after update) {
    /*if(!CaseTriggerHandler_ACE.byPassTrigger()) {
        if (!DMLOperationsClass_CF.shouldStopTriggerExecution(Case.class.toString()) && Trigger.isAfter && Trigger.isUpdate) {
            CaseTriggerHandler_ACE.onAfterUpdate(Trigger.New, Trigger.oldMap, Trigger.newMap);
        }
        if (!DMLOperationsClass_CF.shouldStopTriggerExecution(Case.class.toString()) && Trigger.isBefore && Trigger.isUpdate) {
            CaseTriggerHandler_ACE.onBeforeUpdate(Trigger.newMap, Trigger.oldMap, Trigger.new);
        }
        //This is to handle before insert Event of Case Trigger.
        if (!DMLOperationsClass_CF.shouldStopTriggerExecution(Case.class.toString()) && Trigger.isBefore && Trigger.isInsert) {
            CaseTriggerHandler_ACE.onBeforeInsert(Trigger.new, Trigger.newMap);
        }
        if (!DMLOperationsClass_CF.shouldStopTriggerExecution(Case.class.toString()) && Trigger.isAfter && Trigger.isInsert) {
            CaseTriggerHandler_ACE.onAfterInsert(Trigger.new, Trigger.newMap);
        }
    }*/

    if (Trigger.isAfter && Trigger.isUpdate) {
        List<Case> lstCaseTriggerNew = Trigger.new;
        Map<Id, Case> mapCaseTriggerOldMap = Trigger.oldMap;
        Map<Id, Case> mapCaseTriggerNewMap = Trigger.newMap;

        List<GenericPlatformEvent__e> lstPlatformEvents = new List<GenericPlatformEvent__e>();
        for (Case eachCase : lstCaseTriggerNew) {
            Map<String, Object> mapDataForPlatformEvent = new Map<String, Object>();
            mapDataForPlatformEvent.put('Case_Number_ACE__c', eachCase.CaseNumber);
            GenericPlatformEvent__e objGenericPlatformEvent = new GenericPlatformEvent__e(Notification__c = JSON.serialize(mapDataForPlatformEvent));
            lstPlatformEvents.add(objGenericPlatformEvent);
        }

        if (!lstPlatformEvents.isEmpty()) {
            List<Database.SaveResult> objResults = EventBus.publish(lstPlatformEvents);
        }
    }
}