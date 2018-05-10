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

import { ItemTemplateResource } from '../model/itemTemplateResource';
import { ObjectResource } from '../model/objectResource';
import { PageResourceItemTemplateResource } from '../model/pageResourceItemTemplateResource';
import { PageResourceObjectResource } from '../model/pageResourceObjectResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ObjectsService {

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
     * Create an object
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVENTORY_ADMIN
     * @param templateId The id of the template this object is to be part of
     * @param cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
     * @param objectItem The object item object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createObjectItem(templateId: string, cascade?: boolean, objectItem?: ObjectResource, observe?: 'body', reportProgress?: boolean): Observable<ObjectResource>;
    public createObjectItem(templateId: string, cascade?: boolean, objectItem?: ObjectResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResource>>;
    public createObjectItem(templateId: string, cascade?: boolean, objectItem?: ObjectResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResource>>;
    public createObjectItem(templateId: string, cascade?: boolean, objectItem?: ObjectResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling createObjectItem.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ObjectResource>(`${this.basePath}/objects/${encodeURIComponent(String(templateId))}`,
            objectItem,
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
     * Create an object template
     * Object templates define a type of entitlement and the properties they have. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param template The entitlement template to be created
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createObjectTemplate(template?: ItemTemplateResource, observe?: 'body', reportProgress?: boolean): Observable<ItemTemplateResource>;
    public createObjectTemplate(template?: ItemTemplateResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemTemplateResource>>;
    public createObjectTemplate(template?: ItemTemplateResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemTemplateResource>>;
    public createObjectTemplate(template?: ItemTemplateResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<ItemTemplateResource>(`${this.basePath}/objects/templates`,
            template,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete an object
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVENTORY_ADMIN
     * @param templateId The id of the template this object is part of
     * @param objectId The id of the object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteObjectItem(templateId: string, objectId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteObjectItem(templateId: string, objectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteObjectItem(templateId: string, objectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteObjectItem(templateId: string, objectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling deleteObjectItem.');
        }
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling deleteObjectItem.');
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

        return this.httpClient.delete<any>(`${this.basePath}/objects/${encodeURIComponent(String(templateId))}/${encodeURIComponent(String(objectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete an entitlement template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteObjectTemplate(id: string, cascade?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteObjectTemplate(id: string, cascade?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteObjectTemplate(id: string, cascade?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteObjectTemplate(id: string, cascade?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteObjectTemplate.');
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

        return this.httpClient.delete<any>(`${this.basePath}/objects/templates/${encodeURIComponent(String(id))}`,
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
     * Get a single object
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param templateId The id of the template this object is part of
     * @param objectId The id of the object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getObjectItem(templateId: string, objectId: number, observe?: 'body', reportProgress?: boolean): Observable<ObjectResource>;
    public getObjectItem(templateId: string, objectId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ObjectResource>>;
    public getObjectItem(templateId: string, objectId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ObjectResource>>;
    public getObjectItem(templateId: string, objectId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling getObjectItem.');
        }
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling getObjectItem.');
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

        return this.httpClient.get<ObjectResource>(`${this.basePath}/objects/${encodeURIComponent(String(templateId))}/${encodeURIComponent(String(objectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List and search objects
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param templateId The id of the template to get objects for
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getObjectItems(templateId: string, size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceObjectResource>;
    public getObjectItems(templateId: string, size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceObjectResource>>;
    public getObjectItems(templateId: string, size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceObjectResource>>;
    public getObjectItems(templateId: string, size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling getObjectItems.');
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

        return this.httpClient.get<PageResourceObjectResource>(`${this.basePath}/objects/${encodeURIComponent(String(templateId))}`,
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
     * Get a single entitlement template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or ACHIEVEMENTS_ADMIN
     * @param id The id of the template
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getObjectTemplate(id: string, observe?: 'body', reportProgress?: boolean): Observable<ItemTemplateResource>;
    public getObjectTemplate(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemTemplateResource>>;
    public getObjectTemplate(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemTemplateResource>>;
    public getObjectTemplate(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getObjectTemplate.');
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

        return this.httpClient.get<ItemTemplateResource>(`${this.basePath}/objects/templates/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List and search entitlement templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN or ACHIEVEMENTS_ADMIN
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getObjectTemplates(size?: number, page?: number, order?: string, observe?: 'body', reportProgress?: boolean): Observable<PageResourceItemTemplateResource>;
    public getObjectTemplates(size?: number, page?: number, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageResourceItemTemplateResource>>;
    public getObjectTemplates(size?: number, page?: number, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageResourceItemTemplateResource>>;
    public getObjectTemplates(size?: number, page?: number, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<PageResourceItemTemplateResource>(`${this.basePath}/objects/templates`,
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
     * Update an object
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; INVENTORY_ADMIN
     * @param templateId The id of the template this object is part of
     * @param objectId The id of the object
     * @param cascade Whether to cascade group changes, such as in the limited gettable behavior. A 400 error will return otherwise if the group is already in use with different values.
     * @param objectItem The object item object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateObjectItem(templateId: string, objectId: number, cascade?: boolean, objectItem?: ObjectResource, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateObjectItem(templateId: string, objectId: number, cascade?: boolean, objectItem?: ObjectResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateObjectItem(templateId: string, objectId: number, cascade?: boolean, objectItem?: ObjectResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateObjectItem(templateId: string, objectId: number, cascade?: boolean, objectItem?: ObjectResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (templateId === null || templateId === undefined) {
            throw new Error('Required parameter templateId was null or undefined when calling updateObjectItem.');
        }
        if (objectId === null || objectId === undefined) {
            throw new Error('Required parameter objectId was null or undefined when calling updateObjectItem.');
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
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/objects/${encodeURIComponent(String(templateId))}/${encodeURIComponent(String(objectId))}`,
            objectItem,
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
     * Update an entitlement template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATE_ADMIN
     * @param id The id of the template
     * @param template The updated template
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateObjectTemplate(id: string, template?: ItemTemplateResource, observe?: 'body', reportProgress?: boolean): Observable<ItemTemplateResource>;
    public updateObjectTemplate(id: string, template?: ItemTemplateResource, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ItemTemplateResource>>;
    public updateObjectTemplate(id: string, template?: ItemTemplateResource, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ItemTemplateResource>>;
    public updateObjectTemplate(id: string, template?: ItemTemplateResource, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateObjectTemplate.');
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

        return this.httpClient.put<ItemTemplateResource>(`${this.basePath}/objects/templates/${encodeURIComponent(String(id))}`,
            template,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
