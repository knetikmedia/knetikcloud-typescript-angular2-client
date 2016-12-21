/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface StripePaymentRequest {
    /**
     * The id of the invoice to pay
     */
    invoiceId: number;

    /**
     * A token from Stripe to identify payment info to be tied to the customer
     */
    token: string;

}
