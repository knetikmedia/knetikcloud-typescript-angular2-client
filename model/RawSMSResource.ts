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

export interface RawSMSResource {
    /**
     * The phone number to attribute the outgoing message to. Optional if the config text.out_number is set.
     */
    from?: string;

    /**
     * A list of user ids to send the message to.
     */
    recipients: Array<number>;

    /**
     * The body of the outgoing text message.
     */
    text: string;

}
