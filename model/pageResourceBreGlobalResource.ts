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

import { BreGlobalResource } from './breGlobalResource';
import { Order } from './order';


export interface PageResourceBreGlobalResource {
    content?: Array<BreGlobalResource>;

    first?: boolean;

    last?: boolean;

    number?: number;

    numberOfElements?: number;

    size?: number;

    sort?: Array<Order>;

    totalElements?: number;

    totalPages?: number;

}