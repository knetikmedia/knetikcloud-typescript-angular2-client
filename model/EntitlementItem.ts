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

export interface EntitlementItem {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The behaviors linked to the item, describing various options and interactions. May not be included in item lists
     */
    behaviors?: Array<models.Behavior>;

    /**
     * A category for filtering items
     */
    category?: string;

    /**
     * The date the item was created, unix timestamp in seconds
     */
    createdDate?: number;

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
     * A short description of the item, max 255 chars
     */
    shortDescription?: string;

    /**
     * A number to use in sorting items.  Default 500
     */
    sort?: number;

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

}
