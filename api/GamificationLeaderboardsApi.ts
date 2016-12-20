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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class GamificationLeaderboardsApi {
    protected basePath = 'https://localhost:8080/';
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
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * Retrieves leaderboard details and paginated entries
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getLeaderboardUsingGET(contextType: string, contextId: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.LeaderboardResource> {
        return this.getLeaderboardUsingGETWithHttpInfo(contextType, contextId, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a list of available leaderboard strategy names
     * 
     */
    public getStrategiesUsingGET(extraHttpRequestParams?: any): Observable<Array<string>> {
        return this.getStrategiesUsingGETWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieves a specific user entry with rank
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param id The id of a user
     */
    public getUserRankUsingGET(contextType: string, contextId: string, id: string, extraHttpRequestParams?: any): Observable<models.LeaderboardEntryResource> {
        return this.getUserRankUsingGETWithHttpInfo(contextType, contextId, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Retrieves leaderboard details and paginated entries
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getLeaderboardUsingGETWithHttpInfo(contextType: string, contextId: string, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/leaderboards/${context_type}/${context_id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'contextType' is not null or undefined
        if (contextType === null || contextType === undefined) {
            throw new Error('Required parameter contextType was null or undefined when calling getLeaderboardUsingGET.');
        }
        // verify required parameter 'contextId' is not null or undefined
        if (contextId === null || contextId === undefined) {
            throw new Error('Required parameter contextId was null or undefined when calling getLeaderboardUsingGET.');
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
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
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a list of available leaderboard strategy names
     * 
     */
    public getStrategiesUsingGETWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/leaderboards/strategies`;

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
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Retrieves a specific user entry with rank
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard.
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param id The id of a user
     */
    public getUserRankUsingGETWithHttpInfo(contextType: string, contextId: string, id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/leaderboards/${context_type}/${context_id}/users/${id}/rank`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'contextType' is not null or undefined
        if (contextType === null || contextType === undefined) {
            throw new Error('Required parameter contextType was null or undefined when calling getUserRankUsingGET.');
        }
        // verify required parameter 'contextId' is not null or undefined
        if (contextId === null || contextId === undefined) {
            throw new Error('Required parameter contextId was null or undefined when calling getUserRankUsingGET.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUserRankUsingGET.');
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
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
