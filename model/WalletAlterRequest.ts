/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface WalletAlterRequest {
    /**
     * The amount of currency to add/remove. positive to add, negative to remove
     */
    delta: number;

    /**
     * The id of an invoice to attribute the transaction to
     */
    invoiceId?: number;

    /**
     * The admin entered or system generated reason
     */
    reason: string;

    /**
     * The transaction type to allow for search/etc
     */
    type?: string;

}
