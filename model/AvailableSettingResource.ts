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

export interface AvailableSettingResource {
    /**
     * Whether the setting is advanced. Default: false
     */
    advancedOption?: boolean;

    /**
     * The value of the default option (must be in options array)
     */
    defaultValue: string;

    /**
     * The description of the setting
     */
    description?: string;

    /**
     * The unique ID for the setting
     */
    key: string;

    /**
     * The textual name of the setting
     */
    name: string;

    /**
     * The set of options available for this setting
     */
    options: Array<models.SettingOption>;

}
