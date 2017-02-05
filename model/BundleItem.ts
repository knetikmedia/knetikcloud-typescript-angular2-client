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

export interface BundleItem {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
     */
    behaviors?: Array<models.Behavior>;

    /**
     * The skus of items to be included in this bundle, and how they influence the bundle total price.  Must have at least one SKU
     */
    bundledSkus: Array<models.BundledSku>;

    /**
     * A category for filtering items
     */
    category?: string;

    /**
     * The date the item was created, unix timestamp in seconds
     */
    createdDate?: number;

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
    geoPolicyType?: BundleItem.GeoPolicyTypeEnum;

    /**
     * The id of the item
     */
    id?: number;

    /**
     * A long description of the item
     */
    longDescription?: string;

    /**
     * The name of the item
     */
    name: string;

    /**
     * Provides the abstract shipping needs if this item is physical and can be shipped.  A value of zero means no shipping needed.  Default = 0
     */
    shippingTier?: number;

    /**
     * A short description of the item, max 255 chars
     */
    shortDescription?: string;

    /**
     * The skus for the item. Each defines a unique configuration for the item to be purchased (Large-Blue, Small-Green, etc). These are what is ultimately selected in the store and added to the cart
     */
    skus: Array<models.Sku>;

    /**
     * A number to use in sorting items.  Default 500
     */
    sort?: number;

    /**
     * The date the item will leave the store, unix timestamp in seconds.  If set to null, item will never leave the store
     */
    storeEnd?: number;

    /**
     * The date the item will appear in the store, unix timestamp in seconds.  If set to null, item will appear in store immediately
     */
    storeStart?: number;

    /**
     * List of tags used for filtering items
     */
    tags?: Array<string>;

    /**
     * An item template this item is validated against.  May be null and no validation of additional_properties will be done.  Default = null
     */
    template?: string;

    /**
     * The type of the item
     */
    typeHint: string;

    /**
     * The unique key for the item
     */
    uniqueKey?: string;

    /**
     * The date the item was last updated, unix timestamp in seconds
     */
    updatedDate?: number;

    /**
     * The vendor who provides the item
     */
    vendorId: number;

}
export namespace BundleItem {
    export enum GeoPolicyTypeEnum {
        Whitelist = <any> 'whitelist',
        Blacklist = <any> 'blacklist'
    }
}
