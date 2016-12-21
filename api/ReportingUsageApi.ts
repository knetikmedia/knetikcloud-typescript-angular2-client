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
export class ReportingUsageApi {
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
     * Returns aggregated endpoint usage information by the day
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByDayUsingGET(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceUsageInfo> {
        return this.getUsageByDayUsingGETWithHttpInfo(startDate, endDate, combineEndpoints, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns aggregated endpoint usage information by hour
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByHourUsingGET(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceUsageInfo> {
        return this.getUsageByHourUsingGETWithHttpInfo(startDate, endDate, combineEndpoints, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns aggregated endpoint usage information by minute
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMinuteUsingGET(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceUsageInfo> {
        return this.getUsageByMinuteUsingGETWithHttpInfo(startDate, endDate, combineEndpoints, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns aggregated endpoint usage information by month
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMonthUsingGET(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceUsageInfo> {
        return this.getUsageByMonthUsingGETWithHttpInfo(startDate, endDate, combineEndpoints, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns aggregated endpoint usage information by year
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByYearUsingGET(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceUsageInfo> {
        return this.getUsageByYearUsingGETWithHttpInfo(startDate, endDate, combineEndpoints, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Returns aggregated endpoint usage information by the day
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByDayUsingGETWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/usage/day`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByDayUsingGET.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByDayUsingGET.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }
        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
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
        
        // authentication (knetik_oauth) required
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

    /**
     * Returns aggregated endpoint usage information by hour
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByHourUsingGETWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/usage/hour`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByHourUsingGET.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByHourUsingGET.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }
        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
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
        
        // authentication (knetik_oauth) required
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

    /**
     * Returns aggregated endpoint usage information by minute
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMinuteUsingGETWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/usage/minute`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMinuteUsingGET.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMinuteUsingGET.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }
        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
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
        
        // authentication (knetik_oauth) required
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

    /**
     * Returns aggregated endpoint usage information by month
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByMonthUsingGETWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/usage/month`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByMonthUsingGET.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByMonthUsingGET.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }
        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
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
        
        // authentication (knetik_oauth) required
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

    /**
     * Returns aggregated endpoint usage information by year
     * 
     * @param startDate The beginning of the range being requested, unix timestamp in seconds
     * @param endDate The ending of the range being requested, unix timestamp in seconds
     * @param combineEndpoints Whether to combine counts from different endpoint. Removes the url and method from the result object
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public getUsageByYearUsingGETWithHttpInfo(startDate: number, endDate: number, combineEndpoints?: boolean, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/usage/year`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'startDate' is not null or undefined
        if (startDate === null || startDate === undefined) {
            throw new Error('Required parameter startDate was null or undefined when calling getUsageByYearUsingGET.');
        }
        // verify required parameter 'endDate' is not null or undefined
        if (endDate === null || endDate === undefined) {
            throw new Error('Required parameter endDate was null or undefined when calling getUsageByYearUsingGET.');
        }
        if (startDate !== undefined) {
            queryParameters.set('start_date', <any>startDate);
        }
        if (endDate !== undefined) {
            queryParameters.set('end_date', <any>endDate);
        }
        if (combineEndpoints !== undefined) {
            queryParameters.set('combine_endpoints', <any>combineEndpoints);
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
        
        // authentication (knetik_oauth) required
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
