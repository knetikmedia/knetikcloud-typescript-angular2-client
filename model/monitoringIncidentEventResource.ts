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



export interface MonitoringIncidentEventResource {
    /**
     * The id of the alert
     */
    alertId: string;

    /**
     * The date as a unix timestamp in seconds for the event
     */
    date?: number;

    /**
     * The id of the incident event
     */
    id?: string;

    /**
     * The id of the incident. will be added to any current incident for the alert or a new one created
     */
    incidentId?: string;

    /**
     * The name of the alert level
     */
    levelName: string;

    /**
     * The new status of the alert level
     */
    status: MonitoringIncidentEventResource.StatusEnum;

    /**
     * The value that triggered the alarm
     */
    triggerValue?: string;

}
export namespace MonitoringIncidentEventResource {
    export enum StatusEnum {
        OK = <any> 'OK',
        ALARM = <any> 'ALARM',
        INSUFFICIENTDATA = <any> 'INSUFFICIENT_DATA'
    }
}
