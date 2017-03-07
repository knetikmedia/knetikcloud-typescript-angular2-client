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

export interface User {
    additionalProperties?: { [key: string]: models.Property; };

    address?: string;

    address2?: string;

    affiliate?: models.Affiliate;

    avatarUrl?: string;

    children?: Array<models.UserRelationship>;

    city?: string;

    country?: models.Country;

    currency?: models.Currency;

    dateCreated?: number;

    dateOfBirth?: number;

    dateUpdated?: number;

    description?: string;

    displayName?: string;

    email?: string;

    firstName?: string;

    fullname?: string;

    gender?: string;

    groups?: Array<models.GroupMember>;

    guest?: boolean;

    id?: number;

    inviteToken?: string;

    lang?: models.Language;

    lastActivity?: number;

    lastLogin?: number;

    lastName?: string;

    lockoutAttempts?: number;

    lockoutDate?: number;

    mobileNumber?: string;

    oldId?: number;

    parents?: Array<models.UserRelationship>;

    password?: string;

    postalCode?: string;

    propertiesString?: string;

    roles?: Array<models.Role>;

    state?: string;

    status?: string;

    tagStrings?: Array<string>;

    tags?: Array<models.UserTag>;

    template?: string;

    timezone?: models.Timezone;

    token?: string;

    typeHint?: string;

    username?: string;

}
