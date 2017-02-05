/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface UserInventoryResource {
    /**
     * A map of data for behaviors
     */
    behaviorData?: any;

    /**
     * The date/time this resource was created in seconds since epoch
     */
    createdDate?: number;

    /**
     * The date/time this resource exires in seconds since epoch. Null for no expiration. For subscriptions, this is the end of the 'grace period' if left unpaid
     */
    expires?: number;

    /**
     * The id of the inventory
     */
    id?: number;

    /**
     * The id of the invoice that resulted in this inventory, if any
     */
    invoiceId?: number;

    /**
     * The id of the item
     */
    itemId?: number;

    /**
     * The name of the item
     */
    itemName?: string;

    /**
     * The type hint of the item
     */
    itemTypeHint?: string;

    /**
     * The status of the inventory. Pending inventory is not yet ready for use. Inactive inventory has expired or been used up
     */
    status?: UserInventoryResource.StatusEnum;

    /**
     * The date/time this resource was last updated in seconds since epoch
     */
    updatedDate?: number;

    /**
     * The id of the user this inventory belongs to
     */
    user?: models.SimpleUserResource;

}
export namespace UserInventoryResource {
    export enum StatusEnum {
        Pending = <any> 'pending',
        Active = <any> 'active',
        Inactive = <any> 'inactive'
    }
}
