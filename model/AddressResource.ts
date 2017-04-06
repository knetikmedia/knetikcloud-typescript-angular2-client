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

export interface AddressResource {
    /**
     * The first line of the address
     */
    address1: string;

    /**
     * A second line of the address
     */
    address2?: string;

    /**
     * The city
     */
    city: string;

    /**
     * The iso3 code for the country
     */
    countryCode: string;

    /**
     * The postal code
     */
    postalCode?: string;

    /**
     * The code for the state. Required if the country has states/provinces/equivalent
     */
    stateCode?: string;

}
