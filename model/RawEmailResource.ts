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

export interface RawEmailResource {
    /**
     * The body of the outgoing message.
     */
    body: string;

    /**
     * Address to attribute the outgoing message to. Optional if the config email.out_address is set.
     */
    from?: string;

    /**
     * Whether the body is to be treated as html. Default false.
     */
    html?: boolean;

    /**
     * A list of user ids to send the message to.
     */
    recipients: Array<number>;

    /**
     * The subject of the outgoing message.
     */
    subject: string;

}
