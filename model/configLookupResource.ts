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
import { ExpressionResource } from './expressionResource';


/**
 * Expressions are instructions for the rule engine to resolve certain values. For example instead of `user 1` it'd state `user provided by the event`. Full list and definitions available at GET /bre/expressions.
 */
export interface ConfigLookupResource { 
    definition?: string;
    lookupKey?: ExpressionResource;
    requiredKeyType?: string;
    type?: string;
    valueType?: string;
}
