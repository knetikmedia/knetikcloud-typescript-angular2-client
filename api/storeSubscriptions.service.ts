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

import { PageResourceSubscriptionResource } from '../model/pageResourceSubscriptionResource';
import { PageResourceSubscriptionTemplateResource } from '../model/pageResourceSubscriptionTemplateResource';
import { Result } from '../model/result';
import { SubscriptionResource } from '../model/subscriptionResource';
import { SubscriptionTemplateResource } from '../model/subscriptionTemplateResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class StoreSubscriptionsService {

    protected basePath = 'https://jsapi-integration.us-east-1.elasticbeanstalk.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
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
     * Creates a subscription item and associated plans
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SUBSCRIPTIONS_ADMIN
     * @param subscriptionResource The subscription to be created
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSubscription(subscriptionResource?: SubscriptionResource, observe?: 'body', reportProgress?: boolean): Observable<SubscriptionResource>;
    public createSubscription(subscriptionResource?: SubscriptionResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionResource>>;
    public createSubscription(subscriptionResource?: SubscriptionResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionResource>>;
    public createSubscription(subscriptionResource?: SubscriptionResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<SubscriptionResource>(`${this.basePath}/subscriptions`,
            subscriptionResource,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a subscription template
     * Subscription Templates define a type of subscription and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param subscriptionTemplateResource The new subscription template
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSubscriptionTemplate(subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'body', reportProgress?: boolean): Observable<SubscriptionTemplateResource>;
    public createSubscriptionTemplate(subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionTemplateResource>>;
    public createSubscriptionTemplate(subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionTemplateResource>>;
    public createSubscriptionTemplate(subscriptionTemplateResource?: SubscriptionTemplateResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<SubscriptionTemplateResource>(`${this.basePath}/subscriptions/templates`,
            subscriptionTemplateResource,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a subscription plan
     * Must not be locked or a migration target. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SUBSCRIPTIONS_ADMIN
     * @param id The id of the subscription
     * @param planId The id of the plan
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSubscription(id: number, planId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSubscription(id: number, planId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSubscription(id: number, planId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSubscription(id: number, planId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSubscription.');
        }
        if (planId === null || planId === undefined) {
            throw new Error('Required parameter planId was null or undefined when calling deleteSubscription.');
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

        return this.httpClient.delete<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(id))}/plans/${encodeURIComponent(String(planId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a subscription template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param id The id of the template
     * @param cascade force deleting the template if it&#39;s attached to other objects, cascade &#x3D; detach
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSubscriptionTemplate(id: string, cascade?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSubscriptionTemplate(id: string, cascade?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSubscriptionTemplate(id: string, cascade?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSubscriptionTemplate(id: string, cascade?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSubscriptionTemplate.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (cascade !== undefined && cascade !== null) {
            queryParameters = queryParameters.set('cascade', <any>cascade);
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

        return this.httpClient.delete<any>(`${this.basePath}/subscriptions/templates/${encodeURIComponent(String(id))}`,
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
     * Retrieve a single subscription item and associated plans
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param id The id of the subscription
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscription(id: number, observe?: 'body', reportProgress?: boolean): Observable<SubscriptionResource>;
    public getSubscription(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionResource>>;
    public getSubscription(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionResource>>;
    public getSubscription(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSubscription.');
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

        return this.httpClient.get<SubscriptionResource>(`${this.basePath}/subscriptions/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a single subscription template
     * Subscription Templates define a type of subscription and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param id The id of the template
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscriptionTemplate(id: string, observe?: 'body', reportProgress?: boolean): Observable<SubscriptionTemplateResource>;
    public getSubscriptionTemplate(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionTemplateResource>>;
    public getSubscriptionTemplate(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionTemplateResource>>;
    public getSubscriptionTemplate(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getSubscriptionTemplate.');
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

        return this.httpClient.get<SubscriptionTemplateResource>(`${this.basePath}/subscriptions/templates/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List and search subscription templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or SUBSCRIPTIONS_ADMIN
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscriptionTemplates(size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceSubscriptionTemplateResource>;
    public getSubscriptionTemplates(size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceSubscriptionTemplateResource>>;
    public getSubscriptionTemplates(size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceSubscriptionTemplateResource>>;
    public getSubscriptionTemplates(size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageResourceSubscriptionTemplateResource>(`${this.basePath}/subscriptions/templates`,
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
     * List available subscription items and associated plans
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscriptions(size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceSubscriptionResource>;
    public getSubscriptions(size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceSubscriptionResource>>;
    public getSubscriptions(size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceSubscriptionResource>>;
    public getSubscriptions(size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageResourceSubscriptionResource>(`${this.basePath}/subscriptions`,
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
     * Processes subscriptions and charge dues
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; SUBSCRIPTIONS_ADMIN
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public processSubscriptions(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public processSubscriptions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public processSubscriptions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public processSubscriptions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/process`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a subscription item and associated plans
     * Will not remove plans left out. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; SUBSCRIPTIONS_ADMIN
     * @param id The id of the subscription
     * @param subscriptionResource The subscription resource object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSubscription(id: number, subscriptionResource?: SubscriptionResource, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSubscription(id: number, subscriptionResource?: SubscriptionResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSubscription(id: number, subscriptionResource?: SubscriptionResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSubscription(id: number, subscriptionResource?: SubscriptionResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateSubscription.');
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

        return this.httpClient.put<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(id))}`,
            subscriptionResource,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a subscription template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param id The id of the template
     * @param subscriptionTemplateResource The subscription template resource object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSubscriptionTemplate(id: string, subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'body', reportProgress?: boolean): Observable<SubscriptionTemplateResource>;
    public updateSubscriptionTemplate(id: string, subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SubscriptionTemplateResource>>;
    public updateSubscriptionTemplate(id: string, subscriptionTemplateResource?: SubscriptionTemplateResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SubscriptionTemplateResource>>;
    public updateSubscriptionTemplate(id: string, subscriptionTemplateResource?: SubscriptionTemplateResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateSubscriptionTemplate.');
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

        return this.httpClient.put<SubscriptionTemplateResource>(`${this.basePath}/subscriptions/templates/${encodeURIComponent(String(id))}`,
            subscriptionTemplateResource,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
