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

import { PermissionResource } from './permissionResource';


export interface RoleResource {
    /**
     * The number of clients this role is assigned to
     */
    clientCount?: number;

    /**
     * The date the role was added. Unix timestamp in seconds
     */
    createdDate?: number;

    /**
     * Whether a role is locked from being deleted
     */
    locked?: boolean;

    /**
     * The name of the role used for display purposes
     */
    name: string;

    /**
     * The keyword that defines the role
     */
    role: string;

    /**
     * The list of permissions this role has
     */
    rolePermission?: Array<PermissionResource>;

    /**
     * The number of users this role is assigned to
     */
    userCount?: number;

}
