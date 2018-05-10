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



export interface CreatePayPalPaymentRequest {
    /**
     * The endpoint URL to which PayPal should forward the user to if they cancel the checkout process
     */
    cancelUrl: string;

    /**
     * The ID of an invoice to pay
     */
    invoiceId: number;

    /**
     * The endpoint URL to which PayPal should forward the user after they accept. This endpoint will receive information needed for the next step
     */
    returnUrl: string;

}
