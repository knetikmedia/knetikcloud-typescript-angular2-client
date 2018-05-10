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

import { Property } from './property';


export interface Sku {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type, or be an extra not from the template
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * The currency code for the SKU, a three letter string (ISO3)
     */
    currencyCode: string;

    /**
     * The friendly name of the SKU as it will appear on invoices and reports. Typically represents the option name like red, large, etc
     */
    description: string;

    /**
     * The number of SKUs currently in stock
     */
    inventory?: number;

    /**
     * Alerts vendor when SKU inventory drops below this value
     */
    minInventoryThreshold?: number;

    notAvailable?: boolean;

    notDisplayable?: boolean;

    /**
     * The base price before any sale
     */
    originalPrice: number;

    /**
     * The current price of the SKU with sales, if any. Set original_price for the base
     */
    price?: number;

    /**
     * Whether or not the SKU is currently visible to users. This will not block users from purchase. Use start_date or stop_date to prevent purchase. Default: true
     */
    published?: boolean;

    /**
     * The id of a sale affecting the price, if any
     */
    saleId?: number;

    /**
     * The name of a sale affecting the price, if any
     */
    saleName?: string;

    /**
     * The stock keeping unit (SKU), a unique identifier for a given product.  Max 40 characters
     */
    sku: string;

    /**
     * The date the sku becomes visible (if published) and available for purchase, unix timestamp in seconds.  If set to null, sku will become available immediately
     */
    startDate?: number;

    /**
     * The date the sku becomes hidden and unavailable for purchase, unix timestamp in seconds.  If set to null, sku is always available
     */
    stopDate?: number;

}
