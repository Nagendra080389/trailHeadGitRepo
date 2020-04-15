/**
 * Multipart form builder.
 * <p /><p />
 * @author Nagendra Kumar Singh
 */
public class HttpFormBuilder {

    //  The boundary is alligned so it doesn't produce padding characters when base64 encoded.
    private static final String STRING_BOUNDARY = '1ff13444ed8140c7a32fc4e6451aa76d';
    private static final String STRING_DOUBLE_LINE_BREAK = '\r\n\r\n';
    private static final String STRING_SINGLE_LINE_BREAK = '\r\n';
    private static final String STRING_FORMDATA = 'Content-Disposition: form-data; name="';
    /**
     *  Returns the request's content type for multipart/form-data requests.
     */
    public static String fetchContentType() {
        return 'multipart/form-data; charset="UTF-8"; boundary="' + STRING_BOUNDARY + '"';
    }

    /**
     * Pad the value with spaces until the base64 encoding is no longer padded.
     *
     * @param strValue       MimeType
     * @param strValueCrLf64 Encoded base 64 string
     * @param strLineBreaks Line Breaks
     *
     * @return String 64
     */
    private static String safelyPad(String strValue, String strValueCrLf64, String strLineBreaks) {
        String strInnerValue = strValue;
        String strInnerValueCrLf64 = strValueCrLf64;
        String strInnerLineBreaks = strLineBreaks;
        String strValueCrLf = '';
        Blob blobValueCrLfBlob = null;

        while (strInnerValueCrLf64.endsWith('=')) {
            strInnerValue += ' ';
            strValueCrLf = strInnerValue + strInnerLineBreaks;
            blobValueCrLfBlob = Blob.valueOf(strValueCrLf);
            strInnerValueCrLf64 = EncodingUtil.base64Encode(blobValueCrLfBlob);
        }
        return strInnerValueCrLf64;
    }

    /**
     *  Write a boundary between parameters to the form's body.
     */
    public static String writeBoundary() {
        String strValue = '--' + STRING_BOUNDARY + STRING_SINGLE_LINE_BREAK;
        Blob blobValue = Blob.valueOf(strValue);

        return EncodingUtil.base64Encode(blobValue);
    }

    /**
     *  Write a boundary at the end of the form's body.
     */
    public static String writeBoundary(EndingType_ACE objEnding) {
        String strValue = '';

        if (objEnding == EndingType_ACE.Cr) {

            //  The file's base64 was padded with a single '=',
            //  so it was replaced with '\r'. Now we have to
            //  prepend the boundary with '\n' to complete
            //  the line break.
            strValue += '\n';
        } else if (objEnding == EndingType_ACE.None) {

            //  The file's base64 was not padded at all,
            //  so we have to prepend the boundary with
            //  '\r\n' to create the line break.
            strValue += STRING_SINGLE_LINE_BREAK;
        }
        //  Else:
        //  The file's base64 was padded with a double '=',
        //  so they were replaced with '\r\n'. We don't have to
        //  do anything to the boundary because there's a complete
        //  line break before it.

        if (objEnding == null) {
            strValue += '--' + STRING_BOUNDARY + '--';

        }
        Blob blobValue = Blob.valueOf(strValue);

        return EncodingUtil.base64Encode(blobValue);
    }

    /**
 *  Write a boundary at the end of the form's body.
 */
    public static String writeBoundaryForMultiple(EndingType_ACE objEnding) {
        String strValue = '';
        if (objEnding == EndingType_ACE.Cr) {

            //  The file's base64 was padded with a single '=',
            //  so it was replaced with '\r'. Now we have to
            //  prepend the boundary with '\n' to complete
            //  the line break.
            strValue += '\n';
        } else if (objEnding == EndingType_ACE.None) {

            //  The file's base64 was not padded at all,
            //  so we have to prepend the boundary with
            //  '\r\n' to create the line break.
            strValue += STRING_SINGLE_LINE_BREAK;
        }
        Blob blobValue = Blob.valueOf(strValue);
        return EncodingUtil.base64Encode(blobValue);
    }

