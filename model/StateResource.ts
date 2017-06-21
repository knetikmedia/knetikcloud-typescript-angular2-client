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

export interface StateResource {
    /**
     * The code of the state
     */
    code?: string;

    /**
     * The iso3 of the country this state is in
     */
    countryCodeIso3?: string;

    /**
     * The unique ID for the state
     */
    id?: number;

    /**
     * The name of the state
     */
    name?: string;

}
