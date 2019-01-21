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



export interface ActivityEntitlementResource {
    /**
     * The ISO3 currency code the price is in, if available
     */
    currencyCode?: string;

    /**
     * The id of the entitlement item
     */
    itemId: number;

    /**
     * The name of the entitlement item
     */
    name?: string;

    /**
     * The price of the sku, if available
     */
    price?: number;

    /**
     * The sku id, if available. If multiple are available, then first one is returned
     */
    sku?: string;

}
