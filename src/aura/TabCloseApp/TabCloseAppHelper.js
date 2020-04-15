/**
 * Created by Nagendra on 10/1/2019.
 */

({
    registerUtilityClickHandler: function (cmp, event, helper) {
        var utilityBarAPI = cmp.find("utilitybar");

        setTimeout(function () {
            utilityBarAPI.onUtilityClick({
                eventHandler: function (objClickResponse) {

                }
            });
        }, 100);

    }
});