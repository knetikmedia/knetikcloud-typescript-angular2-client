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

export interface LookupTypeResource {
    /**
     * The description of the expression type
     */
    description: string;

    /**
     * The variable type the key expression must be, or null if it's dependent (see description for explanation in this case)
     */
    keyType: string;

    /**
     * The name of the expression type
     */
    name: string;

    /**
     * The variable type of the value this expression returns, or null if it's dependent (see description for explanation in this case)
     */
    valueType: string;

}
