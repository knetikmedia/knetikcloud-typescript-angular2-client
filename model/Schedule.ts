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

export interface Schedule {
    /**
     * The duration of the repeatable events
     */
    duration: number;

    /**
     * The unit of time for the duration field
     */
    durationUnit: Schedule.DurationUnitEnum;

    /**
     * How often the event is scheduled
     */
    repeat: Schedule.RepeatEnum;

}
export namespace Schedule {
    export enum DurationUnitEnum {
        Millisecond = <any> 'millisecond',
        Second = <any> 'second',
        Minute = <any> 'minute',
        Hour = <any> 'hour',
        Day = <any> 'day',
        Week = <any> 'week',
        Month = <any> 'month',
        Year = <any> 'year'
    }
    export enum RepeatEnum {
        DAILY = <any> 'DAILY',
        WEEKLY = <any> 'WEEKLY'
    }
}
