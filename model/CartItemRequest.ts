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

export interface CartItemRequest {
    /**
     * The affiliate key of the item
     */
    affiliateKey?: string;

    /**
     * The catalog SKU of the item
     */
    catalogSku: string;

    /**
     * The quantity of the item
     */
    quantity: number;

}
