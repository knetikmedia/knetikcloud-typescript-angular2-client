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
export class PaymentsWalletsApi {
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
     * Returns the user&#39;s wallet for the given currency code
     * 
     * @param userId The ID of the user for whom wallet is being retrieved
     * @param currencyCode Currency code of the user&#39;s wallet
     */
    public getUserWallet(userId: number, currencyCode: string, extraHttpRequestParams?: any): Observable<models.SimpleWallet> {
        return this.getUserWalletWithHttpInfo(userId, currencyCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve a user&#39;s wallet transactions
     * 
     * @param userId The ID of the user for whom wallet transactions are being retrieved
     * @param currencyCode Currency code of the user&#39;s wallet
     * @param filterType Filter for transactions with specified type
     * @param filterMaxDate Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
     * @param filterMinDate Filter for transactions from no later than the specified date as a unix timestamp in seconds
     * @param filterSign Filter for transactions with amount with the given sign.  Allowable values: (&#39;positive&#39;, &#39;negative&#39;)
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getUserWalletTransactions(userId: number, currencyCode: string, filterType?: string, filterMaxDate?: number, filterMinDate?: number, filterSign?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceWalletTransactionResource> {
        return this.getUserWalletTransactionsWithHttpInfo(userId, currencyCode, filterType, filterMaxDate, filterMinDate, filterSign, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List all of a user&#39;s wallets
     * 
     * @param userId The ID of the user for whom wallets are being retrieved
     */
    public getUserWallets(userId: number, extraHttpRequestParams?: any): Observable<Array<models.SimpleWallet>> {
        return this.getUserWalletsWithHttpInfo(userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieves a summation of wallet balances by currency code
     * 
     */
    public getWalletBalances(extraHttpRequestParams?: any): Observable<models.PageResourceWalletTotalResponse> {
        return this.getWalletBalancesWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve wallet transactions across the system
     * 
     * @param filterInvoice Filter for transactions from a specific invoice
     * @param filterType Filter for transactions with specified type
     * @param filterDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param filterSign Filter for transactions with amount with the given sign
     * @param filterUserId Filter for transactions for specific userId
     * @param filterUsername Filter for transactions for specific username that start with the given string
     * @param filterDetails Filter for transactions for specific details that start with the given string
     * @param filterCurrencyCode Filter for transactions for specific currency code
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getWalletTransactions(filterInvoice?: number, filterType?: string, filterDate?: string, filterSign?: string, filterUserId?: number, filterUsername?: string, filterDetails?: string, filterCurrencyCode?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceWalletTransactionResource> {
        return this.getWalletTransactionsWithHttpInfo(filterInvoice, filterType, filterDate, filterSign, filterUserId, filterUsername, filterDetails, filterCurrencyCode, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Retrieve a list of wallets across the system
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getWallets(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceSimpleWallet> {
        return this.getWalletsWithHttpInfo(size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Updates the balance for a user&#39;s wallet
     * 
     * @param userId The ID of the user for whom wallet is being modified
     * @param currencyCode Currency code of the user&#39;s wallet
     * @param request The requested balance modification to be made to the user&#39;s wallet
     */
    public updateWalletBalance(userId: number, currencyCode: string, request?: models.WalletAlterRequest, extraHttpRequestParams?: any): Observable<models.WalletTransactionResource> {
        return this.updateWalletBalanceWithHttpInfo(userId, currencyCode, request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Returns the user&#39;s wallet for the given currency code
     * 
     * @param userId The ID of the user for whom wallet is being retrieved
     * @param currencyCode Currency code of the user&#39;s wallet
     */
    public getUserWalletWithHttpInfo(userId: number, currencyCode: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/wallets/${currency_code}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'currency_code' + '}', String(currencyCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserWallet.');
        }
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling getUserWallet.');
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
     * Retrieve a user&#39;s wallet transactions
     * 
     * @param userId The ID of the user for whom wallet transactions are being retrieved
     * @param currencyCode Currency code of the user&#39;s wallet
     * @param filterType Filter for transactions with specified type
     * @param filterMaxDate Filter for transactions from no earlier than the specified date as a unix timestamp in seconds
     * @param filterMinDate Filter for transactions from no later than the specified date as a unix timestamp in seconds
     * @param filterSign Filter for transactions with amount with the given sign.  Allowable values: (&#39;positive&#39;, &#39;negative&#39;)
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getUserWalletTransactionsWithHttpInfo(userId: number, currencyCode: string, filterType?: string, filterMaxDate?: number, filterMinDate?: number, filterSign?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/wallets/${currency_code}/transactions'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'currency_code' + '}', String(currencyCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserWalletTransactions.');
        }
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling getUserWalletTransactions.');
        }
        if (filterType !== undefined) {
                    queryParameters.set('filter_type', <any>filterType);
        }

        if (filterMaxDate !== undefined) {
                    queryParameters.set('filter_max_date', <any>filterMaxDate);
        }

        if (filterMinDate !== undefined) {
                    queryParameters.set('filter_min_date', <any>filterMinDate);
        }

        if (filterSign !== undefined) {
                    queryParameters.set('filter_sign', <any>filterSign);
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
     * List all of a user&#39;s wallets
     * 
     * @param userId The ID of the user for whom wallets are being retrieved
     */
    public getUserWalletsWithHttpInfo(userId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/wallets'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserWallets.');
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
     * Retrieves a summation of wallet balances by currency code
     * 
     */
    public getWalletBalancesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wallets/totals';

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
     * Retrieve wallet transactions across the system
     * 
     * @param filterInvoice Filter for transactions from a specific invoice
     * @param filterType Filter for transactions with specified type
     * @param filterDate A comma separated string without spaces.  First value is the operator to search on, second value is the log start date, a unix timestamp in seconds. Can be repeated for a range, eg: GT,123,LT,456  Allowed operators: (GT, LT, EQ, GOE, LOE).
     * @param filterSign Filter for transactions with amount with the given sign
     * @param filterUserId Filter for transactions for specific userId
     * @param filterUsername Filter for transactions for specific username that start with the given string
     * @param filterDetails Filter for transactions for specific details that start with the given string
     * @param filterCurrencyCode Filter for transactions for specific currency code
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getWalletTransactionsWithHttpInfo(filterInvoice?: number, filterType?: string, filterDate?: string, filterSign?: string, filterUserId?: number, filterUsername?: string, filterDetails?: string, filterCurrencyCode?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wallets/transactions';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterInvoice !== undefined) {
                    queryParameters.set('filter_invoice', <any>filterInvoice);
        }

        if (filterType !== undefined) {
                    queryParameters.set('filter_type', <any>filterType);
        }

        if (filterDate !== undefined) {
                    queryParameters.set('filter_date', <any>filterDate);
        }

        if (filterSign !== undefined) {
                    queryParameters.set('filter_sign', <any>filterSign);
        }

        if (filterUserId !== undefined) {
                    queryParameters.set('filter_user_id', <any>filterUserId);
        }

        if (filterUsername !== undefined) {
                    queryParameters.set('filter_username', <any>filterUsername);
        }

        if (filterDetails !== undefined) {
                    queryParameters.set('filter_details', <any>filterDetails);
        }

        if (filterCurrencyCode !== undefined) {
                    queryParameters.set('filter_currency_code', <any>filterCurrencyCode);
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
     * Retrieve a list of wallets across the system
     * 
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getWalletsWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/wallets';

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
     * Updates the balance for a user&#39;s wallet
     * 
     * @param userId The ID of the user for whom wallet is being modified
     * @param currencyCode Currency code of the user&#39;s wallet
     * @param request The requested balance modification to be made to the user&#39;s wallet
     */
    public updateWalletBalanceWithHttpInfo(userId: number, currencyCode: string, request?: models.WalletAlterRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/wallets/${currency_code}/balance'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'currency_code' + '}', String(currencyCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateWalletBalance.');
        }
        // verify required parameter 'currencyCode' is not null or undefined
        if (currencyCode === null || currencyCode === undefined) {
            throw new Error('Required parameter currencyCode was null or undefined when calling updateWalletBalance.');
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
            method: RequestMethod.Put,
            headers: headers,
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}