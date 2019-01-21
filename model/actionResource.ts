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

import { ActionVariableResource } from './actionVariableResource';


export interface ActionResource {
    /**
     * The category the action is in. All customer specific actions are in the 'custom' category
     */
    category?: ActionResource.CategoryEnum;

    /**
     * The description of the action
     */
    description: string;

    /**
     * The name of the action. Used as the unique id for reference
     */
    name: string;

    /**
     * A list of tags for searching
     */
    tags?: Array<string>;

    /**
     * The variables required for the action
     */
    variables: Array<ActionVariableResource>;

}
export namespace ActionResource {
    export enum CategoryEnum {
        Achievement = <any> 'achievement',
        Behavior = <any> 'behavior',
        Comment = <any> 'comment',
        Disposition = <any> 'disposition',
        Device = <any> 'device',
        Entitlement = <any> 'entitlement',
        Friends = <any> 'friends',
        Fulfillment = <any> 'fulfillment',
        Gamification = <any> 'gamification',
        Inventory = <any> 'inventory',
        Invoice = <any> 'invoice',
        Media = <any> 'media',
        Scheduler = <any> 'scheduler',
        Store = <any> 'store',
        Subscription = <any> 'subscription',
        User = <any> 'user',
        Wallet = <any> 'wallet',
        Custom = <any> 'custom',
        Challenge = <any> 'challenge',
        Activity = <any> 'activity',
        Campaign = <any> 'campaign',
        Event = <any> 'event',
        Monitoring = <any> 'monitoring',
        Verification = <any> 'verification',
        Group = <any> 'group'
    }
}
