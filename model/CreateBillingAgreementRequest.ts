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

export interface CreateBillingAgreementRequest {
    /**
     * The endpoint URL to which PayPal should forward the user if they cancel (do not accept) the agreement
     */
    cancelUrl: string;

    /**
     * The endpoint URL to which PayPal should forward the user after they accept the agreement. This endpoint will receive information needed for the next step
     */
    returnUrl: string;

    /**
     * The ID of the user. Defaults to the logged in user
     */
    userId?: number;

}
