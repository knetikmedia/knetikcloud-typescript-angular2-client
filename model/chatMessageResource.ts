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



export interface ChatMessageResource {
    /**
     * The content of the message
     */
    content: any;

    /**
     * The date the chat message was created
     */
    createdDate?: number;

    /**
     * Whether the message has been edited
     */
    edited?: boolean;

    /**
     * The id for this message
     */
    id?: string;

    /**
     * The type of the message set by the client
     */
    messageType: string;

    /**
     * The id of the recipient: user id or topic id
     */
    recipientId: string;

    /**
     * The recipient type of the message
     */
    recipientType: ChatMessageResource.RecipientTypeEnum;

    /**
     * The id of the sender
     */
    senderId?: number;

    /**
     * The id of the thread
     */
    threadId?: string;

    /**
     * The date the chat message was updated
     */
    updatedDate?: number;

}
export namespace ChatMessageResource {
    export enum RecipientTypeEnum {
        User = <any> 'user',
        Topic = <any> 'topic'
    }
}
