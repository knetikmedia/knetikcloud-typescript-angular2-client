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


export interface ResourceTypeDescription { 
    /**
     * The field on the resource that the id is in
     */
    idField: string;
    /**
     * The unique name for the resource in swagger. This serves as the unique identifier. Cannot be changed after creation
     */
    name: string;
    /**
     * The base path of the service
     */
    servicePath: string;
}