    /**
     *  Write a key-value pair to the form's body.
     */
    public static String writeBodyParameter(String strKey, String strValue) {
        String strContentDisposition = 'Content-Disposition: form-data; name="' + strKey + '"';
        String strContentDispositionCrLf = strContentDisposition + STRING_DOUBLE_LINE_BREAK;
        Blob blobContentDispositionCrLf = Blob.valueOf(strContentDispositionCrLf);
        String strContentDispositionCrLf64 = EncodingUtil.base64Encode(blobContentDispositionCrLf);
        String strContent = safelyPad(strContentDisposition, strContentDispositionCrLf64, STRING_DOUBLE_LINE_BREAK);
        String strValueCrLf = strValue + STRING_SINGLE_LINE_BREAK;
        Blob blobValueCrLf = Blob.valueOf(strValueCrLf);
        String strValueCrLf64 = EncodingUtil.base64Encode(blobValueCrLf);
        strContent += safelyPad(strValue, strValueCrLf64, STRING_SINGLE_LINE_BREAK);

        return strContent;
    }


    /**
     *  Write a key-value pair to the form's body.
     */
    public static String writeBodyParameter(String strKey, String strValue, String strFileName) {
        string contentDisposition = 'Content-Disposition: form-data; name="' + strKey + '"; filename="' + strFileName + '"';

        string contentDispositionCrLf = contentDisposition + '\r\n\r\n';

        blob contentDispositionCrLfBlob = blob.valueOf(contentDispositionCrLf);

        string contentDispositionCrLf64 = EncodingUtil.base64Encode(contentDispositionCrLfBlob);

        string content = SafelyPad(contentDisposition, contentDispositionCrLf64, '\r\n\r\n');
        if (strKey == 'file') {
            system.debug(strValue);
        }
        string valueCrLf = strValue + '\r\n';

        blob valueCrLfBlob = blob.valueOf(valueCrLf);
        if (strKey == 'file') {
            system.debug(valueCrLfBlob);
        }
        string valueCrLf64 = EncodingUtil.base64Encode(valueCrLfBlob);

        integer file64Length = valueCrLf64 .length();
        String last4Bytes = valueCrLf64 .substring(valueCrLf64 .length() - 4, valueCrLf64 .length());

        content += SafelyPad(strValue, valueCrLf64, '\r\n');
        return content;
    }

    private static String resolveMimeType(String fileName) {
        String fileType = fileName.substringAfterLast('.');
        String mimeType = 'application/octet-stream'; // fallback value
        if (fileType.equalsIgnoreCase('png')) {
            mimeType = 'image/png';
        } else if (fileType.equalsIgnoreCase('jpeg') || fileType.equalsIgnoreCase('jpg')) {
            mimeType = 'image/jpg';
        } else if (fileType.equalsIgnoreCase('pgm')) {
            mimeType = 'image/x-portable-graymap';
        } else if (fileType.equalsIgnoreCase('ppm')) {
            mimeType = 'image/x-portable-pixmap';
        }
        return mimeType;
    }

