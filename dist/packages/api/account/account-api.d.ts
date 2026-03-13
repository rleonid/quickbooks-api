import { ApiClient } from '../api-client';
import { type Account } from '../../../types/types';
import { AccountQueryBuilder } from './account-query-builder';
/**
 * API Client
 */
export declare class AccountAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllAccounts: (options?: import("../../../app").AccountOptions | undefined) => Promise<import("../../../app").SearchResponse<Account>>;
    readonly getAccountById: (id: string, options?: import("../../../app").AccountOptions | undefined) => Promise<{
        account: Account | null;
        intuitTID: string;
    }>;
    readonly getAccountsCreatedForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").AccountOptions | undefined) => Promise<import("../../../app").SearchResponse<Account>>;
    readonly getAccountsForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").AccountOptions | undefined) => Promise<import("../../../app").SearchResponse<Account>>;
    readonly getUpdatedAccounts: (lastUpdatedDate: Date, options?: import("../../../app").AccountOptions | undefined) => Promise<import("../../../app").SearchResponse<Account>>;
    readonly rawAccountQuery: (queryBuilder: AccountQueryBuilder) => Promise<import("../../../app").SearchResponse<Account>>;
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
     * @returns The Accounts
     */
    protected formatResponse(response: any): Promise<Array<Account>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<AccountQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: AccountQueryBuilder): Promise<boolean>;
}
