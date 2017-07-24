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

import * as models from './models';

export interface PropertyFieldResource {
    /**
     * A description of the field
     */
    description?: string;

    /**
     * The type of values within a 'list' type field
     */
    innerType?: PropertyFieldResource.InnerTypeEnum;

    /**
     * A description of fields within objects within a 'list' type field, when inner_type is 'object'
     */
    innerTypeFields?: Array<models.PropertyFieldResource>;

    /**
     * The name of the field
     */
    name?: string;

    /**
     * Whether the field is required
     */
    required?: boolean;

    /**
     * The type of the field
     */
    type?: PropertyFieldResource.TypeEnum;

    /**
     * A list of valid values for 'enum' type fields
     */
    validValues?: Array<string>;

}
export namespace PropertyFieldResource {
    export enum InnerTypeEnum {
        Integer = <any> 'integer',
        Number = <any> 'number',
        Bool = <any> 'bool',
        String = <any> 'string',
        Enumeration = <any> 'enumeration',
        List = <any> 'list',
        Object = <any> 'object'
    }
    export enum TypeEnum {
        Integer = <any> 'integer',
        Number = <any> 'number',
        Bool = <any> 'bool',
        String = <any> 'string',
        Enumeration = <any> 'enumeration',
        List = <any> 'list',
        Object = <any> 'object'
    }
}
