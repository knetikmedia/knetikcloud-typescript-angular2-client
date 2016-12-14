/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

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
