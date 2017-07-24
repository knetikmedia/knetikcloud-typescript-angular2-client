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

import * as models from './models';

export interface DispositionResource {
    /**
     * The context of that resource. Required when passed to /dispositions rather than context specific endpoint
     */
    context?: string;

    /**
     * The context_id of that resource. Required when passed to /dispositions rather than context specific endpoint
     */
    contextId?: string;

    /**
     * The date/time this resource was created in seconds since unix epoch
     */
    createdDate?: number;

    /**
     * The unique ID for that resource
     */
    id?: number;

    /**
     * The name of the disposition, 1-20 characters. (ex: like/dislike/favorite, etc)
     */
    name: string;

    /**
     * The user
     */
    user?: models.SimpleUserResource;

}
