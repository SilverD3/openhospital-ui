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

/**
 * @export
 * @interface ModelFile
 */
export interface ModelFile {
    /**
     * @type {boolean}
     * @memberof ModelFile
     */
    absolute?: boolean;
    /**
     * @type {Blob}
     * @memberof ModelFile
     */
    absoluteFile?: Blob;
    /**
     * @type {string}
     * @memberof ModelFile
     */
    absolutePath?: string;
    /**
     * @type {Blob}
     * @memberof ModelFile
     */
    canonicalFile?: Blob;
    /**
     * @type {string}
     * @memberof ModelFile
     */
    canonicalPath?: string;
    /**
     * @type {boolean}
     * @memberof ModelFile
     */
    directory?: boolean;
    /**
     * @type {boolean}
     * @memberof ModelFile
     */
    file?: boolean;
    /**
     * @type {number}
     * @memberof ModelFile
     */
    freeSpace?: number;
    /**
     * @type {boolean}
     * @memberof ModelFile
     */
    hidden?: boolean;
    /**
     * @type {string}
     * @memberof ModelFile
     */
    name?: string;
    /**
     * @type {string}
     * @memberof ModelFile
     */
    parent?: string;
    /**
     * @type {Blob}
     * @memberof ModelFile
     */
    parentFile?: Blob;
    /**
     * @type {string}
     * @memberof ModelFile
     */
    path?: string;
    /**
     * @type {number}
     * @memberof ModelFile
     */
    totalSpace?: number;
    /**
     * @type {number}
     * @memberof ModelFile
     */
    usableSpace?: number;
}
