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



export interface TemplatePushResource {
    /**
     * A list of user ids to send the message to.
     */
    recipients: Array<number>;

    /**
     * A mustache template
     */
    template: string;

    /**
     * A map of values to fill in the template
     */
    templateVars?: any;

}
