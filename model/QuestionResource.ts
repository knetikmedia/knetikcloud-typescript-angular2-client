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

export interface QuestionResource {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The list of available answers
     */
    answers?: Array<models.AnswerResource>;

    /**
     * The category for the question
     */
    category: models.NestedCategory;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The difficulty of the question
     */
    difficulty: number;

    /**
     * The unique ID for that resource
     */
    id?: string;

    /**
     * The id of the import job that created the question, or null if not from an import
     */
    importId?: number;

    /**
     * When the question becomes available, null for never, in seconds since epoch
     */
    publishedDate?: number;

    /**
     * The question. Different 'type' values indicate different structures as the question may be test, image, etc. See information on additional properties for the list and their structures
     */
    question: models.Property;

    /**
     * The first source of the question
     */
    source1?: string;

    /**
     * The second source of the question
     */
    source2?: string;

    /**
     * The list of tags
     */
    tags?: Array<string>;

    /**
     * A question template this question is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

    /**
     * The supplier of the question
     */
    vendor?: string;

}
