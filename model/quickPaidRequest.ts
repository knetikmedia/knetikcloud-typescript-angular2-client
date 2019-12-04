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


export interface QuickPaidRequest {
    /**
     * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this invoice type, or be an extra not from the template
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * Line one of the customer's shipping address
     */
    address1?: string;

    /**
     * Line two of the customer's shipping address
     */
    address2?: string;

    /**
     * Line one of the customer's billing address
     */
    billingAddress1?: string;

    /**
     * Line two of the customer's billing address
     */
    billingAddress2?: string;

    /**
     * The city for the customer's billing address
     */
    billingCityName?: string;

    /**
     * The country for the customer's billing address
     */
    billingCountryName?: string;

    /**
     * The customer's name for the billing address
     */
    billingFullName?: string;

    /**
     * The postal code for the customer's billing address
     */
    billingPostalCode?: string;

    /**
     * The state for the customer's billing address
     */
    billingStateName?: string;

    /**
     * The city for the customer's shipping address
     */
    cityName?: string;

    /**
     * The country for the customer's shipping address
     */
    countryName?: string;

    /**
     * The customer's email address
     */
    email?: string;

    /**
     * The amount of federal tax to add (increases final price of invoice even if using price override). Minimum 0
     */
    federalTax?: number;

    /**
     * An optional target user to give the item to as a gift
     */
    giftTarget: number;

    /**
     * An optional note to add to the item
     */
    itemNotes?: string;

    /**
     * The customer's name prefix
     */
    namePrefix?: string;

    /**
     * The amount already paid. Must match final price to complete purchase. Ignored for non-paid endpoints. Minimum 0
     */
    paidAmount?: number;

    /**
     * The postal code for the customer's shipping address
     */
    postalCode?: string;

    /**
     * Override the price of an item, if the behavior configuration permits it. Do not send if taking standard pricing. Minimum 0
     */
    priceOverride?: number;

    /**
     * SKU of item being purchased
     */
    sku: string;

    /**
     * The state for the customer's shipping address
     */
    stateName?: string;

    /**
     * The amount of state tax to add (increases final price of invoice even if using price override). Minimum 0
     */
    stateTax?: number;

    /**
     * An invoice template this invoice is validated against (private). May be null and no validation of properties will be done
     */
    template?: string;

    /**
     * Transaction details
     */
    transactionDetails?: string;

    /**
     * Transaction type
     */
    transactionType: string;

    /**
     * ID of the user making the purchase. If null, currently logged in user will be used.
     */
    userId?: number;

}
