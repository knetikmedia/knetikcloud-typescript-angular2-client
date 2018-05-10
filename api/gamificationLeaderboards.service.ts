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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { LeaderboardEntryResource } from '../model/leaderboardEntryResource';
import { LeaderboardResource } from '../model/leaderboardResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GamificationLeaderboardsService {

    protected basePath = 'https://jsapi-integration.us-east-1.elasticbeanstalk.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Retrieves leaderboard details and paginated entries
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. Sorting is based on the fields of LeaderboardEntryResource rather than the returned LeaderboardResource. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLeaderboard(contextType: string, contextId: string, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<LeaderboardResource>;
    public getLeaderboard(contextType: string, contextId: string, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LeaderboardResource>>;
    public getLeaderboard(contextType: string, contextId: string, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LeaderboardResource>>;
    public getLeaderboard(contextType: string, contextId: string, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contextType === null || contextType === undefined) {
            throw new Error('Required parameter contextType was null or undefined when calling getLeaderboard.');
        }
        if (contextId === null || contextId === undefined) {
            throw new Error('Required parameter contextId was null or undefined when calling getLeaderboard.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2_client_credentials_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<LeaderboardResource>(`${this.basePath}/leaderboards/${encodeURIComponent(String(contextType))}/${encodeURIComponent(String(contextId))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieves a specific user entry with rank
     * The context type identifies the type of entity (i.e., &#39;activity&#39;) being tracked on the leaderboard. The context ID is the unique ID of the actual entity tracked by the leaderboard. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param contextType The context type for the leaderboard
     * @param contextId The context id for the leaderboard
     * @param id The id of a user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLeaderboardRank(contextType: string, contextId: string, id: string, observe?: 'body', reportProgress?: boolean): Observable<LeaderboardEntryResource>;
    public getLeaderboardRank(contextType: string, contextId: string, id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LeaderboardEntryResource>>;
    public getLeaderboardRank(contextType: string, contextId: string, id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LeaderboardEntryResource>>;
    public getLeaderboardRank(contextType: string, contextId: string, id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (contextType === null || contextType === undefined) {
            throw new Error('Required parameter contextType was null or undefined when calling getLeaderboardRank.');
        }
        if (contextId === null || contextId === undefined) {
            throw new Error('Required parameter contextId was null or undefined when calling getLeaderboardRank.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getLeaderboardRank.');
        }

        let headers = this.defaultHeaders;

        // authentication (oauth2_client_credentials_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<LeaderboardEntryResource>(`${this.basePath}/leaderboards/${encodeURIComponent(String(contextType))}/${encodeURIComponent(String(contextId))}/users/${encodeURIComponent(String(id))}/rank`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a list of available leaderboard strategy names
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLeaderboardStrategies(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getLeaderboardStrategies(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getLeaderboardStrategies(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getLeaderboardStrategies(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (oauth2_client_credentials_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<string>>(`${this.basePath}/leaderboards/strategies`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
