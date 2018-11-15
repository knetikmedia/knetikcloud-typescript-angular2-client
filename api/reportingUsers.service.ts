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

import { PageResourceAggregateCountResource } from '../model/pageResourceAggregateCountResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportingUsersService {

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
     * Get user registration counts grouped by time range. <br><br><b>Permissions Needed:</b> REPORTING_USER_ADMIN
     * @summary Get user registration info
     * @param granularity The time duration to aggregate by
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUserRegistrations(granularity?: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<PageResourceAggregateCountResource> {
        return this.getUserRegistrationsWithHttpInfo(granularity, startDate, endDate, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Get user registration info
     * Get user registration counts grouped by time range. &lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; REPORTING_USER_ADMIN
     * @param granularity The time duration to aggregate by
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUserRegistrationsWithHttpInfo(granularity?: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporting/users/registrations';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (granularity !== undefined) {
            queryParameters.set('granularity', <any>granularity);
        }

        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }

        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }

        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }

        if (page !== undefined) {
            queryParameters.set('page', <any>page);
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

}
