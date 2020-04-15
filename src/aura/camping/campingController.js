/**
 * Description of the campingController.js.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */
({

    setFocusedTabHighlighted: function (component, event, helper) {
        window.addEventListener('TestError', function (objEvent) {
            console.log('Do init called');
            helper.dispatchCustomEvents();
        });
        var workspaceAPI = component.find("workspace");
        const objModalLibrary = component.find("popuplib");
        $A.createComponent(
            "c:CaseErrorLightningComponent_ACE",
            {},
            function (objModalHTMLCode, strStatus) {
                if (strStatus === "SUCCESS") {
                    objModalLibrary.showCustomModal({
                        body: objModalHTMLCode,
                        showCloseButton: false
                    }).then(function (objOverlay) {
                        const objModal = setInterval(function () {
                            if (typeof localStorage.boolCaseAttachmentErrorDismiss !== "undefined" && localStorage.boolCaseAttachmentErrorDismiss !== null &&
                                localStorage.boolCaseAttachmentErrorDismiss) {
                                objOverlay.close();
                                localStorage.boolCaseAttachmentErrorDismiss = false;
                                clearInterval(objModal);
                            }
                        }, 10);
                    });
                }
            }
        );
    },

    fireSetInterval: function (component) {
        var i = 0;
        setInterval(function () {
            console.log('Test ' + i++);
        }, 1000);

    },

    handleRecordTypeSelection: function (component, event, helper) {
        let v = '0037F0000028MTRQA2';
        var workspaceAPI = component.find("workspace");
        var navigatorApi = component.find("navService");
        workspaceAPI.openTab({
            recordId: v,
            focus: true
        }).then(function () {
            var editRecordEvent = $A.get("e.force:editRecord");
            editRecordEvent.setParams({
                "recordId": v
            });
            editRecordEvent.fire();
            /*navigatorApi.navigate({
                type: 'standard__recordPage',
                attributes: {
                    recordId:  v,
                    actionName: 'edit'
                }
            })*/
        })
    },


    onTabCreated: function (component, event, helper) {
        var newTabId = event.getParam('tabId');
        var workspace = component.find("workspace");
        workspace.getTabInfo({
            tabId: newTabId
        }).then(function (response) {
            console.log(response);
        })
    },

    onTabUpdated: function (component, event, helper) {
        var updatedTabId = event.getParam("tabId");
        var workspace = component.find("workspace");
        workspace.getTabInfo({
            tabId: updatedTabId
        }).then(function (response) {
            console.log(response);
        })
    },

    setValueInSecureObejct: function (component) {
        window.dispatchEvent(new CustomEvent('TestError', {detail: 'test'}));
        var root = [];
        for (var i = 0; i < 5; i++) {
            var branch = [];
            for (var j = 0; j < 5; j++) {
                branch.push('hello_world ');
            }
            root.push(branch);
        }
        component.set('v.root', root);
    },

    clearSecureObject: function (component) {
        var root = [];
        component.set('v.root', root);
    },

    doInit: function () {

    },

    onTabClosed: function (component, event, helper) {
        const closingTabId = event.getParam('tabId');
        const objWorkspaceAPI = component.find('workspace');
        if (objWorkspaceAPI !== undefined && objWorkspaceAPI !== null) {
            objWorkspaceAPI.getEnclosingTabId().then(function (tabId) {


            }).catch(function (error) {

            });
        }
    }
})