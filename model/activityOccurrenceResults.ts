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
import { UserActivityResults } from './userActivityResults';


export interface ActivityOccurrenceResults { 
    /**
     * The game results for each user. Include all users that played (paid to get in) even if they were eliminated without a result. A null metric is allowed
     */
    users: Array<UserActivityResults>;
}
