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



export interface TopicSubscriberResource {
    /**
     * Whether the user has disabled messages from the topic
     */
    disabled?: boolean;

    /**
     * The ID for this topic
     */
    topicId: string;

    /**
     * The user ID subscribed to the topic
     */
    userId?: number;

    /**
     * The username subscribed to the topic
     */
    username?: string;

}
