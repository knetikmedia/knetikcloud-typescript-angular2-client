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
export class ReportingChallengesApi {
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
     * Retrieve a challenge event leaderboard details
     * Lists all leaderboard entries with additional user details
     * @param filterEvent A sepecific challenge event id
     */
    public getChallengeEventLeaderboard(filterEvent?: number, extraHttpRequestParams?: any): Observable<models.PageResourceChallengeEventParticipantResource> {
        return this.getChallengeEventLeaderboardWithHttpInfo(filterEvent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve a challenge event participant details
     * Lists all user submitted scores sorted by value, including those that do not apear in the leaderboard due to value or aggregation
     * @param filterEvent A sepecific challenge event id
     */
    public getChallengeEventParticipants(filterEvent?: number, extraHttpRequestParams?: any): Observable<models.PageResourceChallengeEventParticipantResource> {
        return this.getChallengeEventParticipantsWithHttpInfo(filterEvent, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Retrieve a challenge event leaderboard details
     * Lists all leaderboard entries with additional user details
     * @param filterEvent A sepecific challenge event id
     */
    public getChallengeEventLeaderboardWithHttpInfo(filterEvent?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/events/leaderboard`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterEvent !== undefined) {
            if(filterEvent instanceof Date) {
                queryParameters.set('filter_event', <any>filterEvent.d.toISOString());
            } else {
                queryParameters.set('filter_event', <any>filterEvent);
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
     * Retrieve a challenge event participant details
     * Lists all user submitted scores sorted by value, including those that do not apear in the leaderboard due to value or aggregation
     * @param filterEvent A sepecific challenge event id
     */
    public getChallengeEventParticipantsWithHttpInfo(filterEvent?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/events/participants`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterEvent !== undefined) {
            if(filterEvent instanceof Date) {
                queryParameters.set('filter_event', <any>filterEvent.d.toISOString());
            } else {
                queryParameters.set('filter_event', <any>filterEvent);
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
