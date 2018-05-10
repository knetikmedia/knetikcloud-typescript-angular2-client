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


export interface BreEvent { 
    /**
     * The event name of the trigger to be fired
     */
    eventName: string;
    /**
     * The parameters to the event. A Map (assosiative array) with a key for each trigger parameter name and a corrosponding value.
     */
    params: any;
}
