/**
 * Knetik Platform API Documentation Latest
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
 *
 * OpenAPI spec version: Latest
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface GroupMember {
    group?: models.Group;

    secondary?: boolean;

    status?: GroupMember.StatusEnum;

    user?: models.User;

}
export namespace GroupMember {
    export enum StatusEnum {
        Moderator = <any> 'moderator',
        Member = <any> 'member'
    }
}
