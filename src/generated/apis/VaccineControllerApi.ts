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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    ResponseEntity,
    VaccineDTO,
} from '../models';

export interface CheckVaccineCodeUsingGETRequest {
    code: string;
}

export interface DeleteVaccineUsingDELETERequest {
    code: string;
}

export interface GetVaccinesByVaccineTypeCodeUsingGETRequest {
    vaccineTypeCode: string;
}

export interface NewVaccineUsingPOSTRequest {
    newVaccine: VaccineDTO;
}

export interface UpdateVaccineUsingPUTRequest {
    updateVaccine: VaccineDTO;
}

/**
 * no description
 */
export class VaccineControllerApi extends BaseAPI {

    /**
     * checkVaccineCode
     */
    checkVaccineCodeUsingGET({ code }: CheckVaccineCodeUsingGETRequest): Observable<boolean>
    checkVaccineCodeUsingGET({ code }: CheckVaccineCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    checkVaccineCodeUsingGET({ code }: CheckVaccineCodeUsingGETRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(code, 'code', 'checkVaccineCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/vaccines/check/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * deleteVaccine
     */
    deleteVaccineUsingDELETE({ code }: DeleteVaccineUsingDELETERequest): Observable<ResponseEntity>
    deleteVaccineUsingDELETE({ code }: DeleteVaccineUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    deleteVaccineUsingDELETE({ code }: DeleteVaccineUsingDELETERequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(code, 'code', 'deleteVaccineUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/vaccines/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getVaccinesByVaccineTypeCode
     */
    getVaccinesByVaccineTypeCodeUsingGET({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeUsingGETRequest): Observable<Array<VaccineDTO>>
    getVaccinesByVaccineTypeCodeUsingGET({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<VaccineDTO>>>
    getVaccinesByVaccineTypeCodeUsingGET({ vaccineTypeCode }: GetVaccinesByVaccineTypeCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<VaccineDTO> | RawAjaxResponse<Array<VaccineDTO>>> {
        throwIfNullOrUndefined(vaccineTypeCode, 'vaccineTypeCode', 'getVaccinesByVaccineTypeCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<VaccineDTO>>({
            url: '/vaccines/type-code/{vaccineTypeCode}'.replace('{vaccineTypeCode}', encodeURI(vaccineTypeCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getVaccines
     */
    getVaccinesUsingGET(): Observable<Array<VaccineDTO>>
    getVaccinesUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<VaccineDTO>>>
    getVaccinesUsingGET(opts?: OperationOpts): Observable<Array<VaccineDTO> | RawAjaxResponse<Array<VaccineDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<VaccineDTO>>({
            url: '/vaccines',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newVaccine
     */
    newVaccineUsingPOST({ newVaccine }: NewVaccineUsingPOSTRequest): Observable<VaccineDTO>
    newVaccineUsingPOST({ newVaccine }: NewVaccineUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VaccineDTO>>
    newVaccineUsingPOST({ newVaccine }: NewVaccineUsingPOSTRequest, opts?: OperationOpts): Observable<VaccineDTO | RawAjaxResponse<VaccineDTO>> {
        throwIfNullOrUndefined(newVaccine, 'newVaccine', 'newVaccineUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<VaccineDTO>({
            url: '/vaccines',
            method: 'POST',
            headers,
            body: newVaccine,
        }, opts?.responseOpts);
    };

    /**
     * updateVaccine
     */
    updateVaccineUsingPUT({ updateVaccine }: UpdateVaccineUsingPUTRequest): Observable<VaccineDTO>
    updateVaccineUsingPUT({ updateVaccine }: UpdateVaccineUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VaccineDTO>>
    updateVaccineUsingPUT({ updateVaccine }: UpdateVaccineUsingPUTRequest, opts?: OperationOpts): Observable<VaccineDTO | RawAjaxResponse<VaccineDTO>> {
        throwIfNullOrUndefined(updateVaccine, 'updateVaccine', 'updateVaccineUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<VaccineDTO>({
            url: '/vaccines',
            method: 'PUT',
            headers,
            body: updateVaccine,
        }, opts?.responseOpts);
    };

}
