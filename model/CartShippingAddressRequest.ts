/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface CartShippingAddressRequest {
    /**
     * The city of the user
     */
    city?: string;

    /**
     * The country code of the user
     */
    countryCodeIso3?: string;

    /**
     * The email of the user
     */
    email?: string;

    /**
     * The first name of the user
     */
    firstName?: string;

    /**
     * The last name of the user
     */
    lastName?: string;

    namePrefix?: string;

    /**
     * The order notes the user
     */
    orderNotes?: string;

    /**
     * The phone number of the user
     */
    phoneNumber?: string;

    /**
     * The postal state code of the user
     */
    postalStateCode?: string;

    /**
     * The shipping address of the user, first line
     */
    shippingAddressLine1?: string;

    /**
     * The shipping address of the user, second line
     */
    shippingAddressLine2?: string;

    /**
     * The zipcode of the user
     */
    zip?: string;

}
