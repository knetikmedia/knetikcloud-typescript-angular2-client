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

export interface CampaignResource {
    /**
     * Whether the campaign is active or not.  Defaults to false
     */
    active?: boolean;

    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The unique ID for that resource
     */
    id?: number;

    /**
     * The strategy for calculating the leaderboard. Defaults to highest score. Value MUST come from the list of available strategies from the Leaderboard Service
     */
    leaderboardStrategy?: string;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    longDescription?: string;

    /**
     * The user friendly name of that resource
     */
    name: string;

    /**
     * The name of the next challenge coming up
     */
    nextChallenge?: string;

    /**
     * The date/time of the next challenge coming up
     */
    nextChallengeDate?: number;

    /**
     * The rewards to give at the end of the campaign. When creating/updating only id is used. Reward set must be pre-existing
     */
    rewardSet?: models.RewardSetResource;

    /**
     * Indicate if the rewards have been given out already
     */
    rewardStatus?: CampaignResource.RewardStatusEnum;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    shortDescription?: string;

    /**
     * A campaign template this campaign is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

}
export namespace CampaignResource {
    export enum RewardStatusEnum {
        Pending = <any> 'pending',
        Failed = <any> 'failed',
        Complete = <any> 'complete',
        Partial = <any> 'partial'
    }
}
