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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI } from '../runtime';
import {
    ResponseEntity,
    WardDTO,
} from '../models';

export interface CheckWardCodeUsingGETRequest {
    code: string;
}

export interface CheckWardMaternityCodeUsingGETRequest {
    createIfNotExist: boolean;
}

export interface DeleteWardUsingDELETERequest {
    code: string;
}

export interface GetCurrentOccupationUsingGETRequest {
    code: string;
}

export interface NewWardUsingPOSTRequest {
    newWard: WardDTO;
}

export interface UpdateWardUsingPUTRequest {
    updateWard: WardDTO;
}

/**
 * no description
 */
export class WardControllerApi extends BaseAPI {

    /**
     * checkWardCode
     */
    checkWardCodeUsingGET = ({ code }: CheckWardCodeUsingGETRequest): Observable<boolean> => {
        throwIfNullOrUndefined(code, 'checkWardCodeUsingGET');

        return this.request<boolean>({
            path: '/wards/check/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
        });
    };

    /**
     * checkWardMaternityCode
     */
    checkWardMaternityCodeUsingGET = ({ createIfNotExist }: CheckWardMaternityCodeUsingGETRequest): Observable<boolean> => {
        throwIfNullOrUndefined(createIfNotExist, 'checkWardMaternityCodeUsingGET');

        return this.request<boolean>({
            path: '/wards/check/{createIfNotExist}'.replace('{createIfNotExist}', encodeURI(createIfNotExist)),
            method: 'GET',
        });
    };

    /**
     * deleteWard
     */
    deleteWardUsingDELETE = ({ code }: DeleteWardUsingDELETERequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(code, 'deleteWardUsingDELETE');

        return this.request<ResponseEntity>({
            path: '/wards/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
        });
    };

    /**
     * getCurrentOccupation
     */
    getCurrentOccupationUsingGET = ({ code }: GetCurrentOccupationUsingGETRequest): Observable<number> => {
        throwIfNullOrUndefined(code, 'getCurrentOccupationUsingGET');

        return this.request<number>({
            path: '/wards/occupation/{code}'.replace('{code}', encodeURI(code)),
            method: 'GET',
        });
    };

    /**
     * getWardsNoMaternity
     */
    getWardsNoMaternityUsingGET = (): Observable<Array<WardDTO>> => {
        return this.request<Array<WardDTO>>({
            path: '/wardsNoMaternity',
            method: 'GET',
        });
    };

    /**
     * getWards
     */
    getWardsUsingGET = (): Observable<Array<WardDTO>> => {
        return this.request<Array<WardDTO>>({
            path: '/wards',
            method: 'GET',
        });
    };

    /**
     * newWard
     */
    newWardUsingPOST = ({ newWard }: NewWardUsingPOSTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(newWard, 'newWardUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ResponseEntity>({
            path: '/wards',
            method: 'POST',
            headers,
            body: newWard,
        });
    };

    /**
     * updateWard
     */
    updateWardUsingPUT = ({ updateWard }: UpdateWardUsingPUTRequest): Observable<ResponseEntity> => {
        throwIfNullOrUndefined(updateWard, 'updateWardUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ResponseEntity>({
            path: '/wards',
            method: 'PUT',
            headers,
            body: updateWard,
        });
    };

}
