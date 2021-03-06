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

import { PaymentMethodResource } from './paymentMethodResource';
import { SimpleUserResource } from './simpleUserResource';
import { SubscriptionCreditResource } from './subscriptionCreditResource';


export interface InventorySubscriptionResource {
    /**
     * The date the subscription will be billed
     */
    billDate?: number;

    /**
     * A credit of money already applied to a subscription for the next bill, or a debt if negative
     */
    credit?: number;

    /**
     * A record of past and present credit/debt changes
     */
    creditLog?: Array<SubscriptionCreditResource>;

    /**
     * The date the grace period ends
     */
    graceEnd?: number;

    /**
     * The id of the inventory
     */
    inventoryId?: number;

    /**
     * The inventory status object
     */
    inventoryStatus?: InventorySubscriptionResource.InventoryStatusEnum;

    /**
     * The id of the item
     */
    itemId?: number;

    /**
     * The payment method object
     */
    paymentMethod?: PaymentMethodResource;

    /**
     * The recurring price that has been set to override the base price. Null if not overriding
     */
    priceOverride?: number;

    /**
     * An explanation for the reason the price is being overridden
     */
    priceOverrideReason?: string;

    /**
     * The default recurring price
     */
    recurringPrice?: number;

    /**
     * The recurring sku of the subscription
     */
    sku?: string;

    /**
     * The date the subscription will start
     */
    startDate?: number;

    /**
     * The status of the subscription
     */
    subscriptionStatus?: number;

    /**
     * The user
     */
    user?: SimpleUserResource;

}
export namespace InventorySubscriptionResource {
    export enum InventoryStatusEnum {
        Pending = <any> 'pending',
        Active = <any> 'active',
        Inactive = <any> 'inactive'
    }
}
