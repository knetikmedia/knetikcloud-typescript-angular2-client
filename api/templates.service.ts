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

import { BasicTemplatedResource } from '../model/basicTemplatedResource';
import { PageResourceTemplateResource } from '../model/pageResourceTemplateResource';
import { PatchResource } from '../model/patchResource';
import { Result } from '../model/result';
import { TemplateResource } from '../model/templateResource';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TemplatesService {

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
     * <b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> POST
     * @summary Create a template
     * @param typeHint The type for the resource this template applies to
     * @param template The template
     */
    public createTemplate(typeHint: string, template?: TemplateResource, extraHttpRequestParams?: any): Observable<TemplateResource> {
        return this.createTemplateWithHttpInfo(typeHint, template, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> DELETE
     * @summary Delete a template
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     * @param cascade How to cascade the delete
     */
    public deleteTemplate(typeHint: string, id: string, cascade?: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteTemplateWithHttpInfo(typeHint, id, cascade, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> GET
     * @summary Get a template
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     */
    public getTemplate(typeHint: string, id: string, extraHttpRequestParams?: any): Observable<TemplateResource> {
        return this.getTemplateWithHttpInfo(typeHint, id, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> LIST
     * @summary List and search templates
     * @param typeHint The type for the resource this template applies to
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getTemplates(typeHint: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<PageResourceTemplateResource> {
        return this.getTemplatesWithHttpInfo(typeHint, size, page, order, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * <b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> PUT
     * @summary Patch a template
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     * @param templatePatchResource The patch resource object
     * @param testValidation If true, this will test validation but not submit the patch request
     */
    public patchTemplate(typeHint: string, id: string, templatePatchResource?: PatchResource, testValidation?: boolean, extraHttpRequestParams?: any): Observable<{}> {
        return this.patchTemplateWithHttpInfo(typeHint, id, templatePatchResource, testValidation, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Error code thrown if invalid.<br><br><b>Permissions Needed:</b> TEMPLATES_ADMIN<br /><b>Permissions Needed:</b> GET
     * @summary Validate a templated resource
     * @param typeHint The type for the resource this template applies to
     * @param resource The resource to validate
     */
    public validate(typeHint: string, resource?: BasicTemplatedResource, extraHttpRequestParams?: any): Observable<{}> {
        return this.validateWithHttpInfo(typeHint, resource, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; POST
     * @param typeHint The type for the resource this template applies to
     * @param template The template
     */
    public createTemplateWithHttpInfo(typeHint: string, template?: TemplateResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}'
                    .replace('${' + 'type_hint' + '}', String(typeHint));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling createTemplate.');
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
            body: template == null ? '' : JSON.stringify(template), // https://github.com/angular/angular/issues/10612
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
     * Delete a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; DELETE
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     * @param cascade How to cascade the delete
     */
    public deleteTemplateWithHttpInfo(typeHint: string, id: string, cascade?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}/${id}'
                    .replace('${' + 'type_hint' + '}', String(typeHint))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling deleteTemplate.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTemplate.');
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
            method: RequestMethod.Delete,
            headers: headers,
            body: cascade == null ? '' : JSON.stringify(cascade), // https://github.com/angular/angular/issues/10612
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
     * Get a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     */
    public getTemplateWithHttpInfo(typeHint: string, id: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}/${id}'
                    .replace('${' + 'type_hint' + '}', String(typeHint))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling getTemplate.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTemplate.');
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
     * List and search templates
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; LIST
     * @param typeHint The type for the resource this template applies to
     * @param size The number of objects returned per page
     * @param page The number of the page returned, starting with 1
     * @param order A comma separated list of sorting requirements in priority order, each entry matching PROPERTY_NAME:[ASC|DESC]
     */
    public getTemplatesWithHttpInfo(typeHint: string, size?: number, page?: number, order?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}'
                    .replace('${' + 'type_hint' + '}', String(typeHint));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling getTemplates.');
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
     * Patch a template
     * &lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; PUT
     * @param typeHint The type for the resource this template applies to
     * @param id The id of the template
     * @param templatePatchResource The patch resource object
     * @param testValidation If true, this will test validation but not submit the patch request
     */
    public patchTemplateWithHttpInfo(typeHint: string, id: string, templatePatchResource?: PatchResource, testValidation?: boolean, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}/${id}'
                    .replace('${' + 'type_hint' + '}', String(typeHint))
                    .replace('${' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling patchTemplate.');
        }
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling patchTemplate.');
        }
        if (testValidation !== undefined) {
            queryParameters.set('test_validation', <any>testValidation);
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
            method: RequestMethod.Patch,
            headers: headers,
            body: templatePatchResource == null ? '' : JSON.stringify(templatePatchResource), // https://github.com/angular/angular/issues/10612
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
     * Validate a templated resource
     * Error code thrown if invalid.&lt;br&gt;&lt;br&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; TEMPLATES_ADMIN&lt;br /&gt;&lt;b&gt;Permissions Needed:&lt;/b&gt; GET
     * @param typeHint The type for the resource this template applies to
     * @param resource The resource to validate
     */
    public validateWithHttpInfo(typeHint: string, resource?: BasicTemplatedResource, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/templates/${type_hint}/validate'
                    .replace('${' + 'type_hint' + '}', String(typeHint));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        // verify required parameter 'typeHint' is not null or undefined
        if (typeHint === null || typeHint === undefined) {
            throw new Error('Required parameter typeHint was null or undefined when calling validate.');
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
            body: resource == null ? '' : JSON.stringify(resource), // https://github.com/angular/angular/issues/10612
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
