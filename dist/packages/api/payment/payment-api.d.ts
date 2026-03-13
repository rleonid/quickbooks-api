import { ApiClient } from '../api-client';
import { type Payment } from '../../../types/types';
import { PaymentQueryBuilder } from './payment-query-builder';
/**
 * API Client
 */
export declare class PaymentAPI {
    protected readonly apiClient: ApiClient;
    readonly getAllPayments: (options?: import("../../../app").PaymentOptions | undefined) => Promise<import("../../../app").SearchResponse<Payment>>;
    readonly getPaymentById: (id: string, options?: import("../../../app").PaymentOptions | undefined) => Promise<{
        payment: Payment | null;
        intuitTID: string;
    }>;
    readonly getPaymentsForDateRange: (startDate: Date, endDate: Date, options?: import("../../../app").PaymentOptions | undefined) => Promise<import("../../../app").SearchResponse<Payment>>;
    readonly getUpdatedPayments: (lastUpdatedDate: Date, options?: import("../../../app").PaymentOptions | undefined) => Promise<import("../../../app").SearchResponse<Payment>>;
    readonly getPaymentsByDueDate: (dueDate: Date, options?: import("../../../app").PaymentOptions | undefined) => Promise<import("../../../app").SearchResponse<Payment>>;
    readonly rawPaymentQuery: (queryBuilder: PaymentQueryBuilder) => Promise<import("../../../app").SearchResponse<Payment>>;
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
     * @returns The Payments
     */
    protected formatResponse(response: any): Promise<Array<Payment>>;
    getUrl(): Promise<URL>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<PaymentQueryBuilder>;
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    protected hasNextPage(queryBuilder: PaymentQueryBuilder): Promise<boolean>;
}
