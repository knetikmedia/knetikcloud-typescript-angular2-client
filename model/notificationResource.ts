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



export interface NotificationResource {
    /**
     * The data to send to websockets. Also used to fill in the templates
     */
    data?: any;

    /**
     * The resolved message template, if configured on the notification type
     */
    message?: string;

    /**
     * The id of this individual notification. Default: random
     */
    notificationId?: string;

    /**
     * The id of the notification type which will define message templates
     */
    notificationTypeId: string;

    /**
     * The id of the recipient, dependent on the recipient_type. The user's id or the topic's id
     */
    recipient: string;

    /**
     * The type of recipient for the notification. Either a user, or all users in a topic
     */
    recipientType: NotificationResource.RecipientTypeEnum;

    /**
     * The date this notification was sent
     */
    sendDate?: number;

}
export namespace NotificationResource {
    export enum RecipientTypeEnum {
        User = <any> 'user',
        Topic = <any> 'topic'
    }
}
