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



export interface AccessEntryResource {
    /**
     * The actions that users with the sid can take on this resource. Must match with actions available for the type of resource
     */
    actions: Array<string>;

    /**
     * The security id that gets this level of access. Security ids are prefixed with a type, foollowed by a hyphen, then an id. Formats: user-ID, group-UNIQUE_NAME, friend-USER_ID and role-ROLE
     */
    sid: string;

}
