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

import * as models from './models';

export interface CartLineItem {
    currencyCode?: string;

    description?: string;

    discount?: models.Discount;

    lineTotal?: number;

    name?: string;

    originalLineTotal?: number;

    originalUnitPrice?: number;

    qty?: number;

    saleName?: string;

    sku?: string;

    skuDescription?: string;

    storeItemId?: number;

    tags?: Array<string>;

    thumbUrl?: string;

    uniqueKey?: string;

    unitPrice?: number;

    vendorId?: number;

    vendorName?: string;

}
