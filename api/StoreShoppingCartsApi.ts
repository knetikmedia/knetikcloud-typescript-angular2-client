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
export class StoreShoppingCartsApi {
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
     * Adds a coupon to the cart
     * 
     * @param id The id of the cart
     * @param skuRequest The request of the sku
     */
    public addDiscountUsingPOST(id: string, skuRequest?: models.SkuRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.addDiscountUsingPOSTWithHttpInfo(id, skuRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Add an item to the cart
     * Currently, carts cannot contain virtual and real currency items at the same time. Furthermore, the API only support a single virtual item at the moment
     * @param id The id of the cart
     * @param cartItemRequest The cart item request object
     */
    public addItemUsingPOST(id: string, cartItemRequest?: models.CartItemRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.addItemUsingPOSTWithHttpInfo(id, cartItemRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Sets the owner of a cart if none is set already
     * 
     * @param id The id of the cart
     * @param userId The id of the user
     */
    public assignCartUsingPUT(id: string, userId?: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.assignCartUsingPUTWithHttpInfo(id, userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns whether a cart requires shipping
     * 
     * @param id The id of the cart
     */
    public checkShippableUsingGET(id: string, extraHttpRequestParams?: any): Observable<models.CartShippableResponse> {
        return this.checkShippableUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Creates a new cart from scratch
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout
     * @param owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     */
    public createCartUsingPOST(owner?: number, currencyCode?: string, extraHttpRequestParams?: any): Observable<string> {
        return this.createCartUsingPOSTWithHttpInfo(owner, currencyCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns the cart with the given GUID
     * 
     * @param id The id of the cart
     */
    public getCartUsingGET(id: string, extraHttpRequestParams?: any): Observable<models.Cart> {
        return this.getCartUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable.
     * @param id The id of the cart
     */
    public getCountriesUsingGET(id: string, extraHttpRequestParams?: any): Observable<models.SampleCountriesResponse> {
        return this.getCountriesUsingGETWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Modifies or sets the order shipping address
     * 
     * @param id The id of the cart
     * @param cartShippingAddressRequest The cart shipping address request object
     */
    public modifyShippingAddressUsingPUT(id: string, cartShippingAddressRequest?: models.CartShippingAddressRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.modifyShippingAddressUsingPUTWithHttpInfo(id, cartShippingAddressRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Removes a coupon from the cart
     * 
     * @param id The id of the cart
     * @param code The SKU code of the coupon to remove
     */
    public removeDiscountUsingDELETE(id: string, code: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.removeDiscountUsingDELETEWithHttpInfo(id, code, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a list of carts
     * 
     * @param filterOwnerId Filter by the id of the owner
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public searchCartsUsingGET(filterOwnerId?: number, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceCartSummary> {
        return this.searchCartsUsingGETWithHttpInfo(filterOwnerId, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Sets the currency to use for the cart
     * May be disallowed by site settings.
     * @param id The id of the cart
     * @param currencyCode The code of the currency
     */
    public setCartCurrencyUsingPUT(id: string, currencyCode?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.setCartCurrencyUsingPUTWithHttpInfo(id, currencyCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Changes the quantity of an item already in the cart
     * A quantity of zero will remove the item from the cart altogether.
     * @param id The id of the cart
     * @param cartItemRequest The cart item request object
     */
    public updateItemUsingPUT(id: string, cartItemRequest?: models.CartItemRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateItemUsingPUTWithHttpInfo(id, cartItemRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Adds a coupon to the cart
     * 
     * @param id The id of the cart
     * @param skuRequest The request of the sku
     */
    public addDiscountUsingPOSTWithHttpInfo(id: string, skuRequest?: models.SkuRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/discounts`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addDiscountUsingPOST.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: skuRequest == null ? '' : JSON.stringify(skuRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Add an item to the cart
     * Currently, carts cannot contain virtual and real currency items at the same time. Furthermore, the API only support a single virtual item at the moment
     * @param id The id of the cart
     * @param cartItemRequest The cart item request object
     */
    public addItemUsingPOSTWithHttpInfo(id: string, cartItemRequest?: models.CartItemRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/items`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addItemUsingPOST.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: cartItemRequest == null ? '' : JSON.stringify(cartItemRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Sets the owner of a cart if none is set already
     * 
     * @param id The id of the cart
     * @param userId The id of the user
     */
    public assignCartUsingPUTWithHttpInfo(id: string, userId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/owner`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling assignCartUsingPUT.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: userId == null ? '' : JSON.stringify(userId), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Returns whether a cart requires shipping
     * 
     * @param id The id of the cart
     */
    public checkShippableUsingGETWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/shippable`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling checkShippableUsingGET.');
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
     * Creates a new cart from scratch
     * You don&#39;t have to have a user to create a cart but the API requires authentication to checkout
     * @param owner Set the owner of a cart. If not specified, defaults to the calling user&#39;s id. If specified and is not the calling user&#39;s id, SHOPPING_CARTS_ADMIN permission is required
     * @param currencyCode Set the currency for the cart, by currency code. May be disallowed by site settings.
     */
    public createCartUsingPOSTWithHttpInfo(owner?: number, currencyCode?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (owner !== undefined) {
            queryParameters.set('owner', <any>owner);
        }
        if (currencyCode !== undefined) {
            queryParameters.set('currency_code', <any>currencyCode);
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
            method: RequestMethod.Post,
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
     * Returns the cart with the given GUID
     * 
     * @param id The id of the cart
     */
    public getCartUsingGETWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCartUsingGET.');
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
     * Get the list of available shipping countries per vendor
     * Since a cart can have multiple vendors with different shipping options, the countries are broken down by vendors. Please see notes about the response object as the fields are variable.
     * @param id The id of the cart
     */
    public getCountriesUsingGETWithHttpInfo(id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/countries`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCountriesUsingGET.');
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
     * Modifies or sets the order shipping address
     * 
     * @param id The id of the cart
     * @param cartShippingAddressRequest The cart shipping address request object
     */
    public modifyShippingAddressUsingPUTWithHttpInfo(id: string, cartShippingAddressRequest?: models.CartShippingAddressRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/shipping-address`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling modifyShippingAddressUsingPUT.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: cartShippingAddressRequest == null ? '' : JSON.stringify(cartShippingAddressRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Removes a coupon from the cart
     * 
     * @param id The id of the cart
     * @param code The SKU code of the coupon to remove
     */
    public removeDiscountUsingDELETEWithHttpInfo(id: string, code: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/discounts/${code}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling removeDiscountUsingDELETE.');
        }
        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new Error('Required parameter code was null or undefined when calling removeDiscountUsingDELETE.');
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
     * Get a list of carts
     * 
     * @param filterOwnerId Filter by the id of the owner
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public searchCartsUsingGETWithHttpInfo(filterOwnerId?: number, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (filterOwnerId !== undefined) {
            queryParameters.set('filter_owner_id', <any>filterOwnerId);
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
     * Sets the currency to use for the cart
     * May be disallowed by site settings.
     * @param id The id of the cart
     * @param currencyCode The code of the currency
     */
    public setCartCurrencyUsingPUTWithHttpInfo(id: string, currencyCode?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/currency`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling setCartCurrencyUsingPUT.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: currencyCode == null ? '' : JSON.stringify(currencyCode), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Changes the quantity of an item already in the cart
     * A quantity of zero will remove the item from the cart altogether.
     * @param id The id of the cart
     * @param cartItemRequest The cart item request object
     */
    public updateItemUsingPUTWithHttpInfo(id: string, cartItemRequest?: models.CartItemRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/carts/${id}/items`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateItemUsingPUT.');
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
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: cartItemRequest == null ? '' : JSON.stringify(cartItemRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
