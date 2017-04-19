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

export interface PermissionResource {
    /**
     * The date the permission was added. Unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * The description of the permission
     */
    description?: string;

    /**
     * Whether a permission is locked from being deleted
     */
    locked?: boolean;

    /**
     * The name of the permission used for display purposes
     */
    name: string;

    /**
     * The name of the parent of the permission
     */
    parent?: string;

    /**
     * The keyword that defines the permission
     */
    permission: string;

    /**
     * The date the permission was updated. Unix timestamp in seconds
     */
    updatedDate?: number;

}