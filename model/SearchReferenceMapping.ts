/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface SearchReferenceMapping {
    /**
     * Unique identifier for the mapping to protect against duplicates
     */
    id: string;

    /**
     * The field within the type that contains the id from the refType
     */
    refIdField: string;

    /**
     * The index type that the mapping pulls data from
     */
    refType: string;

    /**
     * A map whose keys are the field names in the refType and values are the field name in the type
     */
    sourceFieldToDestinationField: { [key: string]: string; };

    /**
     * The index type that the mapping is for
     */
    type: string;

}
