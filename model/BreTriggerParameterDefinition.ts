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

export interface BreTriggerParameterDefinition {
    /**
     * The name of the parameter. This is used as the unique identifier of this parameter
     */
    name: string;

    /**
     * The variable type of this parameter. See Bre Variables endpoint for list
     */
    type: string;

}
