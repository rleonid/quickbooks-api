import { ApiClient } from '../api-client.js';
import { type Estimate } from '../../../types/types.js';
import { EstimateQueryBuilder } from './estimate-query-builder.js';
/**
 * API Client
 */
export declare class EstimateAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllEstimates: (options?: import("../../../app.js").EstimateOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Estimate>>;
    readonly getEstimateById: (id: string, options?: import("../../../app.js").EstimateOptions | undefined) => Promise<{
        estimate: Estimate | null;
        intuitTID: string;
    }>;
    readonly getEstimatesForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app.js").EstimateOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Estimate>>;
    readonly getUpdatedEstimates: (lastUpdatedDate: Date, options?: import("../../../app.js").EstimateOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Estimate>>;
    readonly rawEstimateQuery: (queryBuilder: EstimateQueryBuilder) => Promise<import("../../../app.js").SearchResponse<Estimate>>;
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
     * @returns The Estimates
     */
    protected formatResponse(response: any): Promise<Array<Estimate>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder

     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<EstimateQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: EstimateQueryBuilder): Promise<boolean>;
}
