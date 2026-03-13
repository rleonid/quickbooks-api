import { ApiClient } from '../api-client';
import { type Preferences } from '../../../types/types';
import { PreferenceQueryBuilder } from './preference-query-builder';
/**
 * API Client
 */
export declare class PreferenceAPI {
    protected readonly apiClient: ApiClient;
    readonly getPreferences: (options?: import("../../../app").PreferenceOptions | undefined) => Promise<import("../../../app").SearchResponse<Preferences>>;
    readonly rawPreferenceQuery: (queryBuilder: PreferenceQueryBuilder) => Promise<import("../../../app").SearchResponse<Preferences>>;
    /**
     * Constructor

     * @param apiClient - The API Client
     */
    constructor(apiClient: ApiClient);
    /**
     * Get the Company Endpoint
     * @returns The Company Endpoint with the attached token realmId
     */
    protected getCompanyEndpoint(): Promise<string>;
    /**
     * Format the Response
     * @param response - The Response
     * @returns The Preferences
     */
    protected formatResponse(response: any): Promise<Array<Preferences>>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<PreferenceQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: PreferenceQueryBuilder): Promise<boolean>;
}
