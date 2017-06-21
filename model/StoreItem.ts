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

export interface StoreItem extends models.Item {
    /**
     * Whether or not the item is currently displayable.  Default = true
     */
    displayable?: boolean;

    /**
     * A list of country ID to include in the blacklist/whitelist geo policy
     */
    geoCountryList?: Array<string>;

    /**
     * Whether to use the geo_country_list as a black list or white list for item geographical availability
     */
    geoPolicyType?: StoreItem.GeoPolicyTypeEnum;

    /**
     * Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default = 0
     */
    shippingTier?: number;

    /**
     * The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
     */
    skus: Array<models.Sku>;

    /**
     * The date the item will leave the store, unix timestamp in seconds.  If set to null, item will never leave the store
     */
    storeEnd?: number;

    /**
     * The date the item will appear in the store, unix timestamp in seconds.  If set to null, item will appear in store immediately
     */
    storeStart?: number;

    /**
     * The vendor who provides the item
     */
    vendorId: number;

}
export namespace StoreItem {
    export enum GeoPolicyTypeEnum {
        Whitelist = <any> 'whitelist',
        Blacklist = <any> 'blacklist'
    }
}
