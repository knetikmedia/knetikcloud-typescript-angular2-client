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

import { Behavior } from './behavior';
import { Property } from './property';
import { Sku } from './sku';
import { StoreItem } from './storeItem';
import { SubscriptionPlan } from './subscriptionPlan';


export interface Subscription extends StoreItem {
    availability?: Subscription.AvailabilityEnum;

    consolidationDayOfMonth?: number;

    subscriptionPlans?: Array<SubscriptionPlan>;

}
export namespace Subscription {
    export enum AvailabilityEnum {
        All = <any> 'all',
        NewSubscribers = <any> 'new_subscribers'
    }
}
