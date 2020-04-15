/**
 * Controller for CaseErrorLightningComponent_ACE.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */
({
    /**
     * This method closes the modal.
     *
     * @param objComponent To access dom elements.
     */
    handleCancel: function (objComponent) {

        if (objComponent) {

            //We set the local storage to remove the modal.
            localStorage.boolCaseAttachmentErrorDismiss = true;
        }

    },

})