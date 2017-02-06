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
export class TaxesApi {
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
     * Create a country tax
     * 
     * @param taxResource The tax object
     */
    public createCountryTax(taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.createCountryTaxWithHttpInfo(taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public createStateTax(countryCodeIso3: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.createStateTaxWithHttpInfo(countryCodeIso3, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete an existing tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     */
    public deleteCountryTax(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteCountryTaxWithHttpInfo(countryCodeIso3, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete an existing state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public deleteStateTax(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteStateTaxWithHttpInfo(countryCodeIso3, stateCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List and search taxes
     * Get a list of taxes
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getCountryTaxes(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceCountryTaxResource> {
        return this.getCountryTaxesWithHttpInfo(size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public getStateTax(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<models.StateTaxResource> {
        return this.getStateTaxWithHttpInfo(countryCodeIso3, stateCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List and search taxes across all countries
     * Get a list of taxes
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountries(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceStateTaxResource> {
        return this.getStateTaxesForCountriesWithHttpInfo(size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * List and search taxes within a country
     * Get a list of taxes
     * @param countryCodeIso3 The iso3 code of the country
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountry(countryCodeIso3: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<models.PageResourceStateTaxResource> {
        return this.getStateTaxesForCountryWithHttpInfo(countryCodeIso3, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get a single tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     */
    public getTaxUsingGET(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<models.CountryTaxResource> {
        return this.getTaxUsingGETWithHttpInfo(countryCodeIso3, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create or update a tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public updateCountryTax(countryCodeIso3: string, taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateCountryTaxWithHttpInfo(countryCodeIso3, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create or update a state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     * @param taxResource The tax object
     */
    public updateStateTax(countryCodeIso3: string, stateCode: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateStateTaxWithHttpInfo(countryCodeIso3, stateCode, taxResource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Create a country tax
     * 
     * @param taxResource The tax object
     */
    public createCountryTaxWithHttpInfo(taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries`;

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

        // authentication (knetik_oauth) required
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
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create a state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public createStateTaxWithHttpInfo(countryCodeIso3: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}/states`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling createStateTax.');
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Delete an existing tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     */
    public deleteCountryTaxWithHttpInfo(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling deleteCountryTax.');
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
            method: RequestMethod.Delete,
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
     * Delete an existing state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public deleteStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}/states/${state_code}`;

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
            method: RequestMethod.Delete,
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
     * List and search taxes
     * Get a list of taxes
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getCountryTaxesWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        if (order !== undefined) {
            if(order instanceof Date) {
                queryParameters.set('order', <any>order.d.toISOString());
            } else {
                queryParameters.set('order', <any>order);
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
     * Get a single state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     */
    public getStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}/states/${state_code}`;

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
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

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
     * List and search taxes across all countries
     * Get a list of taxes
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountriesWithHttpInfo(size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/states`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
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

        if (order !== undefined) {
            if(order instanceof Date) {
                queryParameters.set('order', <any>order.d.toISOString());
            } else {
                queryParameters.set('order', <any>order);
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
     * List and search taxes within a country
     * Get a list of taxes
     * @param countryCodeIso3 The iso3 code of the country
     * @param size The number of objects returned per page
     * @param page The number of the page returned
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getStateTaxesForCountryWithHttpInfo(countryCodeIso3: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}/states`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getStateTaxesForCountry.');
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

        if (order !== undefined) {
            if(order instanceof Date) {
                queryParameters.set('order', <any>order.d.toISOString());
            } else {
                queryParameters.set('order', <any>order);
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
     * Get a single tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     */
    public getTaxUsingGETWithHttpInfo(countryCodeIso3: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling getTaxUsingGET.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

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
     * Create or update a tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param taxResource The tax object
     */
    public updateCountryTaxWithHttpInfo(countryCodeIso3: string, taxResource?: models.CountryTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCodeIso3' is not null or undefined
        if (countryCodeIso3 === null || countryCodeIso3 === undefined) {
            throw new Error('Required parameter countryCodeIso3 was null or undefined when calling updateCountryTax.');
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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Create or update a state tax
     * 
     * @param countryCodeIso3 The iso3 code of the country
     * @param stateCode The code of the state
     * @param taxResource The tax object
     */
    public updateStateTaxWithHttpInfo(countryCodeIso3: string, stateCode: string, taxResource?: models.StateTaxResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tax/countries/${country_code_iso3}/states/${state_code}`;

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

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: taxResource == null ? '' : JSON.stringify(taxResource), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
