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

import { Property } from './property';
import { SimpleUserResource } from './simpleUserResource';


export interface VerificationRequest {
    /**
     * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this item type
     */
    additionalProperties?: { [key: string]: Property; };

    /**
     * A unique code to identify the request. May be publically known and use ACL to require the correct user to respond, or private and the ACL allows anyone with the code to verify. default: random
     */
    code?: string;

    /**
     * The intended length of the code, if auto-generated. Minimum 3, default 16
     */
    codelength?: number;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The date, as a unix timestamp in seconds, that the request expires
     */
    expirationDate?: number;

    /**
     * Whether to include numbers, if the code is auto-generated. Default: true
     */
    includeNumbers?: boolean;

    /**
     * An optional user that is expected to respond
     */
    targetUser?: SimpleUserResource;

    /**
     * A template this verification request is validated against. Filled from url
     */
    template?: string;

    /**
     * The date/time this resource was last updated in seconds since unix epoch
     */
    updatedDate?: number;

}
