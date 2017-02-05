/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
export class ActivitiesApi {
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
     * Updated the status of an activity occurrence
     * If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityCccurrenceStatus The activity occurrence status object
     */
    public completeActivityOccurrenceUsingPUT(activityOccurrenceId: number, activityCccurrenceStatus?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.completeActivityOccurrenceUsingPUTWithHttpInfo(activityOccurrenceId, activityCccurrenceStatus, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a new activity occurrence
     * Has to enforce extra rules if not used as an admin
     * @param test if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
     * @param activityOccurrenceResource The activity occurrence object
     */
    public createActivityOccurrenceUsingPOST(test?: boolean, activityOccurrenceResource?: models.ActivityOccurrenceResource, extraHttpRequestParams?: any): Observable<models.ActivityOccurrenceResource> {
        return this.createActivityOccurrenceUsingPOSTWithHttpInfo(test, activityOccurrenceResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create an activity
     * 
     * @param activityResource The activity resource object
     */
    public createActivityUsingPOST(activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<models.ActivityResource> {
        return this.createActivityUsingPOSTWithHttpInfo(activityResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete an activity
     * 
     * @param id The id of the activity
     */
    public deleteActivityUsingDELETE(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteActivityUsingDELETEWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List activity definitions
     * 
     * @param filterTemplate Filter for activities that are templates, or specifically not if false
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivitiesUsingGET(filterTemplate?: boolean, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceBareActivityResource> {
        return this.getActivitiesUsingGETWithHttpInfo(filterTemplate, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single activity
     * 
     * @param id The id of the activity
     */
    public getActivityUsingGET(id: number, extraHttpRequestParams?: any): Observable<models.ActivityResource> {
        return this.getActivityUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Sets the status of an activity occurrence to FINISHED and logs metrics
     * 
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityOccurrenceResults The activity occurrence object
     */
    public postResultsUsingPOST(activityOccurrenceId: number, activityOccurrenceResults?: models.ActivityOccurrenceResults, extraHttpRequestParams?: any): Observable<models.ActivityOccurrenceResults> {
        return this.postResultsUsingPOSTWithHttpInfo(activityOccurrenceId, activityOccurrenceResults, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an activity
     * 
     * @param id The id of the activity
     * @param activityResource The activity resource object
     */
    public updateActivityUsingPUT(id: number, activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateActivityUsingPUTWithHttpInfo(id, activityResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Updated the status of an activity occurrence
     * If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityCccurrenceStatus The activity occurrence status object
     */
    public completeActivityOccurrenceUsingPUTWithHttpInfo(activityOccurrenceId: number, activityCccurrenceStatus?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activity-occurrences/${activity_occurrence_id}/status`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling completeActivityOccurrenceUsingPUT.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (knetik_oauth) required
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
            body: activityCccurrenceStatus == null ? '' : JSON.stringify(activityCccurrenceStatus), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create a new activity occurrence
     * Has to enforce extra rules if not used as an admin
     * @param test if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
     * @param activityOccurrenceResource The activity occurrence object
     */
    public createActivityOccurrenceUsingPOSTWithHttpInfo(test?: boolean, activityOccurrenceResource?: models.ActivityOccurrenceResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activity-occurrences`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (test !== undefined) {
            if(test instanceof Date) {
                queryParameters.set('test', <any>test.d.toISOString());
            } else {
                queryParameters.set('test', <any>test);
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

        // authentication (knetik_oauth) required
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
            body: activityOccurrenceResource == null ? '' : JSON.stringify(activityOccurrenceResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create an activity
     * 
     * @param activityResource The activity resource object
     */
    public createActivityUsingPOSTWithHttpInfo(activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activities`;

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

        // authentication (knetik_oauth) required
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
            body: activityResource == null ? '' : JSON.stringify(activityResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an activity
     * 
     * @param id The id of the activity
     */
    public deleteActivityUsingDELETEWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activities/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActivityUsingDELETE.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (knetik_oauth) required
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
     * List activity definitions
     * 
     * @param filterTemplate Filter for activities that are templates, or specifically not if false
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivitiesUsingGETWithHttpInfo(filterTemplate?: boolean, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activities`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterTemplate !== undefined) {
            if(filterTemplate instanceof Date) {
                queryParameters.set('filter_template', <any>filterTemplate.d.toISOString());
            } else {
                queryParameters.set('filter_template', <any>filterTemplate);
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

        if (order !== undefined) {
            if(order instanceof Date) {
                queryParameters.set('order', <any>order.d.toISOString());
            } else {
                queryParameters.set('order', <any>order);
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
     * Get a single activity
     * 
     * @param id The id of the activity
     */
    public getActivityUsingGETWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activities/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivityUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

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
     * Sets the status of an activity occurrence to FINISHED and logs metrics
     * 
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityOccurrenceResults The activity occurrence object
     */
    public postResultsUsingPOSTWithHttpInfo(activityOccurrenceId: number, activityOccurrenceResults?: models.ActivityOccurrenceResults, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activity-occurrences/${activity_occurrence_id}/results`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling postResultsUsingPOST.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (knetik_oauth) required
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
            body: activityOccurrenceResults == null ? '' : JSON.stringify(activityOccurrenceResults), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update an activity
     * 
     * @param id The id of the activity
     * @param activityResource The activity resource object
     */
    public updateActivityUsingPUTWithHttpInfo(id: number, activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/activities/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateActivityUsingPUT.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (knetik_oauth) required
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
            body: activityResource == null ? '' : JSON.stringify(activityResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}