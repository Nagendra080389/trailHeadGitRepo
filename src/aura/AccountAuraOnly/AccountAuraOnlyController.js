/**
 * Created by nagesingh on 3/7/2020.
 */

({

    doInit: function (objComponent, objEvent, objHelper) {


        const fetchAllAccounts = objComponent.get("c.fetchAllAccounts");

        objComponent.set('v.columns', [
            {label: 'AccountName', fieldName: 'Name', sortable: true},
            {label: 'Billing Address', fieldName: 'BillingCity', type: 'text', sortable: true},
            {label: 'Shipping Address', fieldName: 'ShippingCity', type: 'text', sortable: true},
            {label: 'Company Ext', fieldName: 'CompanyExtId__c', type: 'text', sortable: true},
            {label: 'Phone', fieldName: 'Phone', type: 'phone', sortable: true},
        ]);
        objComponent.find('datatableSpinnerId').set("v.class", 'slds-show');

        //Callback for the createCaseAction Action.
        fetchAllAccounts.setCallback(this, function (result) {
            const state = result.getState();

            //Check if result is successful.
            if (state === "SUCCESS") {
                objComponent.set('v.data', result.getReturnValue());
            }

            //Stop showing the spinner on UI.
            objComponent.find('datatableSpinnerId').set("v.class", 'slds-hide');
        });
        //Fires the action.
        $A.enqueueAction(fetchAllAccounts);

    }
});