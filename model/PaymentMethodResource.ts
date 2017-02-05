/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface PaymentMethodResource {
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    default?: boolean;

    /**
     * Whether this payment method is disabled or not
     */
    disabled?: boolean;

    /**
     * The expiration date for the payment method, expressed as seconds since epoch. Typically used for credit card payment methods
     */
    expirationDate?: number;

    /**
     * The expiration month (1 - 12) for the payment method. Typically used for credit card payment methods
     */
    expirationMonth?: number;

    /**
     * The expiration year for the payment method. Typically used for credit card payment methods
     */
    expirationYear?: number;

    /**
     * The unique ID for that resource
     */
    id?: number;

    /**
     * The last 4 digits of the account number for the payment method. Typically used for credit card payment methods
     */
    last4?: string;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    longDescription?: string;

    /**
     * The user friendly name of that resource
     */
    name: string;

    /**
     * The type of payment method. Must be a pre-existing value
     */
    paymentMethodType: models.PaymentMethodTypeResource;

    /**
     * The generic payment type. Default is card
     */
    paymentType?: PaymentMethodResource.PaymentTypeEnum;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    shortDescription?: string;

    /**
     * The sort value for the payment method
     */
    sort?: number;

    /**
     * The unique token for the payment method
     */
    token?: string;

    /**
     * An optional unique identifier
     */
    uniqueKey?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

    /**
     * The user's id. If null, indicates a shared payment method that any user can use (i.e., 'wallet')
     */
    userId?: number;

    verified?: boolean;

}
export namespace PaymentMethodResource {
    export enum PaymentTypeEnum {
        Card = <any> 'card',
        BankAccount = <any> 'bank_account'
    }
}