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
import { BatchReturn } from './batchReturn';


export interface BatchResult { 
    /**
     * List of batch responses.  Returns in the order requested
     */
    readonly batchReturn?: Array<BatchReturn>;
    /**
     * The date the batch call started processing
     */
    readonly createdDate?: number;
    /**
     * The token to use at the /batch/{token} endpoint if the request times out
     */
    readonly id?: string;
    /**
     * The date the batch call finished processing
     */
    readonly updatedDate?: number;
}
