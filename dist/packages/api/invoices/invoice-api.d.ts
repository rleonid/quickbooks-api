import { ApiClient } from '../api-client.js';
import { type Invoice } from '../../../types/types.js';
import { InvoiceQueryBuilder } from './invoice-query-builder.js';
/**
 * API Client
 */
export declare class InvoiceAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllInvoices: (options?: import("../../../app.js").InvoiceOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Invoice>>;
    readonly getInvoiceById: (id: string, options?: import("../../../app.js").InvoiceOptions | undefined) => Promise<{
        invoice: Invoice | null;
        intuitTID: string;
    }>;
    readonly getInvoicesForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app.js").InvoiceOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Invoice>>;
    readonly getUpdatedInvoices: (lastUpdatedDate: Date, options?: import("../../../app.js").InvoiceOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Invoice>>;
    readonly getInvoicesByDueDate: (dueDate: Date, options?: import("../../../app.js").InvoiceOptions | undefined) => Promise<import("../../../app.js").SearchResponse<Invoice>>;
    readonly rawInvoiceQuery: (queryBuilder: InvoiceQueryBuilder) => Promise<import("../../../app.js").SearchResponse<Invoice>>;
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
    getUrl(): Promise<URL>;
    /**
     * Format the Response
     * @param response - The Response
     * @returns The Invoices
     */
    protected formatResponse(response: any): Promise<Array<Invoice>>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<InvoiceQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: InvoiceQueryBuilder): Promise<boolean>;
}
