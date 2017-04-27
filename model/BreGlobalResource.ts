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

export interface BreGlobalResource {
    /**
     * A human readable description for display in admin pages
     */
    description?: string;

    /**
     * The id of the global definition. Default is a random guid. Cannot be updated
     */
    id?: string;

    /**
     * The key for the global. Must be unique when combined with scope names. Usually a single descriptive word like 'purchases' or 'logins'
     */
    key: string;

    /**
     * A human readable name for display in admin pages
     */
    name?: string;

    /**
     * A list of scoping parameters. Allows the global to have a different value in different context such as a count of purchases for each user (by putting a 'user' scope in this list). When using this global in a rule these scopes will need to be mapped with an expression to provide a value, similar to the parameters in an action
     */
    scopes?: Array<models.BreGlobalScopeDefinition>;

    /**
     * Where this global came from. System globals cannot be removed or updated
     */
    systemGlobal?: boolean;

    /**
     * The variable type the global stores. See the See Bre Variables enpoint for list
     */
    type: string;

}
