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
