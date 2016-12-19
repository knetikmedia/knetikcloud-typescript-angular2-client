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

export interface SimpleUserResource {
    /**
     * The url of the user's avatar image
     */
    avatarUrl?: string;

    /**
     * The public username of the user
     */
    displayName?: string;

    /**
     * The id of the user
     */
    id: number;

    /**
     * The username of the user
     */
    username?: string;

}