    /**
     *  Write a key-value pair to the form's body for a Blob.
     */
    public static String writeBlobBodyParameter(String strKey, String strFile64, String strFileName) {

        String mimeType = resolveMimeType(strFileName);

        String strInternalFile64 = strFile64;
        String contentDisposition = 'Content-Disposition: form-data; name="' + strKey + '"; filename="' + strFileName + '"';
        String contentDispositionCrLf = contentDisposition + STRING_SINGLE_LINE_BREAK;
        Blob contentDispositionCrLfBlob = Blob.valueOf(contentDispositionCrLf);
        String contentDispositionCrLf64 = EncodingUtil.base64Encode(contentDispositionCrLfBlob);
        String content = safelyPad(contentDisposition, contentDispositionCrLf64, STRING_SINGLE_LINE_BREAK);

        String contentTypeHeader = 'Content-Type: ' + 'application/octet-stream';
        String contentTypeCrLf = contentTypeHeader + STRING_DOUBLE_LINE_BREAK;
        Blob contentTypeCrLfBlob = Blob.valueOf(contentTypeCrLf);
        String contentTypeCrLf64 = EncodingUtil.base64Encode(contentTypeCrLfBlob);
        content += safelyPad(contentTypeHeader, contentTypeCrLf64, STRING_DOUBLE_LINE_BREAK);

        String last4Bytes = strInternalFile64.substring(strInternalFile64.length() - 4, strInternalFile64.length());

        // Avoid padding the file data with spaces, which safelyPad does
        // http://salesforce.stackexchange.com/a/33326/102
        EndingType_ACE ending = EndingType_ACE.None;
        if (last4Bytes.endsWith('==')) {

            // The '==' sequence indicates that the last group contained only one 8 bit byte
            // 8 digit binary representation of CR is 00001101
            // 8 digit binary representation of LF is 00001010
            // Stitch them together and then from the right split them into 6 bit chunks
            // 0000110100001010 becomes 0000 110100 001010
            // Note the first 4 bits 0000 are identical to the padding used to encode the
            // second original 6 bit chunk, this is handy it means we can hard code the response in
            // The decimal values of 110100 001010 are 52 10
            // The base64 mapping values of 52 10 are 0 K
            // See http://en.wikipedia.org/wiki/Base64 for base64 mapping table
            // Therefore, we replace == with 0K
            // Note: if using \n\n instead of \r\n replace == with 'oK'
            last4Bytes = last4Bytes.substring(0, 2) + '0K';
            strInternalFile64 = strInternalFile64.substring(0, strInternalFile64.length() - 4) + last4Bytes;
            // We have appended the \r\n to the Blob, so leave footer as it is.
            ending = EndingType_ACE.CrLf;
        } else if (last4Bytes.endsWith('=')) {
            last4Bytes = last4Bytes.substring(0, 3) + 'N';
            strInternalFile64 = strInternalFile64.substring(0, strInternalFile64.length() - 4) + last4Bytes;

            // We have appended the CR e.g. \r, still need to prepend the line feed to the footer
            ending = EndingType_ACE.Cr;
        }

        content += strInternalFile64;

        if (!mimeType.endsWithIgnoreCase('application/octet-stream')) {
            String strValueCrLf = content + STRING_SINGLE_LINE_BREAK;
            Blob blobValueCrLf = Blob.valueOf(strValueCrLf);
            String strValueCrLf64 = EncodingUtil.base64Encode(blobValueCrLf);
            content += safelyPad(content, strValueCrLf64, STRING_SINGLE_LINE_BREAK);
        }
        return content;
    }

    public static String writeBlobBodyParameterMultiple(String strKey, String strFile64, String strFileName) {

        String strInternalFile64 = strFile64;
        String contentDisposition = 'Content-Disposition: form-data; name="' + strKey + '"; filename="' + strFileName + '"';
        String contentDispositionCrLf = contentDisposition + STRING_SINGLE_LINE_BREAK;
        Blob contentDispositionCrLfBlob = Blob.valueOf(contentDispositionCrLf);
        String contentDispositionCrLf64 = EncodingUtil.base64Encode(contentDispositionCrLfBlob);
        String content = safelyPad(contentDisposition, contentDispositionCrLf64, STRING_SINGLE_LINE_BREAK);

        String contentTypeHeader = 'Content-Type: ' + 'application/octet-stream';
        String contentTypeCrLf = contentTypeHeader + STRING_DOUBLE_LINE_BREAK;
        Blob contentTypeCrLfBlob = Blob.valueOf(contentTypeCrLf);
        String contentTypeCrLf64 = EncodingUtil.base64Encode(contentTypeCrLfBlob);
        content += safelyPad(contentTypeHeader, contentTypeCrLf64, STRING_DOUBLE_LINE_BREAK);

        String last4Bytes = strInternalFile64.substring(strInternalFile64.length() - 4, strInternalFile64.length());
        EndingType_ACE ending = EndingType_ACE.None;
        if (last4Bytes.endsWith('==')) {
            last4Bytes = last4Bytes.substring(0, 2) + '0K';
            strInternalFile64 = strInternalFile64.substring(0, strInternalFile64.length() - 4) + last4Bytes;
            ending = EndingType_ACE.CrLf;
        } else if (last4Bytes.endsWith('=')) {
            last4Bytes = last4Bytes.substring(0, 3) + 'N';
            strInternalFile64 = strInternalFile64.substring(0, strInternalFile64.length() - 4) + last4Bytes;
            System.debug('strInternalFile64 -= > ' + strInternalFile64);
            ending = EndingType_ACE.Cr;
        }
        content += strInternalFile64;
        content += writeBoundaryForMultiple(ending);
        return content;
    }

    public enum EndingType_ACE {
        Cr,
        CrLf,
        None
    }

}