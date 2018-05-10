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

import { CoreActivityOccurrenceSettings } from './coreActivityOccurrenceSettings';
import { SelectedSettingRequest } from './selectedSettingRequest';


export interface ActivityOccurrenceSettingsResource {
    /**
     * Defines core settings about the activity occurrence that affect how it behaves in the system. Validated against core settings in activity/challenge-activity.
     */
    coreSettings?: CoreActivityOccurrenceSettings;

    /**
     * The values selected from the available settings defined for the activity. Ex: difficulty: hard. Can be left out if the activity is played during an event and the settings are already set at the event level. Ex: every monday, difficulty: hard, number of questions: 10, category: sport. Otherwise, the set must exactly match those of the activity.
     */
    settings?: Array<SelectedSettingRequest>;

}
