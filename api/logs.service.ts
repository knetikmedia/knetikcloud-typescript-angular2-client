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

import { BreEventLog } from '../model/breEventLog';
import { ForwardLog } from '../model/forwardLog';
import { PageResourceBreEventLog } from '../model/pageResourceBreEventLog';
import { PageResourceForwardLog } from '../model/pageResourceForwardLog';
import { PageResourceUserActionLog } from '../model/pageResourceUserActionLog';
import { Result } from '../model/result';
import { UserActionLog } from '../model/userActionLog';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class LogsService {

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
     * Add a user log entry
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; owner
     * @param logEntry The user log entry to be added
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUserLog(logEntry?: UserActionLog, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addUserLog(logEntry?: UserActionLog, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addUserLog(logEntry?: UserActionLog, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addUserLog(logEntry?: UserActionLog, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/audit/logs`,
            logEntry,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get an existing BRE event log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param id The BRE event log entry id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBREEventLog(id: string, observe?: 'body', reportProgress?: boolean): Observable<BreEventLog>;
    public getBREEventLog(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<BreEventLog>>;
    public getBREEventLog(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<BreEventLog>>;
    public getBREEventLog(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBREEventLog.');
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

        return this.httpClient.get<BreEventLog>(`${this.basePath}/bre/logs/event-log/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of BRE event log entries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the event log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param filterEventName Filter event logs by event name
     * @param filterEventId Filter event logs by request id
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param filterRuleId Filter event logs by request id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBREEventLogs(filterStartDate?: string, filterEventName?: string, filterEventId?: string, size?: number, page?: number, order?: string, filterRuleId?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceBreEventLog>;
    public getBREEventLogs(filterStartDate?: string, filterEventName?: string, filterEventId?: string, size?: number, page?: number, order?: string, filterRuleId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceBreEventLog>>;
    public getBREEventLogs(filterStartDate?: string, filterEventName?: string, filterEventId?: string, size?: number, page?: number, order?: string, filterRuleId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceBreEventLog>>;
    public getBREEventLogs(filterStartDate?: string, filterEventName?: string, filterEventId?: string, size?: number, page?: number, order?: string, filterRuleId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filterStartDate !== undefined && filterStartDate !== null) {
            queryParameters = queryParameters.set('filter_start_date', <any>filterStartDate);
        }
        if (filterEventName !== undefined && filterEventName !== null) {
            queryParameters = queryParameters.set('filter_event_name', <any>filterEventName);
        }
        if (filterEventId !== undefined && filterEventId !== null) {
            queryParameters = queryParameters.set('filter_event_id', <any>filterEventId);
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
        if (filterRuleId !== undefined && filterRuleId !== null) {
            queryParameters = queryParameters.set('filter_rule_id', <any>filterRuleId);
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

        return this.httpClient.get<PageResourceBreEventLog>(`${this.basePath}/bre/logs/event-log`,
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
     * Get an existing forward log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param id The forward log entry id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBREForwardLog(id: string, observe?: 'body', reportProgress?: boolean): Observable<ForwardLog>;
    public getBREForwardLog(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ForwardLog>>;
    public getBREForwardLog(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ForwardLog>>;
    public getBREForwardLog(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getBREForwardLog.');
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

        return this.httpClient.get<ForwardLog>(`${this.basePath}/bre/logs/forward-log/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a list of forward log entries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; BRE_RULE_ENGINE_EVENTS_ADMIN
     * @param filterStartDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param filterEndDate A comma separated string without spaces.  First value is the operator to search on, second value is the log end date, a unix timestamp in seconds.  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param filterStatusCode Filter forward logs by http status code
     * @param filterUrl Filter forward logs by URL starting with...
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBREForwardLogs(filterStartDate?: string, filterEndDate?: string, filterStatusCode?: number, filterUrl?: number, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceForwardLog>;
    public getBREForwardLogs(filterStartDate?: string, filterEndDate?: string, filterStatusCode?: number, filterUrl?: number, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceForwardLog>>;
    public getBREForwardLogs(filterStartDate?: string, filterEndDate?: string, filterStatusCode?: number, filterUrl?: number, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceForwardLog>>;
    public getBREForwardLogs(filterStartDate?: string, filterEndDate?: string, filterStatusCode?: number, filterUrl?: number, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filterStartDate !== undefined && filterStartDate !== null) {
            queryParameters = queryParameters.set('filter_start_date', <any>filterStartDate);
        }
        if (filterEndDate !== undefined && filterEndDate !== null) {
            queryParameters = queryParameters.set('filter_end_date', <any>filterEndDate);
        }
        if (filterStatusCode !== undefined && filterStatusCode !== null) {
            queryParameters = queryParameters.set('filter_status_code', <any>filterStatusCode);
        }
        if (filterUrl !== undefined && filterUrl !== null) {
            queryParameters = queryParameters.set('filter_url', <any>filterUrl);
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

        return this.httpClient.get<PageResourceForwardLog>(`${this.basePath}/bre/logs/forward-log`,
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
     * Returns a user log entry by id
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param id The user log entry id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserLog(id: string, observe?: 'body', reportProgress?: boolean): Observable<UserActionLog>;
    public getUserLog(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UserActionLog>>;
    public getUserLog(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UserActionLog>>;
    public getUserLog(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUserLog.');
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

        return this.httpClient.get<UserActionLog>(`${this.basePath}/audit/logs/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns a page of user logs entries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; LOGS_ADMIN or owner
     * @param filterUser Filter for actions taken by a specific user by id
     * @param filterActionName Filter for actions of a specific name
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserLogs(filterUser?: number, filterActionName?: string, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceUserActionLog>;
    public getUserLogs(filterUser?: number, filterActionName?: string, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceUserActionLog>>;
    public getUserLogs(filterUser?: number, filterActionName?: string, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceUserActionLog>>;
    public getUserLogs(filterUser?: number, filterActionName?: string, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (filterUser !== undefined && filterUser !== null) {
            queryParameters = queryParameters.set('filter_user', <any>filterUser);
        }
        if (filterActionName !== undefined && filterActionName !== null) {
            queryParameters = queryParameters.set('filter_action_name', <any>filterActionName);
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

        return this.httpClient.get<PageResourceUserActionLog>(`${this.basePath}/audit/logs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
