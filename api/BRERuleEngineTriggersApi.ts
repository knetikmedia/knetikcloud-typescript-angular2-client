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
export class BRERuleEngineTriggersApi {
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
     * Create a trigger
     * Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services
     * @param breTriggerResource The BRE trigger resource object
     */
    public createBRETrigger(breTriggerResource?: models.BreTriggerResource, extraHttpRequestParams?: any): Observable<models.BreTriggerResource> {
        return this.createBRETriggerWithHttpInfo(breTriggerResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete a trigger
     * May fail if there are existing rules against it. Cannot delete core triggers
     * @param eventName The trigger event name
     */
    public deleteBRETrigger(eventName: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteBRETriggerWithHttpInfo(eventName, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single trigger
     * 
     * @param eventName The trigger event name
     */
    public getBRETrigger(eventName: string, extraHttpRequestParams?: any): Observable<models.BreTriggerResource> {
        return this.getBRETriggerWithHttpInfo(eventName, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List triggers
     * 
     * @param filterSystem Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
     * @param filterCategory Filter for triggers that are within a specific category
     * @param filterName Filter for triggers that have names containing the given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getBRETriggers(filterSystem?: boolean, filterCategory?: string, filterName?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceBreTriggerResource> {
        return this.getBRETriggersWithHttpInfo(filterSystem, filterCategory, filterName, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update a trigger
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers
     * @param eventName The trigger event name
     * @param breTriggerResource The BRE trigger resource object
     */
    public updateBRETrigger(eventName: string, breTriggerResource?: models.BreTriggerResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateBRETriggerWithHttpInfo(eventName, breTriggerResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Create a trigger
     * Customer added triggers will not be fired automatically or have rules associated with them by default. Custom rules must be added to get use from the trigger and it must then be fired from the outside. See the Bre Event services
     * @param breTriggerResource The BRE trigger resource object
     */
    public createBRETriggerWithHttpInfo(breTriggerResource?: models.BreTriggerResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/bre/triggers`;

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
            body: breTriggerResource == null ? '' : JSON.stringify(breTriggerResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete a trigger
     * May fail if there are existing rules against it. Cannot delete core triggers
     * @param eventName The trigger event name
     */
    public deleteBRETriggerWithHttpInfo(eventName: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/bre/triggers/${event_name}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'eventName' is not null or undefined
        if (eventName === null || eventName === undefined) {
            throw new Error('Required parameter eventName was null or undefined when calling deleteBRETrigger.');
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
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a single trigger
     * 
     * @param eventName The trigger event name
     */
    public getBRETriggerWithHttpInfo(eventName: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/bre/triggers/${event_name}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'eventName' is not null or undefined
        if (eventName === null || eventName === undefined) {
            throw new Error('Required parameter eventName was null or undefined when calling getBRETrigger.');
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

    /**
     * List triggers
     * 
     * @param filterSystem Filter for triggers that are system triggers when true, or not when false. Leave off for both mixed
     * @param filterCategory Filter for triggers that are within a specific category
     * @param filterName Filter for triggers that have names containing the given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getBRETriggersWithHttpInfo(filterSystem?: boolean, filterCategory?: string, filterName?: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/bre/triggers`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterSystem !== undefined) {
            if(filterSystem instanceof Date) {
                queryParameters.set('filter_system', <any>filterSystem.d.toISOString());
            } else {
                queryParameters.set('filter_system', <any>filterSystem);
            }
        }

        if (filterCategory !== undefined) {
            if(filterCategory instanceof Date) {
                queryParameters.set('filter_category', <any>filterCategory.d.toISOString());
            } else {
                queryParameters.set('filter_category', <any>filterCategory);
            }
        }

        if (filterName !== undefined) {
            if(filterName instanceof Date) {
                queryParameters.set('filter_name', <any>filterName.d.toISOString());
            } else {
                queryParameters.set('filter_name', <any>filterName);
            }
        }

        if (size !== undefined) {
            if(size instanceof Date) {
                queryParameters.set('size', <any>size.d.toISOString());
            } else {
                queryParameters.set('size', <any>size);
            }
        }

        if (page !== undefined) {
            if(page instanceof Date) {
                queryParameters.set('page', <any>page.d.toISOString());
            } else {
                queryParameters.set('page', <any>page);
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

    /**
     * Update a trigger
     * May fail if new parameters mismatch requirements of existing rules. Cannot update core triggers
     * @param eventName The trigger event name
     * @param breTriggerResource The BRE trigger resource object
     */
    public updateBRETriggerWithHttpInfo(eventName: string, breTriggerResource?: models.BreTriggerResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/bre/triggers/${event_name}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'eventName' is not null or undefined
        if (eventName === null || eventName === undefined) {
            throw new Error('Required parameter eventName was null or undefined when calling updateBRETrigger.');
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: breTriggerResource == null ? '' : JSON.stringify(breTriggerResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
