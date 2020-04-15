/**
 * Created by Nagendra Kumar Singh on 11/11/2019.
 */
({

    doInit: function (component, event, helper) {
        var objElementId = document.createElement('iframe');
        objElementId.src = '/apex/' + 'AwSnap';
        objElementId.id = 'iframeId';
        objElementId.width = 0;
        objElementId.height = 0;
        objElementId.style.display = "none";
        //document.body.appendChild(objElementId);

        let myMessage = 'Test Me';


        /*setTimeout(function () {
            component.find("sayWhatChannel").publish(payload);
        }, 5000);*/
    }

});