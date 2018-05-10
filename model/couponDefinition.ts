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


export interface CouponDefinition { 
    /**
     * A unique identifier for the discount. Can be used to remove the discount, and uniqueness within the cart will be enforced.
     */
    code: string;
    /**
     * A description for the discount.
     */
    description?: string;
    /**
     * The type of discount in terms of how it deducts price.
     */
    discountType: CouponDefinition.DiscountTypeEnum;
    /**
     * Whether this discount is exclusive and cannot be used in conjunction with other discounts/coupons. default=false
     */
    exclusive?: boolean;
    /**
     * For coupon_cart, a minimum total price that the cart must meet to be valid.
     */
    maxDiscount?: number;
    /**
     * The maximum number of items to count this discount for (not for cart_coupon).
     */
    maxQuantity?: number;
    /**
     * For coupon_cart, a minimum total price that the cart must meet to be valid.
     */
    minCartTotal?: number;
    /**
     * A name for the discount.
     */
    name: string;
    /**
     * Whether this coupon is exclusive to itself or not (true means cannot add two of this same coupon to the same cart).  Default = false
     */
    selfExclusive?: boolean;
    /**
     * The id of the item this discount applies to, which must be present in the cart. Applies if coupon_type_hint is coupon_single_item or coupon_voucher.
     */
    targetItemId?: number;
    /**
     * The type of discount in terms of what it applies to. coupon_cart applies to the cart as a whole, other types apply to specific items based on different criteria.
     */
    type: CouponDefinition.TypeEnum;
    /**
     * A unique identifier string for the discount.
     */
    uniqueKey: string;
    /**
     * Which tags this applies for (item must have at least one of them), if coupon_type is coupon_tag.
     */
    validForTags?: Array<string>;
    /**
     * The amount of the discount. If discount_type is value then this is the raw currency amount to remove. If discount_type is percentage then this will be multiplied by the cart total or item price to get the discount amount (0.5 is half price).
     */
    value: number;
    /**
     * Which vendor this applies for, if coupon_type is coupon_vendor.
     */
    vendorId?: number;
}
export namespace CouponDefinition {
    export type DiscountTypeEnum = 'value' | 'percentage';
    export const DiscountTypeEnum = {
        Value: 'value' as DiscountTypeEnum,
        Percentage: 'percentage' as DiscountTypeEnum
    };
    export type TypeEnum = 'coupon_cart' | 'coupon_single_item' | 'coupon_voucher' | 'coupon_vendor' | 'coupon_tag';
    export const TypeEnum = {
        Cart: 'coupon_cart' as TypeEnum,
        SingleItem: 'coupon_single_item' as TypeEnum,
        Voucher: 'coupon_voucher' as TypeEnum,
        Vendor: 'coupon_vendor' as TypeEnum,
        Tag: 'coupon_tag' as TypeEnum
    };
}
