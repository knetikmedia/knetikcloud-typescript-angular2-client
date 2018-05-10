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


export interface ActivityOccurrenceStatusWrapper { 
    value?: ActivityOccurrenceStatusWrapper.ValueEnum;
}
export namespace ActivityOccurrenceStatusWrapper {
    export type ValueEnum = 'SETUP' | 'OPEN' | 'LAUNCHING' | 'PLAYING' | 'FINISHED' | 'ABANDONED';
    export const ValueEnum = {
        SETUP: 'SETUP' as ValueEnum,
        OPEN: 'OPEN' as ValueEnum,
        LAUNCHING: 'LAUNCHING' as ValueEnum,
        PLAYING: 'PLAYING' as ValueEnum,
        FINISHED: 'FINISHED' as ValueEnum,
        ABANDONED: 'ABANDONED' as ValueEnum
    };
}
