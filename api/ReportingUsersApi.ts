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
export class ReportingUsersApi {
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
     * Get user registration info
     * Get user registration counts grouped by time range
     * @param granularity The time duration to aggregate by
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueItemSalesUsingGET1(granularity?: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<models.PageResourceAggregateCountResource> {
        return this.executiveRevenueItemSalesUsingGET1WithHttpInfo(granularity, startDate, endDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get user registration info
     * Get user registration counts grouped by time range
     * @param granularity The time duration to aggregate by
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueItemSalesUsingGET1WithHttpInfo(granularity?: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/users/registrations`;

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
        if (this.configuration.accessToken)
        {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }
            



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

}
