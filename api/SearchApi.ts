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
export class SearchApi {
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
     * Add a new object to an index
     * Mainly intended for internal use.
     * @param type The index type
     * @param id The ID of the object
     * @param object The object to add
     */
    public addSearchIndex(type: string, id: string, object?: any, extraHttpRequestParams?: any): Observable<{}> {
        return this.addSearchIndexWithHttpInfo(type, id, object, extraHttpRequestParams)
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
    public addSearchMappings(mappings?: Array<models.SearchReferenceMapping>, extraHttpRequestParams?: any): Observable<{}> {
        return this.addSearchMappingsWithHttpInfo(mappings, extraHttpRequestParams)
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
    public deleteSearchIndex(type: string, id: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteSearchIndexWithHttpInfo(type, id, extraHttpRequestParams)
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
    public deleteSearchIndexes(type: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteSearchIndexesWithHttpInfo(type, extraHttpRequestParams)
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
    public searchIndex(type: string, query?: any, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceMapstringobject> {
        return this.searchIndexWithHttpInfo(type, query, size, page, extraHttpRequestParams)
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
    public addSearchIndexWithHttpInfo(type: string, id: string, object?: any, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/search/index/${type}/${id}'
                    .replace('${' + 'type' + '}', String(type))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling addSearchIndex.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addSearchIndex.');
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
            body: object == null ? '' : JSON.stringify(object), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Register reference mappings
     * Add a new type mapping to connect data from one index to another, or discover an exsting one. Mainly intended for internal use.
     * @param mappings The mappings to add
     */
    public addSearchMappingsWithHttpInfo(mappings?: Array<models.SearchReferenceMapping>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/search/mappings';

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
            body: mappings == null ? '' : JSON.stringify(mappings), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an object
     * Mainly intended for internal use. Requires SEARCH_ADMIN.
     * @param type The index type
     * @param id The ID of the object to delete
     */
    public deleteSearchIndexWithHttpInfo(type: string, id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/search/index/${type}/${id}'
                    .replace('${' + 'type' + '}', String(type))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling deleteSearchIndex.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteSearchIndex.');
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
     * Delete all objects in an index
     * Mainly intended for internal use
     * @param type The index type
     */
    public deleteSearchIndexesWithHttpInfo(type: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/search/index/${type}'
                    .replace('${' + 'type' + '}', String(type));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling deleteSearchIndexes.');
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
     * Search an index
     * The body is an ElasticSearch query in JSON format. Please see their &lt;a href&#x3D;&#39;https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html&#39;&gt;documentation&lt;/a&gt; for details on the format and search options. The searchable object&#39;s format depends on on the type. See individual search endpoints on other resources for details on their format.
     * @param type The index type
     * @param query The query to be used for the search
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public searchIndexWithHttpInfo(type: string, query?: any, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/search/index/${type}'
                    .replace('${' + 'type' + '}', String(type));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling searchIndex.');
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: query == null ? '' : JSON.stringify(query), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
