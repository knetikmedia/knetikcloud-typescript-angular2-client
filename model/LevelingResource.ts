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

export interface LevelingResource {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The date the leveling schema was created
     */
    createdDate?: number;

    /**
     * The description of the leveling schema
     */
    description?: string;

    /**
     * The name of the leveling schema.  IMMUTABLE
     */
    name: string;

    /**
     * A set of tiers that contain experience boundaries
     */
    tiers?: Array<models.TierResource>;

    /**
     * The date the leveling schema was updated
     */
    updatedDate?: number;

}
