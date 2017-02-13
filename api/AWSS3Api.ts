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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class AWSS3Api {
    protected basePath = 'https://integration.knetikcloud.com/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * Get a signed S3 URL
     * Requires the file name and file content type (i.e., &#39;video/mpeg&#39;)
     * @param filename The file name
     * @param contentType The content type
     */
    public getSignedS3URL(filename?: string, contentType?: string, extraHttpRequestParams?: any): Observable<models.AmazonS3Activity> {
        return this.getSignedS3URLWithHttpInfo(filename, contentType, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get a signed S3 URL
     * Requires the file name and file content type (i.e., &#39;video/mpeg&#39;)
     * @param filename The file name
     * @param contentType The content type
     */
    public getSignedS3URLWithHttpInfo(filename?: string, contentType?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/amazon/s3/signedposturl`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filename !== undefined) {
            if(filename instanceof Date) {
                queryParameters.set('filename', <any>filename.d.toISOString());
            } else {
                queryParameters.set('filename', <any>filename);
            }
        }

        if (contentType !== undefined) {
            if(contentType instanceof Date) {
                queryParameters.set('content_type', <any>contentType.d.toISOString());
            } else {
                queryParameters.set('content_type', <any>contentType);
            }
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (OAuth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
