/**
 * Description of the CaseAttachmentLightningController_ACE.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */
global with sharing class CaseAttachmentLightningController_ACE {

    //Getter and Setters.
    public Boolean boolOauthTokenExpired { get; set; }
    public Boolean boolException { get; set; }
    public String strOauthRedirectionUrl { get; set; }
    private IntegrationWrapperClass_CF objIntegrationWrapperClass;
    public List<CaseAttachmentWrapper_ACE> lstCaseAttachmentsRecords { get ; set; }

    public Object uploadFilesToUCRViaCallout() {

        System.debug('*****' + ApexPages.currentPage().getParameters().get('strFilebase64'));
        String strEndpointName = 'JsonRec';
        Map<String, String> mapHeaderValues = new Map<String, String>();
        objIntegrationWrapperClass = IntegrationClass_CF.continuationCallout(strEndpointName,
                'attachmentContinuationResponse', null, true, mapHeaderValues, null);

        //Http Request.
        HttpRequest objHttpRequest;
        Continuation objContinuation;
        objHttpRequest = new HttpRequest();
        objHttpRequest.setMethod(objIntegrationWrapperClass.strRequestMethod);
        objHttpRequest.setEndpoint(objIntegrationWrapperClass.strRequestEndpoint);

        //Continuation Object.
        objContinuation = new Continuation(objIntegrationWrapperClass.intTimeout);
        objContinuation.continuationMethod = objIntegrationWrapperClass.strCallbackMethodName;
        objIntegrationWrapperClass.strRequestKey = objContinuation.addHttpRequest(objHttpRequest);
        objContinuation.state = objIntegrationWrapperClass;
        return objContinuation;
    }

    /**
     * Callback method for the continuous callout .
     */
    public Object attachmentContinuationResponse() {
        try {

            // Fetch the response from the framework.
            objIntegrationWrapperClass = IntegrationClass_CF.getContinuationResponse(objIntegrationWrapperClass);
            if (objIntegrationWrapperClass.strResponseStatusCode == '200' && objIntegrationWrapperClass.strResponseBody != null &&
                    !String.isBlank(objIntegrationWrapperClass.strResponseBody)) {
                lstCaseAttachmentsRecords = new List<CaseAttachmentWrapper_ACE>();
                for (Integer intCountInteger = 0; intCountInteger < 4; intCountInteger++) {
                    CaseAttachmentWrapper_ACE objAttachment = new CaseAttachmentWrapper_ACE();
                    objAttachment.strName = 'Title' + intCountInteger;
                    objAttachment.strDate = Date.today().format();
                    objAttachment.strType = 'Type' + intCountInteger;
                    objAttachment.strLink = 'www.google.com';
                    lstCaseAttachmentsRecords.add(objAttachment);
                }
            } else {

                // If any exception or any status other than 200, occurs in callout, then mark the boolean as true.
                boolException = true;
            }
        } catch (Exception objException) {
            ErrorLogClass_CF.processException(objException);
            boolException = true;
        }
        return null;
    }

    public static String uploadFile(Set<String> setAttachmentIds) {
        List<Attachment> attachments = [SELECT Id, Body,Name from Attachment WHERE Id IN :setAttachmentIds];
        //  Compose the form
        string form64 = '';
        //******This was the boundary I was missing****
        form64 += HttpFormBuilder.writeBoundary();
        form64 += HttpFormBuilder.writeBlobBodyParameter('files', EncodingUtil.base64Encode(attachments.get(0).Body), attachments.get(0).Name);
        form64 += HttpFormBuilder.writeBoundary();
        form64 += HttpFormBuilder.writeBlobBodyParameter('files', EncodingUtil.base64Encode(attachments.get(1).Body), attachments.get(1).Name);
        form64 += HttpFormBuilder.writeBoundary();
        form64 += HttpFormBuilder.writeBlobBodyParameter('files', EncodingUtil.base64Encode(attachments.get(2).Body), attachments.get(2).Name);
        form64 += HttpFormBuilder.writeBoundary(null);
        return form64;

    }

    public static void fireAPI(String reqEndPoint, Blob formBlob) {
        //callout ePOR service
        string contentType = HttpFormBuilder.fetchContentType();
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setEndpoint(reqEndPoint);
        req.setHeader('Content-Type', contentType);
        req.setBodyAsBlob(formBlob);
        req.setTimeout(120000);

        Http http = new Http();
        HTTPResponse res = http.send(req);
        System.debug('res -> ' + res.getBody());
    }

    public static String uploadFile(Blob file_body, String file_name, Boolean test) {
        String boundary = '----------------------------741e90d31eff';
        String header = '--' + boundary + '\nContent-Disposition: form-data; name="file"; filename="' + file_name + '";\nContent-Type: application/octet-stream';
        String footer = '--' + boundary;
        String headerEncoded = EncodingUtil.base64Encode(Blob.valueOf(header + '\r\n\r\n'));
        while (headerEncoded.endsWith('=')) {
            header += ' ';
            headerEncoded = EncodingUtil.base64Encode(Blob.valueOf(header + '\r\n\r\n'));
        }
        String bodyEncoded = EncodingUtil.base64Encode(file_body);
        String bodyBlob = null;
        String last4Bytes = bodyEncoded.substring(bodyEncoded.length() - 4, bodyEncoded.length());
        if (last4Bytes.endsWith('==')) {
            last4Bytes = last4Bytes.substring(0, 2) + '0K';
            bodyEncoded = bodyEncoded.substring(0, bodyEncoded.length() - 4) + last4Bytes;
            String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
            bodyBlob = headerEncoded + bodyEncoded + footerEncoded;
        } else if (last4Bytes.endsWith('=')) {
            last4Bytes = last4Bytes.substring(0, 3) + 'N';
            bodyEncoded = bodyEncoded.substring(0, bodyEncoded.length() - 4) + last4Bytes;
            footer = '\n' + footer;
            String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
            bodyBlob = headerEncoded + bodyEncoded + footerEncoded;
        } else {
            footer = '\r\n' + footer;
            String footerEncoded = EncodingUtil.base64Encode(Blob.valueOf(footer));
            bodyBlob = headerEncoded + bodyEncoded + footerEncoded;
        }

        return bodyBlob;
    }

}