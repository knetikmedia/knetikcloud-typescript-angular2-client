/**
 * Knetik Platform API Documentation Latest
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
export class MediaArtistsApi {
    protected basePath = 'https://devsandbox.knetikcloud.com/';
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
     * Adds a new artist in the system
     * Adds a new artist in the system. Use specific media contributions endpoint to add contributions
     * @param artistResource The new artist
     */
    public addArtistUsingPOST(artistResource?: models.ArtistResource, extraHttpRequestParams?: any): Observable<models.ArtistResource> {
        return this.addArtistUsingPOSTWithHttpInfo(artistResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create an artist template
     * Artist Templates define a type of artist and the properties they have
     * @param artistTemplateResource The artist template resource object
     */
    public createArtistTemplateUsingPOST(artistTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<models.TemplateResource> {
        return this.createArtistTemplateUsingPOSTWithHttpInfo(artistTemplateResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete an artist template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     */
    public deleteArtistTemplateUsingDELETE(id: string, cascade?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteArtistTemplateUsingDELETEWithHttpInfo(id, cascade, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Removes an artist from the system IF no resources are attached to it
     * 
     * @param id The artist id
     */
    public deleteArtistUsingDELETE(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteArtistUsingDELETEWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single artist template
     * 
     * @param id The id of the template
     */
    public getArtistTemplateUsingGET(id: string, extraHttpRequestParams?: any): Observable<models.TemplateResource> {
        return this.getArtistTemplateUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List and search artist templates
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getArtistTemplatesUsingGET(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageTemplateResource> {
        return this.getArtistTemplatesUsingGETWithHttpInfo(size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Loads a specific artist details
     * 
     * @param id The artist id
     * @param showContributions The number of contributions to show fetch
     */
    public getArtistUsingGET(id: number, showContributions?: number, extraHttpRequestParams?: any): Observable<models.ArtistResource> {
        return this.getArtistUsingGETWithHttpInfo(id, showContributions, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Search for artists
     * 
     * @param filterArtistsByName Filter for artists which name *STARTS* with the given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public searchArtistsUsingGET(filterArtistsByName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageArtistResource> {
        return this.searchArtistsUsingGETWithHttpInfo(filterArtistsByName, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an artist template
     * 
     * @param id The id of the template
     * @param artistTemplateResource The artist template resource object
     */
    public updateArtistTemplateUsingPUT(id: string, artistTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateArtistTemplateUsingPUTWithHttpInfo(id, artistTemplateResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Modifies an artist details
     * 
     * @param id The artist id
     * @param artistResource The new artist
     */
    public updateArtistUsingPUT(id: number, artistResource?: models.ArtistResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateArtistUsingPUTWithHttpInfo(id, artistResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Adds a new artist in the system
     * Adds a new artist in the system. Use specific media contributions endpoint to add contributions
     * @param artistResource The new artist
     */
    public addArtistUsingPOSTWithHttpInfo(artistResource?: models.ArtistResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists`;

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
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: artistResource == null ? '' : JSON.stringify(artistResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create an artist template
     * Artist Templates define a type of artist and the properties they have
     * @param artistTemplateResource The artist template resource object
     */
    public createArtistTemplateUsingPOSTWithHttpInfo(artistTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/templates`;

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
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: artistTemplateResource == null ? '' : JSON.stringify(artistTemplateResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an artist template
     * If cascade &#x3D; &#39;detach&#39;, it will force delete the template even if it&#39;s attached to other objects
     * @param id The id of the template
     * @param cascade The value needed to delete used templates
     */
    public deleteArtistTemplateUsingDELETEWithHttpInfo(id: string, cascade?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/templates/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteArtistTemplateUsingDELETE.');
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
            '*/*'
        ];
        
            



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
     * Removes an artist from the system IF no resources are attached to it
     * 
     * @param id The artist id
     */
    public deleteArtistUsingDELETEWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteArtistUsingDELETE.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];
        
            



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
     * Get a single artist template
     * 
     * @param id The id of the template
     */
    public getArtistTemplateUsingGETWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/templates/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getArtistTemplateUsingGET.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
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
     * List and search artist templates
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getArtistTemplatesUsingGETWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/templates`;

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
            '*/*'
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
     * Loads a specific artist details
     * 
     * @param id The artist id
     * @param showContributions The number of contributions to show fetch
     */
    public getArtistUsingGETWithHttpInfo(id: number, showContributions?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getArtistUsingGET.');
        }
        if (showContributions !== undefined) {
            queryParameters.set('show_contributions', <any>showContributions);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
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
     * Search for artists
     * 
     * @param filterArtistsByName Filter for artists which name *STARTS* with the given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public searchArtistsUsingGETWithHttpInfo(filterArtistsByName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterArtistsByName !== undefined) {
            queryParameters.set('filter_artists_by_name', <any>filterArtistsByName);
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
            '*/*'
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
     * Update an artist template
     * 
     * @param id The id of the template
     * @param artistTemplateResource The artist template resource object
     */
    public updateArtistTemplateUsingPUTWithHttpInfo(id: string, artistTemplateResource?: models.TemplateResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/templates/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateArtistTemplateUsingPUT.');
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
            method: RequestMethod.Put,
            headers: headers,
            body: artistTemplateResource == null ? '' : JSON.stringify(artistTemplateResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Modifies an artist details
     * 
     * @param id The artist id
     * @param artistResource The new artist
     */
    public updateArtistUsingPUTWithHttpInfo(id: number, artistResource?: models.ArtistResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/media/artists/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateArtistUsingPUT.');
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
            method: RequestMethod.Put,
            headers: headers,
            body: artistResource == null ? '' : JSON.stringify(artistResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
