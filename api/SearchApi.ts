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
export class SearchApi {
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
     * Add a new object to an index
     * Mainly intended for internal use.
     * @param type The index type
     * @param id The ID of the object
     * @param object The object to add
     */
    public externalAddUsingPOST(type: string, id: string, object?: any, extraHttpRequestParams?: any): Observable<{}> {
        return this.externalAddUsingPOSTWithHttpInfo(type, id, object, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete all objects in an index
     * Mainly intended for internal use
     * @param type The index type
     */
    public externalDeleteAllUsingDELETE(type: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.externalDeleteAllUsingDELETEWithHttpInfo(type, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete an object
     * Mainly intended for internal use. Requires SEARCH_ADMIN.
     * @param type The index type
     * @param id The ID of the object to delete
     */
    public externalDeleteUsingDELETE(type: string, id: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.externalDeleteUsingDELETEWithHttpInfo(type, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Register reference mappings
     * Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.
     * @param mappings The mappings to add
     */
    public externalRegisterUsingPOST(mappings?: Array<models.SearchReferenceMapping>, extraHttpRequestParams?: any): Observable<{}> {
        return this.externalRegisterUsingPOSTWithHttpInfo(mappings, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Search an index
     * The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.
     * @param type The index type
     * @param query The query to be used for the search
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public searchUsingPOST(type: string, query?: any, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageMapstringobject> {
        return this.searchUsingPOSTWithHttpInfo(type, query, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Add a new object to an index
     * Mainly intended for internal use.
     * @param type The index type
     * @param id The ID of the object
     * @param object The object to add
     */
    public externalAddUsingPOSTWithHttpInfo(type: string, id: string, object?: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/search/index/${type}/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling externalAddUsingPOST.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling externalAddUsingPOST.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
        // authentication (OAuth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: object == null ? '' : JSON.stringify(object), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete all objects in an index
     * Mainly intended for internal use
     * @param type The index type
     */
    public externalDeleteAllUsingDELETEWithHttpInfo(type: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/search/index/${type}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling externalDeleteAllUsingDELETE.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
        // authentication (OAuth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
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
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an object
     * Mainly intended for internal use. Requires SEARCH_ADMIN.
     * @param type The index type
     * @param id The ID of the object to delete
     */
    public externalDeleteUsingDELETEWithHttpInfo(type: string, id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/search/index/${type}/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling externalDeleteUsingDELETE.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling externalDeleteUsingDELETE.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
        // authentication (OAuth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
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
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Register reference mappings
     * Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.
     * @param mappings The mappings to add
     */
    public externalRegisterUsingPOSTWithHttpInfo(mappings?: Array<models.SearchReferenceMapping>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/search/mappings`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
        // authentication (OAuth2) required
        // oauth required
        if (this.configuration.accessToken)
        {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: mappings == null ? '' : JSON.stringify(mappings), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Search an index
     * The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.
     * @param type The index type
     * @param query The query to be used for the search
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public searchUsingPOSTWithHttpInfo(type: string, query?: any, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/search/index/${type}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling searchUsingPOST.');
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
            '*/*'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: query == null ? '' : JSON.stringify(query), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
