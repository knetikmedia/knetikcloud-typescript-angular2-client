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

export interface ActionVariableResource {
    /**
     * The name of the variable
     */
    name: string;

    /**
     * Whether this variable is optional and can be left out/null
     */
    optional: boolean;

    /**
     * The type of the variable (see variable type endpoint for list)
     */
    type: string;

}