// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    SupplierDTO,
} from '../models';

export interface GetSuppliersUsingGETRequest {
    excludeDeleted?: boolean;
}

export interface GetSuppliersUsingGET1Request {
    id: number;
}

export interface SaveSupplierUsingPOSTRequest {
    supplierDTO: SupplierDTO;
}

export interface UpdateSupplierUsingPUTRequest {
    supplierDTO: SupplierDTO;
}

/**
 * no description
 */
export class SupplierControllerApi extends BaseAPI {

    /**
     * getSuppliers
     */
    getSuppliersUsingGET({ excludeDeleted }: GetSuppliersUsingGETRequest): Observable<Array<SupplierDTO>>
    getSuppliersUsingGET({ excludeDeleted }: GetSuppliersUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<SupplierDTO>>>
    getSuppliersUsingGET({ excludeDeleted }: GetSuppliersUsingGETRequest, opts?: OperationOpts): Observable<Array<SupplierDTO> | RawAjaxResponse<Array<SupplierDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (excludeDeleted != null) { query['exclude_deleted'] = excludeDeleted; }

        return this.request<Array<SupplierDTO>>({
            url: '/suppliers',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getSuppliers
     */
    getSuppliersUsingGET1({ id }: GetSuppliersUsingGET1Request): Observable<SupplierDTO>
    getSuppliersUsingGET1({ id }: GetSuppliersUsingGET1Request, opts?: OperationOpts): Observable<RawAjaxResponse<SupplierDTO>>
    getSuppliersUsingGET1({ id }: GetSuppliersUsingGET1Request, opts?: OperationOpts): Observable<SupplierDTO | RawAjaxResponse<SupplierDTO>> {
        throwIfNullOrUndefined(id, 'id', 'getSuppliersUsingGET1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<SupplierDTO>({
            url: '/suppliers/{id}'.replace('{id}', encodeURI(id)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * saveSupplier
     */
    saveSupplierUsingPOST({ supplierDTO }: SaveSupplierUsingPOSTRequest): Observable<SupplierDTO>
    saveSupplierUsingPOST({ supplierDTO }: SaveSupplierUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<SupplierDTO>>
    saveSupplierUsingPOST({ supplierDTO }: SaveSupplierUsingPOSTRequest, opts?: OperationOpts): Observable<SupplierDTO | RawAjaxResponse<SupplierDTO>> {
        throwIfNullOrUndefined(supplierDTO, 'supplierDTO', 'saveSupplierUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<SupplierDTO>({
            url: '/suppliers',
            method: 'POST',
            headers,
            body: supplierDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateSupplier
     */
    updateSupplierUsingPUT({ supplierDTO }: UpdateSupplierUsingPUTRequest): Observable<SupplierDTO>
    updateSupplierUsingPUT({ supplierDTO }: UpdateSupplierUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<SupplierDTO>>
    updateSupplierUsingPUT({ supplierDTO }: UpdateSupplierUsingPUTRequest, opts?: OperationOpts): Observable<SupplierDTO | RawAjaxResponse<SupplierDTO>> {
        throwIfNullOrUndefined(supplierDTO, 'supplierDTO', 'updateSupplierUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<SupplierDTO>({
            url: '/suppliers',
            method: 'PUT',
            headers,
            body: supplierDTO,
        }, opts?.responseOpts);
    };

}
