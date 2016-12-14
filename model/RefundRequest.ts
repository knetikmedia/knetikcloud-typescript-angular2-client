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

export interface RefundRequest {
    /**
     * The amount to refund. If left off, will refund the remaining balance of the transaction or specific item balance (if SKU provided), whichever is less.
     */
    amount?: number;

    /**
     * Notes about or reason for the refund
     */
    notes: string;

    /**
     * The SKU of a specific item from the invoice to refund. Affects the maximum refund amount (not to exceed the price of this item times quantity on invoice). Transaction must be tied to an invoice if used.
     */
    sku?: string;

}
