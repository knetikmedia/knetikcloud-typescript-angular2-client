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
export class MessagingApi {
    protected basePath = 'https://sandbox.knetikcloud.com/';
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
     * Send a raw email to one or more users
     * 
     * @param rawEmailResource The new raw email to be sent
     */
    public sendRawEmail(rawEmailResource?: models.RawEmailResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.sendRawEmailWithHttpInfo(rawEmailResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param rawSMSResource The new raw SMS to be sent
     */
    public sendRawSMS(rawSMSResource?: models.RawSMSResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.sendRawSMSWithHttpInfo(rawSMSResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Send a templated email to one or more users
     * 
     * @param messageResource The new template email to be sent
     */
    public sendTemplatedEmail(messageResource?: models.TemplateEmailResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.sendTemplatedEmailWithHttpInfo(messageResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param templateSMSResource The new template SMS to be sent
     */
    public sendTemplatedSMS(templateSMSResource?: models.TemplateSMSResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.sendTemplatedSMSWithHttpInfo(templateSMSResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Send a raw email to one or more users
     * 
     * @param rawEmailResource The new raw email to be sent
     */
    public sendRawEmailWithHttpInfo(rawEmailResource?: models.RawEmailResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/messaging/raw-email`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: rawEmailResource == null ? '' : JSON.stringify(rawEmailResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Send a raw SMS
     * Sends a raw SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param rawSMSResource The new raw SMS to be sent
     */
    public sendRawSMSWithHttpInfo(rawSMSResource?: models.RawSMSResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/messaging/raw-sms`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: rawSMSResource == null ? '' : JSON.stringify(rawSMSResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Send a templated email to one or more users
     * 
     * @param messageResource The new template email to be sent
     */
    public sendTemplatedEmailWithHttpInfo(messageResource?: models.TemplateEmailResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/messaging/templated-email`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: messageResource == null ? '' : JSON.stringify(messageResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Send a new templated SMS
     * Sends a templated SMS text message to one or more users. User&#39;s without registered mobile numbers will be skipped.
     * @param templateSMSResource The new template SMS to be sent
     */
    public sendTemplatedSMSWithHttpInfo(templateSMSResource?: models.TemplateSMSResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/messaging/templated-sms`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: templateSMSResource == null ? '' : JSON.stringify(templateSMSResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
