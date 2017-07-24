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

export interface Batch {
    /**
     * The list of batch requests
     */
    batch: Array<models.BatchRequest>;

    /**
     * The amount of time before a request token is returned instead of the batch result.  Default is 60.  Range is 0-300
     */
    timeout: number;

}
