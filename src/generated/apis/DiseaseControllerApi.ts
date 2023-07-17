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
    DiseaseDTO,
} from '../models';

export interface DeleteDiseaseUsingDELETERequest {
    code: string;
}

export interface GetDiseaseByCodeUsingGETRequest {
    code: string;
}

export interface GetDiseasesIpdInByCodeUsingGETRequest {
    typecode: string;
}

export interface GetDiseasesIpdOutByCodeUsingGETRequest {
    typecode: string;
}

export interface GetDiseasesOpdByCodeUsingGETRequest {
    typecode: string;
}

export interface GetDiseasesUsingGET1Request {
    typecode: string;
}

export interface NewDiseaseUsingPOSTRequest {
    diseaseDTO: DiseaseDTO;
}

export interface UpdateDiseaseUsingPUTRequest {
    diseaseDTO: DiseaseDTO;
}

/**
 * no description
 */
export class DiseaseControllerApi extends BaseAPI {

    /**
     * deleteDisease
     */
    deleteDiseaseUsingDELETE({ code }: DeleteDiseaseUsingDELETERequest): Observable<{ [key: string]: boolean; }>
    deleteDiseaseUsingDELETE({ code }: DeleteDiseaseUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<{ [key: string]: boolean; }>>
    deleteDiseaseUsingDELETE({ code }: DeleteDiseaseUsingDELETERequest, opts?: OperationOpts): Observable<{ [key: string]: boolean; } | RawAjaxResponse<{ [key: string]: boolean; }>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDiseaseUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<{ [key: string]: boolean; }>({
            url: '/diseases/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getAllDiseases
     */
    getAllDiseasesUsingGET(): Observable<Array<DiseaseDTO>>
    getAllDiseasesUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getAllDiseasesUsingGET(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/all',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseaseByCode
     */
    getDiseaseByCodeUsingGET({ code }: GetDiseaseByCodeUsingGETRequest): Observable<DiseaseDTO>
    getDiseaseByCodeUsingGET({ code }: GetDiseaseByCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    getDiseaseByCodeUsingGET({ code }: GetDiseaseByCodeUsingGETRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(code, 'code', 'getDiseaseByCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<DiseaseDTO>({
            url: '/diseases/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesIpdInByCode
     */
    getDiseasesIpdInByCodeUsingGET({ typecode }: GetDiseasesIpdInByCodeUsingGETRequest): Observable<Array<DiseaseDTO>>
    getDiseasesIpdInByCodeUsingGET({ typecode }: GetDiseasesIpdInByCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdInByCodeUsingGET({ typecode }: GetDiseasesIpdInByCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesIpdInByCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/in/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesIpdIn
     */
    getDiseasesIpdInUsingGET(): Observable<Array<DiseaseDTO>>
    getDiseasesIpdInUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdInUsingGET(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/in',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesIpdOutByCode
     */
    getDiseasesIpdOutByCodeUsingGET({ typecode }: GetDiseasesIpdOutByCodeUsingGETRequest): Observable<Array<DiseaseDTO>>
    getDiseasesIpdOutByCodeUsingGET({ typecode }: GetDiseasesIpdOutByCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdOutByCodeUsingGET({ typecode }: GetDiseasesIpdOutByCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesIpdOutByCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/out/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesIpdOut
     */
    getDiseasesIpdOutUsingGET(): Observable<Array<DiseaseDTO>>
    getDiseasesIpdOutUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesIpdOutUsingGET(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/ipd/out',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesOpdByCode
     */
    getDiseasesOpdByCodeUsingGET({ typecode }: GetDiseasesOpdByCodeUsingGETRequest): Observable<Array<DiseaseDTO>>
    getDiseasesOpdByCodeUsingGET({ typecode }: GetDiseasesOpdByCodeUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesOpdByCodeUsingGET({ typecode }: GetDiseasesOpdByCodeUsingGETRequest, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesOpdByCodeUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/opd/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseasesOpd
     */
    getDiseasesOpdUsingGET(): Observable<Array<DiseaseDTO>>
    getDiseasesOpdUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesOpdUsingGET(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/opd',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseases
     */
    getDiseasesUsingGET(): Observable<Array<DiseaseDTO>>
    getDiseasesUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesUsingGET(opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/both',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getDiseases
     */
    getDiseasesUsingGET1({ typecode }: GetDiseasesUsingGET1Request): Observable<Array<DiseaseDTO>>
    getDiseasesUsingGET1({ typecode }: GetDiseasesUsingGET1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseDTO>>>
    getDiseasesUsingGET1({ typecode }: GetDiseasesUsingGET1Request, opts?: OperationOpts): Observable<Array<DiseaseDTO> | RawAjaxResponse<Array<DiseaseDTO>>> {
        throwIfNullOrUndefined(typecode, 'typecode', 'getDiseasesUsingGET1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseDTO>>({
            url: '/diseases/both/{typecode}'.replace('{typecode}', encodeURI(typecode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newDisease
     */
    newDiseaseUsingPOST({ diseaseDTO }: NewDiseaseUsingPOSTRequest): Observable<DiseaseDTO>
    newDiseaseUsingPOST({ diseaseDTO }: NewDiseaseUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    newDiseaseUsingPOST({ diseaseDTO }: NewDiseaseUsingPOSTRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(diseaseDTO, 'diseaseDTO', 'newDiseaseUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<DiseaseDTO>({
            url: '/diseases',
            method: 'POST',
            headers,
            body: diseaseDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateDisease
     */
    updateDiseaseUsingPUT({ diseaseDTO }: UpdateDiseaseUsingPUTRequest): Observable<DiseaseDTO>
    updateDiseaseUsingPUT({ diseaseDTO }: UpdateDiseaseUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseDTO>>
    updateDiseaseUsingPUT({ diseaseDTO }: UpdateDiseaseUsingPUTRequest, opts?: OperationOpts): Observable<DiseaseDTO | RawAjaxResponse<DiseaseDTO>> {
        throwIfNullOrUndefined(diseaseDTO, 'diseaseDTO', 'updateDiseaseUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<DiseaseDTO>({
            url: '/diseases',
            method: 'PUT',
            headers,
            body: diseaseDTO,
        }, opts?.responseOpts);
    };

}
