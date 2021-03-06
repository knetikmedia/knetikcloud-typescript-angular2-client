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

import { NestedCategory } from './nestedCategory';
import { PollAnswerResource } from './pollAnswerResource';
import { Property } from './property';


export interface PollResource {
    /**
     * Whether the poll is active
     */
    active: boolean;

    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * The answers to the poll
     */
    answers: Array<PollAnswerResource>;

    /**
     * The category for the poll
     */
    category: NestedCategory;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The id of the poll
     */
    id?: string;

    /**
     * The tags for the poll
     */
    tags?: Array<string>;

    /**
     * A poll template this poll is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * The text of the poll
     */
    text: string;

    /**
     * The media type of the poll
     */
    type: PollResource.TypeEnum;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

}
export namespace PollResource {
    export enum TypeEnum {
        TEXT = <any> 'TEXT',
        IMAGE = <any> 'IMAGE',
        VIDEO = <any> 'VIDEO',
        AUDIO = <any> 'AUDIO'
    }
}
