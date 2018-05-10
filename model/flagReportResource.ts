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


export interface FlagReportResource { 
    /**
     * The context of that resource 
     */
    readonly context?: string;
    /**
     * The context ID of that resource
     */
    readonly contextId?: string;
    /**
     * The date/time this resource was created in seconds since epoch
     */
    readonly createdDate?: number;
    /**
     * The unique ID for that resource
     */
    readonly id?: number;
    /**
     * The reason of that resource required only in case of active resolution
     */
    reason?: string;
    /**
     * The resolution of that resource
     */
    resolution: FlagReportResource.ResolutionEnum;
    /**
     * The date/time this report was resolved in seconds since epoch. Null if not resolved yet
     */
    readonly resolved?: number;
    /**
     * The date/time this resource was last updated in seconds since epoch
     */
    readonly updatedDate?: number;
}
export namespace FlagReportResource {
    export type ResolutionEnum = 'banned' | 'ignored';
    export const ResolutionEnum = {
        Banned: 'banned' as ResolutionEnum,
        Ignored: 'ignored' as ResolutionEnum
    };
}
