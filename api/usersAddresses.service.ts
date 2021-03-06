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
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { PageResourceSavedAddressResource } from '../model/pageResourceSavedAddressResource';
import { Result } from '../model/result';
import { SavedAddressResource } from '../model/savedAddressResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UsersAddressesService {

    protected basePath = 'https://devsandbox.knetikcloud.com';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
			this.basePath = basePath || configuration.basePath || this.basePath;
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
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * <b>Permissions Needed:</b> USERS_ADMIN or owner
     * @summary Create a new address
     * @param userId The id of the user
     * @param savedAddressResource The new address
     */
    public createAddress(userId: string, savedAddressResource?: SavedAddressResource, extraHttpRequestParams?: any): Observable<SavedAddressResource> {
        return this.createAddressWithHttpInfo(userId, savedAddressResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> USERS_ADMIN or owner
     * @summary Delete an address
     * @param userId The id of the user
     * @param id The id of the address
     */
    public deleteAddress(userId: string, id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteAddressWithHttpInfo(userId, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> USERS_ADMIN or owner
     * @summary Get a single address
     * @param userId The id of the user
     * @param id The id of the address
     */
    public getAddress(userId: string, id: number, extraHttpRequestParams?: any): Observable<SavedAddressResource> {
        return this.getAddressWithHttpInfo(userId, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> USERS_ADMIN or owner
     * @summary List and search addresses
     * @param userId The id of the user
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getAddresses(userId: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceSavedAddressResource> {
        return this.getAddressesWithHttpInfo(userId, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> USERS_ADMIN or owner
     * @summary Update an address
     * @param userId The id of the user
     * @param id The id of the address
     * @param savedAddressResource The saved address resource object
     */
    public updateAddress(userId: string, id: number, savedAddressResource?: SavedAddressResource, extraHttpRequestParams?: any): Observable<SavedAddressResource> {
        return this.updateAddressWithHttpInfo(userId, id, savedAddressResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create a new address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USERS_ADMIN or owner
     * @param userId The id of the user
     * @param savedAddressResource The new address
     */
    public createAddressWithHttpInfo(userId: string, savedAddressResource?: SavedAddressResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/addresses'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createAddress.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
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
            body: savedAddressResource == null ? '' : JSON.stringify(savedAddressResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USERS_ADMIN or owner
     * @param userId The id of the user
     * @param id The id of the address
     */
    public deleteAddressWithHttpInfo(userId: string, id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/addresses/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteAddress.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteAddress.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
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
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get a single address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USERS_ADMIN or owner
     * @param userId The id of the user
     * @param id The id of the address
     */
    public getAddressWithHttpInfo(userId: string, id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/addresses/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAddress.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAddress.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
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
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * List and search addresses
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USERS_ADMIN or owner
     * @param userId The id of the user
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getAddressesWithHttpInfo(userId: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/addresses'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getAddresses.');
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


        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
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
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Update an address
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; USERS_ADMIN or owner
     * @param userId The id of the user
     * @param id The id of the address
     * @param savedAddressResource The saved address resource object
     */
    public updateAddressWithHttpInfo(userId: string, id: number, savedAddressResource?: SavedAddressResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/addresses/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateAddress.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateAddress.');
        }

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2_client_credentials_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // authentication (oauth2_password_grant) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

            
        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: savedAddressResource == null ? '' : JSON.stringify(savedAddressResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
