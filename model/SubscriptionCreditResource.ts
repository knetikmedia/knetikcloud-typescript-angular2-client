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

export interface SubscriptionCreditResource {
    /**
     * The amount of the credit, negative for debt
     */
    amount: number;

    /**
     * The date this credit was added, unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * The id of the credit record
     */
    id?: number;

    /**
     * The id of the subscription inventory entry
     */
    inventoryId?: number;

    /**
     * The reason for the subscription credit
     */
    reason: string;

}
