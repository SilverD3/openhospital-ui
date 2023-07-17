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

import {
    DiseaseDTO,
} from './';

/**
 * @export
 * @interface OpdDTO
 */
export interface OpdDTO {
    /**
     * the code of the opd
     * @type {number}
     * @memberof OpdDTO
     */
    code?: number;
    /**
     * the date of the admission
     * @type {string}
     * @memberof OpdDTO
     */
    date?: string;
    /**
     * the visit date
     * @type {string}
     * @memberof OpdDTO
     */
    visitDate: string;
    /**
     * the next visit date
     * @type {string}
     * @memberof OpdDTO
     */
    nextVisitDate?: string;
    /**
     * the admitted patient code
     * @type {number}
     * @memberof OpdDTO
     */
    patientCode?: number;
    /**
     * the patient age
     * @type {number}
     * @memberof OpdDTO
     */
    age: number;
    /**
     * the patient sex
     * @type {string}
     * @memberof OpdDTO
     */
    sex: string;
    /**
     * the patient sex
     * @type {string}
     * @memberof OpdDTO
     */
    patientName?: string;
    /**
     * Age type
     * @type {string}
     * @memberof OpdDTO
     */
    ageType?: string;
    /**
     * the admission note
     * @type {string}
     * @memberof OpdDTO
     */
    note: string;
    /**
     * a progr. in year for each ward
     * @type {number}
     * @memberof OpdDTO
     */
    prog_year?: number;
    /**
     * @type {DiseaseDTO}
     * @memberof OpdDTO
     */
    disease?: DiseaseDTO;
    /**
     * @type {DiseaseDTO}
     * @memberof OpdDTO
     */
    disease2?: DiseaseDTO;
    /**
     * @type {DiseaseDTO}
     * @memberof OpdDTO
     */
    disease3?: DiseaseDTO;
    /**
     * new(N) or reattendance(R) patient
     * @type {string}
     * @memberof OpdDTO
     */
    newPatient: string;
    /**
     * referral from another unit
     * @type {string}
     * @memberof OpdDTO
     */
    referralFrom?: string;
    /**
     * referral to another unit
     * @type {string}
     * @memberof OpdDTO
     */
    referralTo?: string;
    /**
     * user id
     * @type {string}
     * @memberof OpdDTO
     */
    userID?: string;
    /**
     * @type {number}
     * @memberof OpdDTO
     */
    readonly lock?: number;
    /**
     * @type {number}
     * @memberof OpdDTO
     */
    readonly hashCode?: number;
    /**
     * reasons for entry
     * @type {string}
     * @memberof OpdDTO
     */
    reason?: string;
    /**
     * history of a medical or psychiatric patient
     * @type {string}
     * @memberof OpdDTO
     */
    anamnesis?: string;
    /**
     * allergies of patient
     * @type {string}
     * @memberof OpdDTO
     */
    allergies?: string;
    /**
     * Current therapies
     * @type {string}
     * @memberof OpdDTO
     */
    therapies?: string;
    /**
     * prescription
     * @type {string}
     * @memberof OpdDTO
     */
    prescription?: string;
}
