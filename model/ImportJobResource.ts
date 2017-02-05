/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ImportJobResource {
    /**
     * The id of the category to assign all questions in the import to
     */
    categoryId: string;

    /**
     * The date the job was created in seconds since unix epoc
     */
    createdDate?: number;

    /**
     * The id of the job
     */
    id?: number;

    /**
     * A name for this import for later reference
     */
    name: string;

    /**
     * Error information from validation
     */
    output?: Array<models.ImportJobOutputResource>;

    /**
     * The number of questions form the CSV file. Filled in after validation
     */
    recordCount?: number;

    /**
     * The status of the job
     */
    status?: ImportJobResource.StatusEnum;

    /**
     * The date the job was last updated in seconds since unix epoc
     */
    updatedDate?: number;

    /**
     * The url of a CSV file to pull trivia questions from. Cannot be changed after initial POST
     */
    url: string;

    /**
     * The vendor who supplied this set of questions
     */
    vendor: string;

}
export namespace ImportJobResource {
    export enum StatusEnum {
        PENDINGVALIDATION = <any> 'PENDING_VALIDATION',
        VALIDATING = <any> 'VALIDATING',
        VALID = <any> 'VALID',
        INVALID = <any> 'INVALID',
        PENDINGPROCESS = <any> 'PENDING_PROCESS',
        PROCESSING = <any> 'PROCESSING',
        PROCESSED = <any> 'PROCESSED',
        FAILED = <any> 'FAILED'
    }
}
