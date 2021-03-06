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

import { MessageContentResource } from './messageContentResource';


export interface MessageResource {
    /**
     * The content of the message in various formats
     */
    content: MessageContentResource;

    /**
     * The id of the recipient, dependent on the recipient_type. The user's id or the topic's id. Required if sending directly to messaging service
     */
    recipient?: string;

    /**
     * The type of recipient for the message. Either a user, or all users in a topic. Required if sending directly to messaging service
     */
    recipientType?: MessageResource.RecipientTypeEnum;

    /**
     * The subject of the message. Required for email messages
     */
    subject?: string;

    /**
     * The type of message for websocket type hinting. will be added to the payload with the key _type
     */
    type?: string;

}
export namespace MessageResource {
    export enum RecipientTypeEnum {
        User = <any> 'user',
        Topic = <any> 'topic'
    }
}
