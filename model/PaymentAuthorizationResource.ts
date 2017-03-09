/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface PaymentAuthorizationResource {
    /**
     * Whether this authorization has been captured
     */
    captured?: boolean;

    /**
     * The date this authorization was received, unix timestamp in seconds
     */
    created?: number;

    /**
     * The details for this authorization. Format dependent on payment provider
     */
    details?: any;

    /**
     * The id of the authorization
     */
    id?: number;

    /**
     * The invoice this authorization is intended to pay
     */
    invoice?: number;

    /**
     * The payment type (which provider) this payment is through
     */
    paymentType: models.SimpleReferenceResourceint;

}