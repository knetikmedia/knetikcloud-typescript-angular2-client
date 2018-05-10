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


export interface FulfillmentType { 
    /**
     * Whether the type is core and cannot be altered/deleted, read-only
     */
    core?: boolean;
    /**
     * A description of the type
     */
    description?: string;
    /**
     * The unique id of the type, read-only
     */
    id?: number;
    /**
     * The name of the type
     */
    name: string;
}
