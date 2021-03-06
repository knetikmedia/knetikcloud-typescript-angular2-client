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

import { ContributionResource } from './contributionResource';
import { Property } from './property';


export interface ArtistResource {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * YYYY/MM/DD when this artist was born
     */
    born?: string;

    /**
     * The current number of contributions the artist has made
     */
    contributionCount?: number;

    /**
     * The list of media this artist has contributed to as well as role(s) during contribution.  Use media endpoint to add contributions
     */
    contributions?: Array<ContributionResource>;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * YYYY/MM/DD when this artist died
     */
    died?: string;

    /**
     * The unique ID for that resource
     */
    id?: number;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    longDescription?: string;

    /**
     * The user friendly name of that resource
     */
    name: string;

    /**
     * The sort order priority of the artist.  Default 100
     */
    priority?: number;

    /**
     * The user friendly name of that resource. Defaults to blank string
     */
    shortDescription?: string;

    /**
     * An artist template this artist is validated against (private). May be null and no validation of additional_properties will be done
     */
    template?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

}
