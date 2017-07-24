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

import * as models from './models';

export interface WalletTransactionResource {
    /**
     * The new balance of the wallet after the transaction
     */
    balance?: number;

    /**
     * The unix timestamp in seconds of the transaction
     */
    createDate?: number;

    /**
     * The code of the currency for the transaction
     */
    currencyCode?: string;

    /**
     * The specific details of the transaction, such as a message from the admin that created it
     */
    details?: string;

    /**
     * The id of the transaction
     */
    id?: number;

    /**
     * The id of the invoice that spawned the transaction, if any
     */
    invoiceId?: number;

    /**
     * Whether the transaction has been refunded
     */
    isRefunded?: boolean;

    /**
     * The response
     */
    response?: string;

    /**
     * The root source of the transaction
     */
    source?: WalletTransactionResource.SourceEnum;

    /**
     * If the transaction was successful
     */
    successful?: boolean;

    /**
     * The payment gateway (external) transaction ID
     */
    transactionId?: string;

    /**
     * The general type of the transaction
     */
    type?: string;

    /**
     * The table name of the subclass
     */
    typeHint?: string;

    /**
     * The owner of the wallet
     */
    user?: models.SimpleUserResource;

    /**
     * The amount of the transaction, positive if a gain, negative if an expenditure
     */
    value?: number;

    /**
     * The id of the wallet this transaction affected
     */
    walletId?: number;

}
export namespace WalletTransactionResource {
    export enum SourceEnum {
        Digital = <any> 'digital',
        Physical = <any> 'physical'
    }
}
