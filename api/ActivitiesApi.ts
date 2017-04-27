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
export class ActivitiesApi {
    protected basePath = 'https://sandbox.knetikcloud.com';
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
     * Create an activity
     * 
     * @param activityResource The activity resource object
     */
    public createActivity(activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<models.ActivityResource> {
        return this.createActivityWithHttpInfo(activityResource, extraHttpRequestParams)
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
    public createActivityOccurrence(test?: boolean, activityOccurrenceResource?: models.ActivityOccurrenceResource, extraHttpRequestParams?: any): Observable<models.ActivityOccurrenceResource> {
        return this.createActivityOccurrenceWithHttpInfo(test, activityOccurrenceResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a activity template
     * Activity Templates define a type of activity and the properties they have
     * @param activityTemplateResource The activity template resource object
     */
    public createActivityTemplate(activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<models.TemplateResource> {
        return this.createActivityTemplateWithHttpInfo(activityTemplateResource, extraHttpRequestParams)
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
    public deleteActivity(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteActivityWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete a activity template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     */
    public deleteActivityTemplate(id: string, cascade?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteActivityTemplateWithHttpInfo(id, cascade, extraHttpRequestParams)
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
     * @param filterName Filter for activities that have a name starting with specified string
     * @param filterId Filter for activities with an id in the given comma separated list of ids
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivities(filterTemplate?: boolean, filterName?: string, filterId?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceBareActivityResource> {
        return this.getActivitiesWithHttpInfo(filterTemplate, filterName, filterId, size, page, order, extraHttpRequestParams)
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
    public getActivity(id: number, extraHttpRequestParams?: any): Observable<models.ActivityResource> {
        return this.getActivityWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single activity template
     * 
     * @param id The id of the template
     */
    public getActivityTemplate(id: string, extraHttpRequestParams?: any): Observable<models.TemplateResource> {
        return this.getActivityTemplateWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List and search activity templates
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivityTemplates(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceTemplateResource> {
        return this.getActivityTemplatesWithHttpInfo(size, page, order, extraHttpRequestParams)
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
    public setActivityOccurrenceResults(activityOccurrenceId: number, activityOccurrenceResults?: models.ActivityOccurrenceResults, extraHttpRequestParams?: any): Observable<models.ActivityOccurrenceResults> {
        return this.setActivityOccurrenceResultsWithHttpInfo(activityOccurrenceId, activityOccurrenceResults, extraHttpRequestParams)
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
    public updateActivity(id: number, activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<models.ActivityResource> {
        return this.updateActivityWithHttpInfo(id, activityResource, extraHttpRequestParams)
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
    public updateActivityOccurrence(activityOccurrenceId: number, activityCccurrenceStatus?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateActivityOccurrenceWithHttpInfo(activityOccurrenceId, activityCccurrenceStatus, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an activity template
     * 
     * @param id The id of the template
     * @param activityTemplateResource The activity template resource object
     */
    public updateActivityTemplate(id: string, activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<models.TemplateResource> {
        return this.updateActivityTemplateWithHttpInfo(id, activityTemplateResource, extraHttpRequestParams)
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
    public createActivityWithHttpInfo(activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities';

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
     * Create a new activity occurrence
     * Has to enforce extra rules if not used as an admin
     * @param test if true, indicates that the occurrence should NOT be created. This can be used to test for eligibility and valid settings
     * @param activityOccurrenceResource The activity occurrence object
     */
    public createActivityOccurrenceWithHttpInfo(test?: boolean, activityOccurrenceResource?: models.ActivityOccurrenceResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activity-occurrences';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (test !== undefined) {
            queryParameters.set('test', <any>test);
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
     * Create a activity template
     * Activity Templates define a type of activity and the properties they have
     * @param activityTemplateResource The activity template resource object
     */
    public createActivityTemplateWithHttpInfo(activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/templates';

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
            body: activityTemplateResource == null ? '' : JSON.stringify(activityTemplateResource), // https://github.com/angular/angular/issues/10612
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
    public deleteActivityWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActivity.');
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
     * Delete a activity template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     */
    public deleteActivityTemplateWithHttpInfo(id: string, cascade?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/templates/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteActivityTemplate.');
        }
        if (cascade !== undefined) {
            queryParameters.set('cascade', <any>cascade);
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
     * List activity definitions
     * 
     * @param filterTemplate Filter for activities that are templates, or specifically not if false
     * @param filterName Filter for activities that have a name starting with specified string
     * @param filterId Filter for activities with an id in the given comma separated list of ids
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivitiesWithHttpInfo(filterTemplate?: boolean, filterName?: string, filterId?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterTemplate !== undefined) {
            queryParameters.set('filter_template', <any>filterTemplate);
        }

        if (filterName !== undefined) {
            queryParameters.set('filter_name', <any>filterName);
        }

        if (filterId !== undefined) {
            queryParameters.set('filter_id', <any>filterId);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
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
    public getActivityWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivity.');
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
     * Get a single activity template
     * 
     * @param id The id of the template
     */
    public getActivityTemplateWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/templates/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getActivityTemplate.');
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
     * List and search activity templates
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getActivityTemplatesWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/templates';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }

        if (order !== undefined) {
            queryParameters.set('order', <any>order);
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
     * Sets the status of an activity occurrence to FINISHED and logs metrics
     * 
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityOccurrenceResults The activity occurrence object
     */
    public setActivityOccurrenceResultsWithHttpInfo(activityOccurrenceId: number, activityOccurrenceResults?: models.ActivityOccurrenceResults, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activity-occurrences/${activity_occurrence_id}/results'
                    .replace('${' + 'activity_occurrence_id' + '}', String(activityOccurrenceId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling setActivityOccurrenceResults.');
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
    public updateActivityWithHttpInfo(id: number, activityResource?: models.ActivityResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateActivity.');
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
     * Updated the status of an activity occurrence
     * If setting to &#39;FINISHED&#39; you must POST to /results instead to record the metrics and get synchronous reward results
     * @param activityOccurrenceId The id of the activity occurrence
     * @param activityCccurrenceStatus The activity occurrence status object
     */
    public updateActivityOccurrenceWithHttpInfo(activityOccurrenceId: number, activityCccurrenceStatus?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activity-occurrences/${activity_occurrence_id}/status'
                    .replace('${' + 'activity_occurrence_id' + '}', String(activityOccurrenceId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'activityOccurrenceId' is not null or undefined
        if (activityOccurrenceId === null || activityOccurrenceId === undefined) {
            throw new Error('Required parameter activityOccurrenceId was null or undefined when calling updateActivityOccurrence.');
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
     * Update an activity template
     * 
     * @param id The id of the template
     * @param activityTemplateResource The activity template resource object
     */
    public updateActivityTemplateWithHttpInfo(id: string, activityTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/activities/templates/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateActivityTemplate.');
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
            body: activityTemplateResource == null ? '' : JSON.stringify(activityTemplateResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
