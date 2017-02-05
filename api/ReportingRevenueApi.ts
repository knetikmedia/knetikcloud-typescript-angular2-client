/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://demo.sandbox.knetikcloud.com
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
export class ReportingRevenueApi {
    protected basePath = 'https://integration.knetikcloud.com/';
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
     * Get revenue info by country
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public executiveRevenueCountrySalesUsingGET(currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceRevenueCountryReportResource> {
        return this.executiveRevenueCountrySalesUsingGETWithHttpInfo(currencyCode, startDate, endDate, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get item revenue info
     * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueItemSalesUsingGET(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<models.RevenueReportResource> {
        return this.executiveRevenueItemSalesUsingGETWithHttpInfo(currencyCode, startDate, endDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get revenue info by item
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public executiveRevenueProductSalesUsingGET(currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<models.PageResourceRevenueProductReportResource> {
        return this.executiveRevenueProductSalesUsingGETWithHttpInfo(currencyCode, startDate, endDate, size, page, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get refund revenue info
     * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
     * @param currencyCode The code for a currency to get refund data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueRefundsUsingGET(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<models.RevenueReportResource> {
        return this.executiveRevenueRefundsUsingGETWithHttpInfo(currencyCode, startDate, endDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get subscription revenue info
     * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueSubscriptionSalesUsingGET(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<models.RevenueReportResource> {
        return this.executiveRevenueSubscriptionSalesUsingGETWithHttpInfo(currencyCode, startDate, endDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get revenue info by country
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by country. Sorted for largest revenue at the top
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public executiveRevenueCountrySalesUsingGETWithHttpInfo(currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/revenue/countries/${currency_code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueCountrySalesUsingGET.');
        }
        if (startDate !== undefined) {
            if(startDate instanceof Date) {
                queryParameters.set('start_date', <any>startDate.d.toISOString());
            } else {
                queryParameters.set('start_date', <any>startDate);
            }
        }

        if (endDate !== undefined) {
            if(endDate instanceof Date) {
                queryParameters.set('end_date', <any>endDate.d.toISOString());
            } else {
                queryParameters.set('end_date', <any>endDate);
            }
        }

        if (size !== undefined) {
            if(size instanceof Date) {
                queryParameters.set('size', <any>size.d.toISOString());
            } else {
                queryParameters.set('size', <any>size);
            }
        }

        if (page !== undefined) {
            if(page instanceof Date) {
                queryParameters.set('page', <any>page.d.toISOString());
            } else {
                queryParameters.set('page', <any>page);
            }
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
        if (this.configuration.accessToken) {
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
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get item revenue info
     * Get basic info about revenue from sales of items and bundles (not subscriptions, shipping, etc), summed up within a time range
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueItemSalesUsingGETWithHttpInfo(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/revenue/item-sales/${currency_code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueItemSalesUsingGET.');
        }
        if (startDate !== undefined) {
            if(startDate instanceof Date) {
                queryParameters.set('start_date', <any>startDate.d.toISOString());
            } else {
                queryParameters.set('start_date', <any>startDate);
            }
        }

        if (endDate !== undefined) {
            if(endDate instanceof Date) {
                queryParameters.set('end_date', <any>endDate.d.toISOString());
            } else {
                queryParameters.set('end_date', <any>endDate);
            }
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
        if (this.configuration.accessToken) {
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
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get revenue info by item
     * Get basic info about revenue from sales of all types, summed up within a time range and split out by specific item. Sorted for largest revenue at the top
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     */
    public executiveRevenueProductSalesUsingGETWithHttpInfo(currencyCode: string, startDate?: number, endDate?: number, size?: number, page?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/revenue/products/${currency_code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueProductSalesUsingGET.');
        }
        if (startDate !== undefined) {
            if(startDate instanceof Date) {
                queryParameters.set('start_date', <any>startDate.d.toISOString());
            } else {
                queryParameters.set('start_date', <any>startDate);
            }
        }

        if (endDate !== undefined) {
            if(endDate instanceof Date) {
                queryParameters.set('end_date', <any>endDate.d.toISOString());
            } else {
                queryParameters.set('end_date', <any>endDate);
            }
        }

        if (size !== undefined) {
            if(size instanceof Date) {
                queryParameters.set('size', <any>size.d.toISOString());
            } else {
                queryParameters.set('size', <any>size);
            }
        }

        if (page !== undefined) {
            if(page instanceof Date) {
                queryParameters.set('page', <any>page.d.toISOString());
            } else {
                queryParameters.set('page', <any>page);
            }
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
        if (this.configuration.accessToken) {
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
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get refund revenue info
     * Get basic info about revenue loss from refunds (for all item types), summed up within a time range.
     * @param currencyCode The code for a currency to get refund data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueRefundsUsingGETWithHttpInfo(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/revenue/refunds/${currency_code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueRefundsUsingGET.');
        }
        if (startDate !== undefined) {
            if(startDate instanceof Date) {
                queryParameters.set('start_date', <any>startDate.d.toISOString());
            } else {
                queryParameters.set('start_date', <any>startDate);
            }
        }

        if (endDate !== undefined) {
            if(endDate instanceof Date) {
                queryParameters.set('end_date', <any>endDate.d.toISOString());
            } else {
                queryParameters.set('end_date', <any>endDate);
            }
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
        if (this.configuration.accessToken) {
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
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get subscription revenue info
     * Get basic info about revenue from sales of new subscriptions as well as recurring payemnts, summed up within a time range
     * @param currencyCode The code for a currency to get sales data for
     * @param startDate The start of the time range to aggregate, unix timestamp in seconds. Default is beginning of time
     * @param endDate The end of the time range to aggregate, unix timestamp in seconds. Default is end of time
     */
    public executiveRevenueSubscriptionSalesUsingGETWithHttpInfo(currencyCode: string, startDate?: number, endDate?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/reporting/revenue/subscription-sales/${currency_code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling executiveRevenueSubscriptionSalesUsingGET.');
        }
        if (startDate !== undefined) {
            if(startDate instanceof Date) {
                queryParameters.set('start_date', <any>startDate.d.toISOString());
            } else {
                queryParameters.set('start_date', <any>startDate);
            }
        }

        if (endDate !== undefined) {
            if(endDate instanceof Date) {
                queryParameters.set('end_date', <any>endDate.d.toISOString());
            } else {
                queryParameters.set('end_date', <any>endDate);
            }
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
        if (this.configuration.accessToken) {
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
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
