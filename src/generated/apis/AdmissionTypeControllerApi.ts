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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    AdmissionTypeDTO,
} from '../models';

export interface DeleteAdmissionTypeUsingDELETE1Request {
    code: string;
}

export interface NewAdmissionTypeUsingPOSTRequest {
    admissionTypeDTO: AdmissionTypeDTO;
}

export interface UpdateAdmissionTypetUsingPUTRequest {
    admissionTypeDTO: AdmissionTypeDTO;
}

/**
 * no description
 */
export class AdmissionTypeControllerApi extends BaseAPI {

    /**
     * deleteAdmissionType
     */
    deleteAdmissionTypeUsingDELETE1 = ({ code }: DeleteAdmissionTypeUsingDELETE1Request): Observable<boolean> => {
        throwIfNullOrUndefined(code, 'deleteAdmissionTypeUsingDELETE1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            path: '/admissiontypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        });
    };

    /**
     * getAdmissionTypes
     */
    getAdmissionTypesUsingGET = (): Observable<Array<AdmissionTypeDTO>> => {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<AdmissionTypeDTO>>({
            path: '/admissiontypes',
            method: 'GET',
            headers,
        });
    };

    /**
     * newAdmissionType
     */
    newAdmissionTypeUsingPOST = ({ admissionTypeDTO }: NewAdmissionTypeUsingPOSTRequest): Observable<string> => {
        throwIfNullOrUndefined(admissionTypeDTO, 'newAdmissionTypeUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            path: '/admissiontypes',
            method: 'POST',
            headers,
            body: admissionTypeDTO,
        });
    };

    /**
     * updateAdmissionTypet
     */
    updateAdmissionTypetUsingPUT = ({ admissionTypeDTO }: UpdateAdmissionTypetUsingPUTRequest): Observable<string> => {
        throwIfNullOrUndefined(admissionTypeDTO, 'updateAdmissionTypetUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<string>({
            path: '/admissiontypes',
            method: 'PUT',
            headers,
            body: admissionTypeDTO,
        });
    };

}
