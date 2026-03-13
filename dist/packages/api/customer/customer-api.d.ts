import { ApiClient } from '../api-client';
import { type Customer } from '../../../types/types';
import { CustomerQueryBuilder } from './customer-query-builder';
/**
 * API Client
 */
export declare class CustomerAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllCustomers: (options?: import("../../../app").CustomerOptions | undefined) => Promise<import("../../../app").SearchResponse<Customer>>;
    readonly getCustomerById: (id: string, options?: import("../../../app").CustomerOptions | undefined) => Promise<{
        customer: Customer | null;
        intuitTID: string;
    }>;
    readonly getCustomersForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").CustomerOptions | undefined) => Promise<import("../../../app").SearchResponse<Customer>>;
    readonly getUpdatedCustomers: (lastUpdatedDate: Date, options?: import("../../../app").CustomerOptions | undefined) => Promise<import("../../../app").SearchResponse<Customer>>;
    readonly rawCustomerQuery: (queryBuilder: CustomerQueryBuilder) => Promise<import("../../../app").SearchResponse<Customer>>;
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
     * @returns The Customers
     */
    protected formatResponse(response: any): Promise<Array<Customer>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<CustomerQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: CustomerQueryBuilder): Promise<boolean>;
}
