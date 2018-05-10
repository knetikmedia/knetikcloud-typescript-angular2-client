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

import { CountryTaxResource } from '../model/countryTaxResource';
import { PageResourceCountryTaxResource } from '../model/pageResourceCountryTaxResource';
import { PageResourceStateTaxResource } from '../model/pageResourceStateTaxResource';
import { Result } from '../model/result';
import { StateTaxResource } from '../model/stateTaxResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TaxesService {

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
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Create a country tax
     * @param taxResource The tax object
     */
    public createCountryTax(taxResource?: CountryTaxResource, extraHttpRequestParams?: any): Observable<CountryTaxResource> {
        return this.createCountryTaxWithHttpInfo(taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Create a state tax
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public createStateTax(countryCodeIso3: string, taxResource?: StateTaxResource, extraHttpRequestParams?: any): Observable<StateTaxResource> {
        return this.createStateTaxWithHttpInfo(countryCodeIso3, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Delete an existing tax
     * @param countryCodeIso3 The iso3 code of the country
     */
    public deleteCountryTax(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteCountryTaxWithHttpInfo(countryCodeIso3, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Delete an existing state tax
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public deleteStateTax(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteStateTaxWithHttpInfo(countryCodeIso3, stateCode, extraHttpRequestParams)
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
     * @summary Get a single tax
     * @param countryCodeIso3 The iso3 code of the country
     */
    public getCountryTax(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<CountryTaxResource> {
        return this.getCountryTaxWithHttpInfo(countryCodeIso3, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary List and search taxes
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getCountryTaxes(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceCountryTaxResource> {
        return this.getCountryTaxesWithHttpInfo(size, page, order, extraHttpRequestParams)
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
     * @summary Get a single state tax
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public getStateTax(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<StateTaxResource> {
        return this.getStateTaxWithHttpInfo(countryCodeIso3, stateCode, extraHttpRequestParams)
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
     * @summary List and search taxes across all countries
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountries(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceStateTaxResource> {
        return this.getStateTaxesForCountriesWithHttpInfo(size, page, order, extraHttpRequestParams)
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
     * @summary List and search taxes within a country
     * @param countryCodeIso3 The iso3 code of the country
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountry(countryCodeIso3: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceStateTaxResource> {
        return this.getStateTaxesForCountryWithHttpInfo(countryCodeIso3, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Create or update a tax
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public updateCountryTax(countryCodeIso3: string, taxResource?: CountryTaxResource, extraHttpRequestParams?: any): Observable<CountryTaxResource> {
        return this.updateCountryTaxWithHttpInfo(countryCodeIso3, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TAX_ADMIN
     * @summary Create or update a state tax
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     * @param taxResource The tax object
     */
    public updateStateTax(countryCodeIso3: string, stateCode: string, taxResource?: StateTaxResource, extraHttpRequestParams?: any): Observable<StateTaxResource> {
        return this.updateStateTaxWithHttpInfo(countryCodeIso3, stateCode, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create a country tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param taxResource The tax object
     */
    public createCountryTaxWithHttpInfo(taxResource?: CountryTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries';

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
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
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
     * Create a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public createStateTaxWithHttpInfo(countryCodeIso3: string, taxResource?: StateTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}/states'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling createStateTax.');
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
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
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
     * Delete an existing tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param countryCodeIso3 The iso3 code of the country
     */
    public deleteCountryTaxWithHttpInfo(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling deleteCountryTax.');
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
     * Delete an existing state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public deleteStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}/states/${state_code}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3))
                    .replace('${' + 'state_code' + '}', String(stateCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling deleteStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling deleteStateTax.');
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
     * Get a single tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param countryCodeIso3 The iso3 code of the country
     */
    public getCountryTaxWithHttpInfo(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getCountryTax.');
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
     * List and search taxes
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getCountryTaxesWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries';

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
     * Get a single state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public getStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}/states/${state_code}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3))
                    .replace('${' + 'state_code' + '}', String(stateCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling getStateTax.');
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
     * List and search taxes across all countries
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountriesWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/states';

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
     * List and search taxes within a country
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; ANY
     * @param countryCodeIso3 The iso3 code of the country
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountryWithHttpInfo(countryCodeIso3: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}/states'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getStateTaxesForCountry.');
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
     * Create or update a tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public updateCountryTaxWithHttpInfo(countryCodeIso3: string, taxResource?: CountryTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling updateCountryTax.');
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
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
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
     * Create or update a state tax
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TAX_ADMIN
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     * @param taxResource The tax object
     */
    public updateStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, taxResource?: StateTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/tax/countries/${country_code_iso3}/states/${state_code}'
                    .replace('${' + 'country_code_iso3' + '}', String(countryCodeIso3))
                    .replace('${' + 'state_code' + '}', String(stateCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling updateStateTax.');
        }
        // verify required parameter 'stateCode' is not null or undefined
        if (stateCode === null || stateCode === undefined) {
            throw new Error('Required parameter stateCode was null or undefined when calling updateStateTax.');
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
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
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
