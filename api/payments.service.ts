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

import { PageResourcePaymentMethodTypeResource } from '../model/pageResourcePaymentMethodTypeResource';
import { PaymentAuthorizationResource } from '../model/paymentAuthorizationResource';
import { PaymentMethodResource } from '../model/paymentMethodResource';
import { PaymentMethodTypeResource } from '../model/paymentMethodTypeResource';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PaymentsService {

    protected basePath = 'https://jsapi-integration.us-east-1.elasticbeanstalk.com';
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
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or owner
     * @summary Create a new payment method for a user
     * @param userId ID of the user for whom the payment method is being created
     * @param paymentMethod Payment method being created
     */
    public createPaymentMethod(userId: number, paymentMethod?: PaymentMethodResource, extraHttpRequestParams?: any): Observable<PaymentMethodResource> {
        return this.createPaymentMethodWithHttpInfo(userId, paymentMethod, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or owner
     * @summary Delete an existing payment method for a user
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being deleted
     */
    public deletePaymentMethod(userId: number, id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deletePaymentMethodWithHttpInfo(userId, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or owner
     * @summary Get a single payment method for a user
     * @param userId ID of the user for whom the payment method is being retrieved
     * @param id ID of the payment method being retrieved
     */
    public getPaymentMethod(userId: number, id: number, extraHttpRequestParams?: any): Observable<PaymentMethodResource> {
        return this.getPaymentMethodWithHttpInfo(userId, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> ANY
     * @summary Get a single payment method type
     * @param id ID of the payment method type being retrieved
     */
    public getPaymentMethodType(id: number, extraHttpRequestParams?: any): Observable<PaymentMethodTypeResource> {
        return this.getPaymentMethodTypeWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> ANY
     * @summary Get all payment method types
     * @param filterName Filter for payment method types whose name matches a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getPaymentMethodTypes(filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourcePaymentMethodTypeResource> {
        return this.getPaymentMethodTypesWithHttpInfo(filterName, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or owner
     * @summary Get all payment methods for a user
     * @param userId ID of the user for whom the payment methods are being retrieved
     * @param filterName Filter for payment methods whose name starts with a given string
     * @param filterPaymentType Filter for payment methods with a specific payment type
     * @param filterPaymentMethodTypeId Filter for payment methods with a specific payment method type by id
     * @param filterPaymentMethodTypeName Filter for payment methods whose payment method type name starts with a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getPaymentMethods(userId: number, filterName?: string, filterPaymentType?: string, filterPaymentMethodTypeId?: number, filterPaymentMethodTypeName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Array<PaymentMethodResource>> {
        return this.getPaymentMethodsWithHttpInfo(userId, filterName, filterPaymentType, filterPaymentMethodTypeId, filterPaymentMethodTypeName, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or PAYMENTS_USER
     * @summary Authorize payment of an invoice for later capture
     * @param request Payment authorization request
     */
    public paymentAuthorization(request?: PaymentAuthorizationResource, extraHttpRequestParams?: any): Observable<PaymentAuthorizationResource> {
        return this.paymentAuthorizationWithHttpInfo(request, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN
     * @summary Capture an existing invoice payment authorization
     * @param id ID of the payment authorization to capture
     */
    public paymentCapture(id: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.paymentCaptureWithHttpInfo(id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> PAYMENTS_ADMIN or owner
     * @summary Update an existing payment method for a user
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being updated
     * @param paymentMethod The updated payment method data
     */
    public updatePaymentMethod(userId: number, id: number, paymentMethod?: PaymentMethodResource, extraHttpRequestParams?: any): Observable<PaymentMethodResource> {
        return this.updatePaymentMethodWithHttpInfo(userId, id, paymentMethod, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create a new payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param userId ID of the user for whom the payment method is being created
     * @param paymentMethod Payment method being created
     */
    public createPaymentMethodWithHttpInfo(userId: number, paymentMethod?: PaymentMethodResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/payment-methods'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling createPaymentMethod.');
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
            body: paymentMethod == null ? '' : JSON.stringify(paymentMethod), // https://github.com/angular/angular/issues/10612
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
     * Delete an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being deleted
     */
    public deletePaymentMethodWithHttpInfo(userId: number, id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/payment-methods/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deletePaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deletePaymentMethod.');
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
     * Get a single payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param userId ID of the user for whom the payment method is being retrieved
     * @param id ID of the payment method being retrieved
     */
    public getPaymentMethodWithHttpInfo(userId: number, id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/payment-methods/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getPaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPaymentMethod.');
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
     * Get a single payment method type
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param id ID of the payment method type being retrieved
     */
    public getPaymentMethodTypeWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/payment/types/${id}'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getPaymentMethodType.');
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
     * Get all payment method types
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param filterName Filter for payment method types whose name matches a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getPaymentMethodTypesWithHttpInfo(filterName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/payment/types';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        if (filterName !== undefined) {
            queryParameters.set('filter_name', <any>filterName);
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
     * Get all payment methods for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param userId ID of the user for whom the payment methods are being retrieved
     * @param filterName Filter for payment methods whose name starts with a given string
     * @param filterPaymentType Filter for payment methods with a specific payment type
     * @param filterPaymentMethodTypeId Filter for payment methods with a specific payment method type by id
     * @param filterPaymentMethodTypeName Filter for payment methods whose payment method type name starts with a given string
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order a comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getPaymentMethodsWithHttpInfo(userId: number, filterName?: string, filterPaymentType?: string, filterPaymentMethodTypeId?: number, filterPaymentMethodTypeName?: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/payment-methods'
                    .replace('${' + 'user_id' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getPaymentMethods.');
        }
        if (filterName !== undefined) {
            queryParameters.set('filter_name', <any>filterName);
        }

        if (filterPaymentType !== undefined) {
            queryParameters.set('filter_payment_type', <any>filterPaymentType);
        }

        if (filterPaymentMethodTypeId !== undefined) {
            queryParameters.set('filter_payment_method_type_id', <any>filterPaymentMethodTypeId);
        }

        if (filterPaymentMethodTypeName !== undefined) {
            queryParameters.set('filter_payment_method_type_name', <any>filterPaymentMethodTypeName);
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
     * Authorize payment of an invoice for later capture
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or PAYMENTS_USER
     * @param request Payment authorization request
     */
    public paymentAuthorizationWithHttpInfo(request?: PaymentAuthorizationResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/payment/authorizations';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


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
            body: request == null ? '' : JSON.stringify(request), // https://github.com/angular/angular/issues/10612
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
     * Capture an existing invoice payment authorization
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN
     * @param id ID of the payment authorization to capture
     */
    public paymentCaptureWithHttpInfo(id: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/payment/authorizations/${id}/capture'
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling paymentCapture.');
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
            method: RequestMethod.Post,
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
     * Update an existing payment method for a user
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; PAYMENTS_ADMIN or owner
     * @param userId ID of the user for whom the payment method is being updated
     * @param id ID of the payment method being updated
     * @param paymentMethod The updated payment method data
     */
    public updatePaymentMethodWithHttpInfo(userId: number, id: number, paymentMethod?: PaymentMethodResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/users/${user_id}/payment-methods/${id}'
                    .replace('${' + 'user_id' + '}', String(userId))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updatePaymentMethod.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePaymentMethod.');
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
            body: paymentMethod == null ? '' : JSON.stringify(paymentMethod), // https://github.com/angular/angular/issues/10612
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
