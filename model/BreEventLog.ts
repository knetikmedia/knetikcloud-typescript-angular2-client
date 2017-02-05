/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface BreEventLog {
    /**
     * The customer of the BRE event log
     */
    customer?: string;

    /**
     * The event id of the BRE event log
     */
    eventId?: number;

    /**
     * The event name of the BRE event log
     */
    eventName?: string;

    /**
     * The event start date of the BRE event log
     */
    eventStartDate?: number;

    /**
     * The id of the BRE event log
     */
    id?: string;

    /**
     * The event paramters of the BRE event log
     */
    parameters?: any;

    /**
     * The rules of the BRE event log
     */
    rules?: Array<models.BreRuleLog>;

}
