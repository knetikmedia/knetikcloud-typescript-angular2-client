/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface ForwardLog {
    /**
     * The end date of the forward log entry
     */
    endDate?: number;

    errorMsg?: string;

    eventId?: string;

    headers?: string;

    /**
     * The http status code the forward log entry
     */
    httpStatusCode?: number;

    /**
     * The id of the forward log entry
     */
    id?: string;

    method?: string;

    /**
     * The payload of the forward log entry
     */
    payload?: any;

    /**
     * The response string of the forward log entry
     */
    response?: string;

    /**
     * The retry count of the forward log entry
     */
    retryCount?: number;

    retryable?: boolean;

    ruleId?: string;

    /**
     * The start date of the forward log entry
     */
    startDate?: number;

    success?: boolean;

    /**
     * The endpoint url of the forward log entry
     */
    url?: string;

}
