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



export interface QuickBuyRequest {
    /**
     * Line one of the customer's shipping address
     */
    address1?: string;

    /**
     * Line two of the customer's shipping address
     */
    address2?: string;

    /**
     * Line one of the customer's billing address
     */
    billingAddress1?: string;

    /**
     * Line two of the customer's billing address
     */
    billingAddress2?: string;

    /**
     * The city for the customer's billing address
     */
    billingCityName?: string;

    /**
     * The country for the customer's billing address
     */
    billingCountryName?: string;

    /**
     * The customer's name for the billing address
     */
    billingFullName?: string;

    /**
     * The postal code for the customer's billing address
     */
    billingPostalCode?: string;

    /**
     * The state for the customer's billing address
     */
    billingStateName?: string;

    /**
     * The city for the customer's shipping address
     */
    cityName?: string;

    /**
     * The country for the customer's shipping address
     */
    countryName?: string;

    /**
     * The customer's email address
     */
    email?: string;

    /**
     * The customer's name prefix
     */
    namePrefix?: string;

    /**
     * The postal code for the customer's shipping address
     */
    postalCode?: string;

    /**
     * SKU of item being purchased
     */
    sku: string;

    /**
     * The state for the customer's shipping address
     */
    stateName?: string;

    /**
     * ID of the user making the purchase. If null, currently logged in user will be used.
     */
    userId?: number;

}
