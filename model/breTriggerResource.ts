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

import { BreTriggerParameterDefinition } from './breTriggerParameterDefinition';


export interface BreTriggerResource {
    /**
     * The category this trigger belongs to. See endpoints for related asset information. All new triggers are in category 'custom'
     */
    category?: BreTriggerResource.CategoryEnum;

    /**
     * The unique name for the event. This serves as the unique identifier. Cannot be changed after creation
     */
    eventName: string;

    /**
     * A list of parameters that will be sent with the event when the trigger is fired. These must be included in the event and match the described types
     */
    parameters?: Array<BreTriggerParameterDefinition>;

    /**
     * Where this trigger came from. System triggers cannot be removed or updated
     */
    systemTrigger?: boolean;

    /**
     * A list of tags for filtering
     */
    tags?: Array<string>;

    /**
     * A description of the trigger
     */
    triggerDescription: string;

    /**
     * A human readable name for this trigger
     */
    triggerName: string;

}
export namespace BreTriggerResource {
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
        Verification = <any> 'verification'
    }
}
