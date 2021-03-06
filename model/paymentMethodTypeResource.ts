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



export interface PaymentMethodTypeResource {
    /**
     * The id of the payment method type
     */
    id: number;

    /**
     * The maximum timelimit in hours for an invoice in the processing status while waiting on this payment method type. Defaults to the global config invoice.processing_expiration_hours if null
     */
    invoiceProcessingHours?: number;

    /**
     * The name of the payment method type
     */
    name: string;

    /**
     * Whether the payment handler supports the authorize and capture flow
     */
    supportsCapture?: boolean;

    /**
     * Whether the payment handler supports paying for part of an invoice, rather than the full grand_total
     */
    supportsPartial?: boolean;

    /**
     * Whether the payment handler supports rebilling the method later (for saved payments or subscriptions)
     */
    supportsRebill?: boolean;

    /**
     * Whether the payment handler supports refunding
     */
    supportsRefunds?: boolean;

}
