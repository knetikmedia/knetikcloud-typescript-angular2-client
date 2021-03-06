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



export interface MonitoringMetricDatapointResource {
    /**
     * Dimensions giving context to the datapoint. Map of keys to values (example: {\"location\": \"USA\", \"user\": \"75\"}). Cannot include the | symbol
     */
    dimensions?: { [key: string]: string; };

    /**
     * The id of the metric. Required for batch endpoint
     */
    id?: string;

    /**
     * The unix timestamp in seconds the datapoint occurred, default: now
     */
    timestamp?: number;

    /**
     * The value of the datapoint
     */
    value: number;

}
