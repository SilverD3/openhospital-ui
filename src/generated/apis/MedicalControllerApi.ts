// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    MedicalDTO,
} from '../models';

export interface DeleteMedicalUsingDELETERequest {
    code: number;
}

export interface FilterMedicalsUsingGETRequest {
    desc?: string;
    type?: string;
    critical?: boolean;
    nameSorted?: boolean;
}

export interface GetMedicalUsingGETRequest {
    code: number;
}

export interface GetMedicalsUsingGETRequest {
    sortBy?: GetMedicalsUsingGETSortByEnum;
}

export interface NewMedicalUsingPOSTRequest {
    medicalDTO: MedicalDTO;
    ignoreSimilar?: boolean;
}

export interface UpdateMedicalUsingPUTRequest {
    medicalDTO: MedicalDTO;
    ignoreSimilar?: boolean;
}

/**
 * no description
 */
export class MedicalControllerApi extends BaseAPI {

    /**
     * deleteMedical
     */
    deleteMedicalUsingDELETE = ({ code }: DeleteMedicalUsingDELETERequest): Observable<boolean> => {
        throwIfNullOrUndefined(code, 'deleteMedicalUsingDELETE');

        return this.request<boolean>({
            path: '/medicals/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
        });
    };

    /**
     * filterMedicals
     */
    filterMedicalsUsingGET = ({ desc, type, critical, nameSorted }: FilterMedicalsUsingGETRequest): Observable<Array<MedicalDTO>> => {

        const query: HttpQuery = {};

        if (desc != null) { query['desc'] = desc; }
        if (type != null) { query['type'] = type; }
        if (critical != null) { query['critical'] = critical; }
        if (nameSorted != null) { query['name_sorted'] = nameSorted; }

        return this.request<Array<MedicalDTO>>({
            path: '/medicals/filter',
            method: 'GET',
            query,
        });
    };

    /**
     * getMedical
     */
    getMedicalUsingGET = ({ code }: GetMedicalUsingGETRequest): Observable<MedicalDTO> => {
        throwIfNullOrUndefined(code, 'getMedicalUsingGET');

        return this.request<MedicalDTO>({
            path: '/medicals/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
        });
    };

    /**
     * getMedicals
     */
    getMedicalsUsingGET = ({ sortBy }: GetMedicalsUsingGETRequest): Observable<Array<MedicalDTO>> => {

        const query: HttpQuery = {};

        if (sortBy != null) { query['sort_by'] = sortBy; }

        return this.request<Array<MedicalDTO>>({
            path: '/medicals',
            method: 'GET',
            query,
        });
    };

    /**
     * newMedical
     */
    newMedicalUsingPOST = ({ medicalDTO, ignoreSimilar }: NewMedicalUsingPOSTRequest): Observable<void> => {
        throwIfNullOrUndefined(medicalDTO, 'newMedicalUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        const query: HttpQuery = {};

        if (ignoreSimilar != null) { query['ignore_similar'] = ignoreSimilar; }

        return this.request<void>({
            path: '/medicals',
            method: 'POST',
            headers,
            query,
            body: medicalDTO,
        });
    };

    /**
     * updateMedical
     */
    updateMedicalUsingPUT = ({ medicalDTO, ignoreSimilar }: UpdateMedicalUsingPUTRequest): Observable<void> => {
        throwIfNullOrUndefined(medicalDTO, 'updateMedicalUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        const query: HttpQuery = {};

        if (ignoreSimilar != null) { query['ignore_similar'] = ignoreSimilar; }

        return this.request<void>({
            path: '/medicals',
            method: 'PUT',
            headers,
            query,
            body: medicalDTO,
        });
    };

}

/**
 * @export
 * @enum {string}
 */
export enum GetMedicalsUsingGETSortByEnum {
    NONE = 'NONE',
    CODE = 'CODE',
    NAME = 'NAME'
}