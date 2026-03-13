import { ApiClient } from '../api-client';
import { type CreditMemo } from '../../../types/types';
import { CreditMemoQueryBuilder } from './credit-memo-query-builder';
/**
 * API Client
 */
export declare class CreditMemoAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllCreditMemos: (options?: import("../../../app").CreditMemoOptions | undefined) => Promise<import("../../../app").SearchResponse<CreditMemo>>;
    readonly getCreditMemoById: (id: string, options?: import("../../../app").CreditMemoOptions | undefined) => Promise<{
        creditMemo: CreditMemo | null;
        intuitTID: string;
    }>;
    readonly getCreditMemosForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").CreditMemoOptions | undefined) => Promise<import("../../../app").SearchResponse<CreditMemo>>;
    readonly getUpdatedCreditMemos: (lastUpdatedDate: Date, options?: import("../../../app").CreditMemoOptions | undefined) => Promise<import("../../../app").SearchResponse<CreditMemo>>;
    readonly rawCreditMemoQuery: (queryBuilder: CreditMemoQueryBuilder) => Promise<import("../../../app").SearchResponse<CreditMemo>>;
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
     * @returns The CreditMemos
     */
    protected formatResponse(response: any): Promise<Array<CreditMemo>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<CreditMemoQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: CreditMemoQueryBuilder): Promise<boolean>;
}
