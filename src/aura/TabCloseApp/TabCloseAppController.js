/**
 * Description of the TabCloseAppController.js.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */

({
    doInit: function (cmp, event, helper) {
        helper.registerUtilityClickHandler(cmp, event, helper);

        window.addEventListener('TestError', function () {
            helper.dispatchCustomEvents();
        })
    },

    onTabClosed: function (component, event, helper) {
        var workspaceAPI = component.find("workspace");
        var removedTabId = event.getParam('tabId');
        console.log("Tab closed: " + removedTabId);
        workspaceAPI.getEnclosingTabId().then(function (tabId) {
            helper.dispatchCustomEvents();
        }).catch(function (error) {
            console.log(error);
        });
        workspaceAPI.getTabURL({
            tabId: removedTabId
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
})