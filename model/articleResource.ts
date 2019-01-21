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
import { Property } from './property';
import { SimpleUserResource } from './simpleUserResource';


export interface ArticleResource {
    /**
     * Whether the article is active
     */
    active: boolean;

    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * The body of the article
     */
    body: string;

    /**
     * The category for the article
     */
    category: NestedCategory;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The creator of the article. Default: caller
     */
    creator?: SimpleUserResource;

    /**
     * The id of the article. Default: random
     */
    id?: string;

    /**
     * The tags for the article
     */
    tags?: Array<string>;

    /**
     * An article template this article is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * The title of the article
     */
    title: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

    /**
     * The view count of the article
     */
    viewCount?: number;

}
