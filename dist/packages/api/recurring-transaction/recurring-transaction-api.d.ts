import { ApiClient } from '../api-client.js';
import { type RecurringTransaction } from '../../../types/types.js';
import { RecurringTransactionQueryBuilder } from './recurring-transaction-query-builder.js';
/**
 * RecurringTransaction API Client
 */
export declare class RecurringTransactionAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllRecurringTransactions: (options?: import("../../../app.js").RecurringTransactionOptions | undefined) => Promise<import("../../../app.js").SearchResponse<RecurringTransaction>>;
    readonly getRecurringTransactionById: (id: string) => Promise<{
        recurringTransaction: RecurringTransaction | null;
        intuitTID: string;
    }>;
    readonly getUpdatedRecurringTransactions: (lastUpdatedDate: Date, options?: import("../../../app.js").RecurringTransactionOptions | undefined) => Promise<import("../../../app.js").SearchResponse<RecurringTransaction>>;
    readonly rawRecurringTransactionQuery: (queryBuilder: RecurringTransactionQueryBuilder) => Promise<import("../../../app.js").SearchResponse<RecurringTransaction>>;
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
     * @returns The RecurringTransactions
     */
    protected formatResponse(response: any): Promise<Array<RecurringTransaction>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<RecurringTransactionQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns True if there is a next page
     */
    protected hasNextPage(queryBuilder: RecurringTransactionQueryBuilder): Promise<boolean>;
}
