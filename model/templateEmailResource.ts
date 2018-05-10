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
import { KeyValuePairstringstring } from './keyValuePairstringstring';


export interface TemplateEmailResource { 
    /**
     * Address to attribute the outgoing message to. Optional if the config email.out_address is set.
     */
    from?: string;
    /**
     * A list of user ids to send the message to.
     */
    recipients: Array<number>;
    /**
     * The subject for email
     */
    subject?: string;
    /**
     * The key for the template
     */
    templateKey: string;
    /**
     * A list of variables to fill in the template
     */
    templateVars?: Array<KeyValuePairstringstring>;
}
