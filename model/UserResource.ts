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

export interface UserResource {
    /**
     * A map of additional properties, keyed on the property name (private). Must match the names and types defined in the template for this user type, or be an extra not from the template
     */
    additionalProperties?: { [key: string]: models.Property; };

    /**
     * The first line of the user's address (private)
     */
    address?: string;

    /**
     * The second line of user's address (private)
     */
    address2?: string;

    /**
     * The url of the user's avatar image
     */
    avatarUrl?: string;

    /**
     * Relationships where this user is the parent. Read-Only, manage through separate endpoints
     */
    children?: Array<models.UserRelationshipReferenceResource>;

    /**
     * The user's city (private)
     */
    city?: string;

    /**
     * The ISO3 code for the country from the user's address (private). Will be filled in based on GeoIP country at registration if not provided.
     */
    countryCode?: string;

    /**
     * The code for the user's real money currency (private)
     */
    currencyCode?: string;

    /**
     * The user's date of birth (private) as a unix timestamp
     */
    dateOfBirth?: number;

    /**
     * The user's self description (private)
     */
    description?: string;

    /**
     * The chosen display name of the user, defaults to username if not present
     */
    displayName?: string;

    /**
     * The user's email address (private). May be required and/or unique depending on system configuration (both on by default). Must match standard email requirements if provided (RFC 2822)
     */
    email: string;

    /**
     * The user's first name (private)
     */
    firstName?: string;

    /**
     * The user's full name (private)
     */
    fullname?: string;

    /**
     * The user's gender (private)
     */
    gender?: string;

    /**
     * The id of the user
     */
    id?: number;

    /**
     * The ISO3 code for the user's currency (private)
     */
    languageCode?: string;

    /**
     * The user's last name (private)
     */
    lastName?: string;

    /**
     * The user's mobile phone number (private)
     */
    mobileNumber?: string;

    /**
     * Relationships where this user is the child. Read-Only, manage through separate endpoints
     */
    parents?: Array<models.UserRelationshipReferenceResource>;

    /**
     * The plain text password for the new user account. Required for registration; ignored on profile update.  Use password specific endpoints for editing
     */
    password?: string;

    /**
     * The user's postal code (private)
     */
    postalCode?: string;

    /**
     * The user's state (private)
     */
    state?: string;

    /**
     * Tags on the user. Can only be set by admin. Max length per tag is 64 characters
     */
    tags?: Array<string>;

    /**
     * A user template this user is validated against (private). May be null and no validation of properties will be done
     */
    template?: string;

    /**
     * The code for the user's timezone (private)
     */
    timezoneCode?: string;

    /**
     * The login username for the user (private). May be set to match email if system does not require usernames separately.
     */
    username: string;

}