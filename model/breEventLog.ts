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

import { BreRuleLog } from './breRuleLog';


export interface BreEventLog {
    /**
     * The difference between received and handlded in ms
     */
    age?: number;

    /**
     * The customer
     */
    customer?: string;

    /**
     * The time it took to expand the event parameters
     */
    eventExpansionDuration?: number;

    /**
     * The event id
     */
    eventId?: string;

    /**
     * The time it took to log the event in IO
     */
    eventLoggingDuration?: number;

    /**
     * The event name
     */
    eventName?: string;

    /**
     * The date the event was fired
     */
    eventReceivedDate?: number;

    /**
     * The date the event was handled
     */
    eventStartDate?: number;

    /**
     * The id
     */
    id?: string;

    /**
     * The event paramters
     */
    parameters?: any;

    /**
     * The rules
     */
    rules?: Array<BreRuleLog>;

    /**
     * The time it took to run all the rules for that event
     */
    runtime?: number;

}
