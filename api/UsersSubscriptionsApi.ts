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
export class UsersSubscriptionsApi {
    protected basePath = 'https://sandbox.knetikcloud.com/';
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
     * Get details about a user&#39;s subscription
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     */
    public getUserSubscriptionDetails(userId: number, inventoryId: number, extraHttpRequestParams?: any): Observable<models.InventorySubscriptionResource> {
        return this.getUserSubscriptionDetailsWithHttpInfo(userId, inventoryId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get details about a user&#39;s subscriptions
     * 
     * @param userId The id of the user
     */
    public getUsersSubscriptionDetails(userId: number, extraHttpRequestParams?: any): Observable<Array<models.InventorySubscriptionResource>> {
        return this.getUsersSubscriptionDetailsWithHttpInfo(userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Reactivate a subscription and charge fee
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param reactivateSubscriptionRequest The reactivate subscription request object inventory
     */
    public reactivateUserSubscription(userId: number, inventoryId: number, reactivateSubscriptionRequest?: models.ReactivateSubscriptionRequest, extraHttpRequestParams?: any): Observable<models.InvoiceResource> {
        return this.reactivateUserSubscriptionWithHttpInfo(userId, inventoryId, reactivateSubscriptionRequest, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set a new date to bill a subscription on
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param billDate The new bill date. Unix timestamp in seconds
     */
    public setSubscriptionBillDate(userId: number, inventoryId: number, billDate: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.setSubscriptionBillDateWithHttpInfo(userId, inventoryId, billDate, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set the payment method to use for a subscription
     * May send null to use floating default
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param paymentMethodId The id of the payment method
     */
    public setSubscriptionPaymentMethod(userId: number, inventoryId: number, paymentMethodId?: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.setSubscriptionPaymentMethodWithHttpInfo(userId, inventoryId, paymentMethodId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set the status of a subscription
     * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
     */
    public setSubscriptionStatus(userId: number, inventoryId: number, status: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.setSubscriptionStatusWithHttpInfo(userId, inventoryId, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Set a new subscription plan for a user
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param planId The id of the new plan. Must be from the same subscription
     */
    public setUserSubscriptionPlan(userId: number, inventoryId: number, planId?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.setUserSubscriptionPlanWithHttpInfo(userId, inventoryId, planId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Get details about a user&#39;s subscription
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     */
    public getUserSubscriptionDetailsWithHttpInfo(userId: number, inventoryId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserSubscriptionDetails.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling getUserSubscriptionDetails.');
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
     * Get details about a user&#39;s subscriptions
     * 
     * @param userId The id of the user
     */
    public getUsersSubscriptionDetailsWithHttpInfo(userId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUsersSubscriptionDetails.');
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
     * Reactivate a subscription and charge fee
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param reactivateSubscriptionRequest The reactivate subscription request object inventory
     */
    public reactivateUserSubscriptionWithHttpInfo(userId: number, inventoryId: number, reactivateSubscriptionRequest?: models.ReactivateSubscriptionRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}/reactivate`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling reactivateUserSubscription.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling reactivateUserSubscription.');
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
            body: reactivateSubscriptionRequest == null ? '' : JSON.stringify(reactivateSubscriptionRequest), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Set a new date to bill a subscription on
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param billDate The new bill date. Unix timestamp in seconds
     */
    public setSubscriptionBillDateWithHttpInfo(userId: number, inventoryId: number, billDate: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}/bill-date`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionBillDate.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionBillDate.');
        }
        // verify required parameter 'billDate' is not null or undefined
        if (billDate === null || billDate === undefined) {
            throw new Error('Required parameter billDate was null or undefined when calling setSubscriptionBillDate.');
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
            body: billDate == null ? '' : JSON.stringify(billDate), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Set the payment method to use for a subscription
     * May send null to use floating default
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param paymentMethodId The id of the payment method
     */
    public setSubscriptionPaymentMethodWithHttpInfo(userId: number, inventoryId: number, paymentMethodId?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}/payment-method`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionPaymentMethod.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionPaymentMethod.');
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
            body: paymentMethodId == null ? '' : JSON.stringify(paymentMethodId), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Set the status of a subscription
     * The body is a json string (put in quotes) that should match a desired invoice status type. Note that the new status may be blocked if the system is not configured to allow the current status to be changed to the new, to enforce proper flow. The default options for statuses are shown below but may be altered for special use cases
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param status The new status for the subscription. Actual options may differ from the indicated set if the invoice status type data has been altered.  Allowable values: (&#39;current&#39;, &#39;canceled&#39;, &#39;stopped&#39;, &#39;payment_failed&#39;, &#39;suspended&#39;)
     */
    public setSubscriptionStatusWithHttpInfo(userId: number, inventoryId: number, status: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}/status`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setSubscriptionStatus.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setSubscriptionStatus.');
        }
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling setSubscriptionStatus.');
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
            body: status == null ? '' : JSON.stringify(status), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Set a new subscription plan for a user
     * 
     * @param userId The id of the user
     * @param inventoryId The id of the user&#39;s inventory
     * @param planId The id of the new plan. Must be from the same subscription
     */
    public setUserSubscriptionPlanWithHttpInfo(userId: number, inventoryId: number, planId?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/users/${user_id}/subscriptions/${inventory_id}/plan`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling setUserSubscriptionPlan.');
        }
        // verify required parameter 'inventoryId' is not null or undefined
        if (inventoryId === null || inventoryId === undefined) {
            throw new Error('Required parameter inventoryId was null or undefined when calling setUserSubscriptionPlan.');
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
            body: planId == null ? '' : JSON.stringify(planId), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
