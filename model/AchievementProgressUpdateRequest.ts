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

export interface AchievementProgressUpdateRequest {
    /**
     * Whether to add one to the current progress instead of setting it to progress_value. Default: false
     */
    incrementValue?: boolean;

    /**
     * The amount of progress towards earning the achievement. The max/target depends on the achievement. Required if increment_value is false/missing.
     */
    progressValue?: number;

}
