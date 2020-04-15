/**
 * Description of the campingHeaderController.js.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */

({

    onTabRefreshed: function (component, event, helper) {
        console.log('tab refreshed')
    },

    onTabUpdated: function (component, event, helper) {
        console.log('tab onTabUpdated')
    },

    onTabCreated: function (component, event, helper) {
        console.log('tab onTabCreated')
    },

    onTabFocused: function (component, event, helper) {
        console.log('tab onTabFocused')
    },
    tabReopened: function (component, event, helper) {
        console.log('tab reopened')
    },
    afterScriptsLoaded: function (component, event, helper) {
        var ls = new SecureLS({
            isCompression: false,
            encryptionSecret: 'secret-key'
        });

        component.set('v.objSecure', ls);


    },

    fetchLocalStorageValues: function (component, event, helper) {
        console.log('ls name -> ' + component.get('v.objSecure').get('name'));
    }

})