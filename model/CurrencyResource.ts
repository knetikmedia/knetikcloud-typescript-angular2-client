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

export interface CurrencyResource {
    /**
     * Whether the currency is active. Default true
     */
    active?: boolean;

    /**
     * The unique id code for the currency. Maximum 5 characters
     */
    code: string;

    /**
     * The unix timestamp in seconds the currency was added to the system
     */
    createdDate?: number;

    /**
     * The decimal to multiply the system base currency (from config 'currency') to localize to this one. Should be 1 for the base currency itself.
     */
    factor: number;

    /**
     * The url for an icon of the currency
     */
    icon?: string;

    /**
     * The name of the currency
     */
    name: string;

    /**
     * The type of currency. Default 'real'
     */
    type?: CurrencyResource.TypeEnum;

    /**
     * The unix timestamp in seconds the currency was last updated in the system.
     */
    updatedDate?: number;

}
export namespace CurrencyResource {
    export enum TypeEnum {
        Real = <any> 'real',
        Virtual = <any> 'virtual'
    }
}
