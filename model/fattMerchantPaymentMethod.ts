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



export interface FattMerchantPaymentMethod {
    address1?: string;

    address2?: string;

    addressCity?: string;

    addressCountry?: string;

    addressState?: string;

    addressZip?: string;

    /**
     * Last four digits of the credit card
     */
    cardLastFour: string;

    createdAt?: string;

    /**
     * Unique FattMerchant customer ID
     */
    customerId: string;

    deletedAt?: string;

    id?: string;

    /**
     * Nickname given to the FattMerchant payment method
     */
    nickname: string;

    updatedAt?: string;

}
