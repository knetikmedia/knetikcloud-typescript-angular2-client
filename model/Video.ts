/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Video {
    active?: boolean;

    author?: models.Artist;

    authored?: number;

    banned?: boolean;

    categoryId?: string;

    categoryName?: string;

    contributors?: models.CollectionVideoContribution;

    created?: number;

    embed?: string;

    extension?: string;

    height?: number;

    id?: number;

    length?: number;

    location?: string;

    longDescription?: string;

    mimeType?: string;

    name?: string;

    priority?: number;

    privacy?: Video.PrivacyEnum;

    published?: boolean;

    shortDescription?: string;

    size?: number;

    tags?: Array<models.VideoTag>;

    thumbnail?: string;

    updated?: number;

    uploader?: models.User;

    views?: number;

    whitelist?: Array<models.User>;

    width?: number;

}
export namespace Video {
    export enum PrivacyEnum {
        Private = <any> 'private',
        Friends = <any> 'friends',
        Public = <any> 'public'
    }
}
