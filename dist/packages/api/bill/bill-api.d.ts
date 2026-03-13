import { ApiClient } from '../api-client';
import { type Bill } from '../../../types/types';
import { BillQueryBuilder } from './bill-query-builder';
/**
 * Bill API Client
 */
export declare class BillAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllBills: (options?: import("../../../app").BillOptions | undefined) => Promise<import("../../../app").SearchResponse<Bill>>;
    readonly getBillById: (id: string) => Promise<{
        bill: Bill | null;
        intuitTID: string;
    }>;
    readonly getBillsForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").BillOptions | undefined) => Promise<import("../../../app").SearchResponse<Bill>>;
    readonly getUpdatedBills: (lastUpdatedDate: Date, options?: import("../../../app").BillOptions | undefined) => Promise<import("../../../app").SearchResponse<Bill>>;
    readonly rawBillQuery: (queryBuilder: BillQueryBuilder) => Promise<import("../../../app").SearchResponse<Bill>>;
    /**
     * Constructor
     * @param apiClient - The API Client
     */
    constructor(apiClient: ApiClient);
    /**
     * Get the Company Endpoint
     * @returns The Company Endpoint
     */
    protected getCompanyEndpoint(): Promise<string>;
    /**
     * Format the Response
     * @param response - The Response
     * @returns The Bills
     */
    protected formatResponse(response: any): Promise<Array<Bill>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<BillQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns True if there is a next page
     */
    protected hasNextPage(queryBuilder: BillQueryBuilder): Promise<boolean>;
}
