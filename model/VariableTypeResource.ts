/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface VariableTypeResource {
    /**
     * The base class of the type
     */
    base: VariableTypeResource.BaseEnum;

    /**
     * The name of the variable type. Used as the unique id
     */
    name: string;

}
export namespace VariableTypeResource {
    export enum BaseEnum {
        NUMBER = <any> 'NUMBER',
        INTEGER = <any> 'INTEGER',
        STRING = <any> 'STRING',
        DATE = <any> 'DATE',
        BOOLEAN = <any> 'BOOLEAN'
    }
}
