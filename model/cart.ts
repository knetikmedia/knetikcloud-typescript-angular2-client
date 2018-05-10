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

import { CartLineItem } from './cartLineItem';
import { CartShippingAddressRequest } from './cartShippingAddressRequest';
import { CartShippingOption } from './cartShippingOption';
import { CouponDefinition } from './couponDefinition';


export interface Cart {
    availableShippingOptions?: Array<CartShippingOption>;

    countryTax?: number;

    coupons?: Array<CouponDefinition>;

    created?: number;

    currencyCode?: string;

    discountTotal?: number;

    errorCode?: number;

    errorMessage?: string;

    grandTotal?: number;

    id?: string;

    invoiceId?: number;

    items?: Array<CartLineItem>;

    owner?: number;

    selectedShippingOptions?: Array<CartShippingOption>;

    shippable?: boolean;

    shippingAddress?: CartShippingAddressRequest;

    shippingCost?: number;

    stateTax?: number;

    status?: Cart.StatusEnum;

    subtotal?: number;

    updated?: number;

}
export namespace Cart {
    export enum StatusEnum {
        Active = <any> 'active',
        Processing = <any> 'processing',
        Closed = <any> 'closed',
        Onhold = <any> 'onhold'
    }
}
