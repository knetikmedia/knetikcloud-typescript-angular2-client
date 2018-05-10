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

import { BreTriggerResource } from '../model/breTriggerResource';
import { IntWrapper } from '../model/intWrapper';
import { LevelingResource } from '../model/levelingResource';
import { PageResourceLevelingResource } from '../model/pageResourceLevelingResource';
import { PageResourceUserLevelingResource } from '../model/pageResourceUserLevelingResource';
import { Result } from '../model/result';
import { UserLevelingResource } from '../model/userLevelingResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GamificationLevelingService {

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
     * Create a level schema
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param level The level schema definition
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createLevel(level?: LevelingResource, observe?: 'body', reportProgress?: boolean): Observable<LevelingResource>;
    public createLevel(level?: LevelingResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LevelingResource>>;
    public createLevel(level?: LevelingResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LevelingResource>>;
    public createLevel(level?: LevelingResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<LevelingResource>(`${this.basePath}/leveling`,
            level,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param name The level schema name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteLevel(name: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteLevel(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteLevel(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteLevel(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling deleteLevel.');
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

        return this.httpClient.delete<any>(`${this.basePath}/leveling/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER
     * @param name The level schema name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLevel(name: string, observe?: 'body', reportProgress?: boolean): Observable<LevelingResource>;
    public getLevel(name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LevelingResource>>;
    public getLevel(name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LevelingResource>>;
    public getLevel(name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getLevel.');
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

        return this.httpClient.get<LevelingResource>(`${this.basePath}/leveling/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the list of triggers that can be used to trigger a leveling progress update
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLevelTriggers(observe?: 'body', reportProgress?: boolean): Observable<Array<BreTriggerResource>>;
    public getLevelTriggers(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<BreTriggerResource>>>;
    public getLevelTriggers(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<BreTriggerResource>>>;
    public getLevelTriggers(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<BreTriggerResource>>(`${this.basePath}/leveling/triggers`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List and search levels
     * Get a list of levels schemas with optional filtering. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLevels(filterName?: string, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceLevelingResource>;
    public getLevels(filterName?: string, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceLevelingResource>>;
    public getLevels(filterName?: string, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceLevelingResource>>;
    public getLevels(filterName?: string, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filterName !== undefined && filterName !== null) {
            queryParameters = queryParameters.set('filter_name', <any>filterName);
        }
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

        return this.httpClient.get<PageResourceLevelingResource>(`${this.basePath}/leveling`,
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
     * Get a user&#39;s progress for a given level schema
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER or self
     * @param userId The id of the user or &#39;me&#39;
     * @param name The level schema name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserLevel(userId: string, name: string, observe?: 'body', reportProgress?: boolean): Observable<UserLevelingResource>;
    public getUserLevel(userId: string, name: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserLevelingResource>>;
    public getUserLevel(userId: string, name: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserLevelingResource>>;
    public getUserLevel(userId: string, name: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevel.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getUserLevel.');
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

        return this.httpClient.get<UserLevelingResource>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/leveling/${encodeURIComponent(String(name))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a user&#39;s progress for all level schemas
     * Filtering and sorting is based on the LevelingResource object, not the UserLevelingResource that is returned here. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_USER or self
     * @param userId The id of the user or &#39;me&#39;
     * @param filterName Filter for level schemas whose name contains a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserLevels(userId: string, filterName?: string, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceUserLevelingResource>;
    public getUserLevels(userId: string, filterName?: string, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceUserLevelingResource>>;
    public getUserLevels(userId: string, filterName?: string, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceUserLevelingResource>>;
    public getUserLevels(userId: string, filterName?: string, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserLevels.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filterName !== undefined && filterName !== null) {
            queryParameters = queryParameters.set('filter_name', <any>filterName);
        }
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

        return this.httpClient.get<PageResourceUserLevelingResource>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/leveling`,
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
     * Update or create a leveling progress record for a user
     * If no progress record yet exists for the user, it will be created. Otherwise the provided value will be added to it. May be negative. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The amount of progress to add
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public incrementProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public incrementProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public incrementProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public incrementProgress(userId: number, name: string, progress?: IntWrapper, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling incrementProgress.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling incrementProgress.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/leveling/${encodeURIComponent(String(name))}/progress`,
            progress,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set leveling progress for a user
     * If no progress record yet exists for the user, it will be created. Otherwise it will be updated to the provided value. If progress meets or exceeds the level&#39;s max_value it will be marked as earned and a BRE event will be triggered for the &lt;code&gt;BreAchievementEarnedTrigger&lt;/code&gt;. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param userId The id of the user
     * @param name The level schema name
     * @param progress The new progress amount
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setProgress(userId: number, name: string, progress?: IntWrapper, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setProgress(userId: number, name: string, progress?: IntWrapper, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setProgress.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling setProgress.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/users/${encodeURIComponent(String(userId))}/leveling/${encodeURIComponent(String(name))}/progress`,
            progress,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a level
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LEVELING_ADMIN
     * @param name The level schema name
     * @param newLevel The level schema definition
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateLevel(name: string, newLevel?: LevelingResource, observe?: 'body', reportProgress?: boolean): Observable<LevelingResource>;
    public updateLevel(name: string, newLevel?: LevelingResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LevelingResource>>;
    public updateLevel(name: string, newLevel?: LevelingResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LevelingResource>>;
    public updateLevel(name: string, newLevel?: LevelingResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling updateLevel.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<LevelingResource>(`${this.basePath}/leveling/${encodeURIComponent(String(name))}`,
            newLevel,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
