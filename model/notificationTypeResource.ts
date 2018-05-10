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



export interface NotificationTypeResource {
    /**
     * The date the type was created, as a unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * Whether the email body should be resolved. If true, the external email delivery system will be expected to handle the templating (Mandrill/Mailchimp). default: false
     */
    emailBodyTemplateExternal?: boolean;

    /**
     * The id of a message template to resolve the email body. If null, no websocket message wil be sent
     */
    emailBodyTemplateId?: string;

    /**
     * The id of a message template to resolve the email subject. If null, no websocket message wil be sent
     */
    emailSubjectTemplateId?: string;

    /**
     * The id of the notification type. Default: random
     */
    id?: string;

    /**
     * The name of the notification type
     */
    name: string;

    /**
     * The id of a message template to resolve the SMS message. If null, no sms message wil be sent
     */
    smsTemplateId?: string;

    /**
     * The date the type was last updated, as a unix timestamp in seconds
     */
    updatedDate?: number;

}