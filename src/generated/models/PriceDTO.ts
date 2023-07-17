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
    PriceList,
} from './';

/**
 * Class representing a prices
 * @export
 * @interface PriceDTO
 */
export interface PriceDTO {
    /**
     * @type {number}
     * @memberof PriceDTO
     */
    id?: number;
    /**
     * @type {PriceList}
     * @memberof PriceDTO
     */
    list: PriceList;
    /**
     * the group
     * @type {string}
     * @memberof PriceDTO
     */
    group: string;
    /**
     * the item name
     * @type {string}
     * @memberof PriceDTO
     */
    item: string;
    /**
     * the description
     * @type {string}
     * @memberof PriceDTO
     */
    description: string;
    /**
     * price
     * @type {number}
     * @memberof PriceDTO
     */
    price: number;
    /**
     * @type {boolean}
     * @memberof PriceDTO
     */
    readonly editable?: boolean;
    /**
     * @type {number}
     * @memberof PriceDTO
     */
    readonly hashCode?: number;
}
