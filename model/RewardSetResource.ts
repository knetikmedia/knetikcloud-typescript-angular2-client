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

export interface RewardSetResource {
    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The currency to give as rewards
     */
    currencyRewards?: Array<models.RewardCurrencyResource>;

    /**
     * The assigned unique ID for this reward set
     */
    id?: number;

    /**
     * The items to give as rewards
     */
    itemRewards?: Array<models.RewardItemResource>;

    /**
     * A longer describe the reward set, usually included in details
     */
    longDescription?: string;

    /**
     * The maximum placing that will receive a reward
     */
    maxPlacing?: number;

    /**
     * The user friendly name for this reward set
     */
    name: string;

    /**
     * A short paragraph to describe the reward set, usually included in listings.  Max 255 characters
     */
    shortDescription?: string;

    /**
     * A provided unique key for this reward set
     */
    uniqueKey?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

}
