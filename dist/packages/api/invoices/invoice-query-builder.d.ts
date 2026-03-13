import { type Invoice, type Query } from '../../../types/types';
import { BaseQueryBuilder } from '../common/base-query-builder';
/**
 * The Invoice Query Builder
 */
export declare class InvoiceQueryBuilder extends BaseQueryBuilder<Invoice> {
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint: string, baseQuery: Query);
    /**
     * Where Due Date
     * @param date - The due date
     * @returns The Query Builder
     */
    whereDueDate(date: Date): this;
    /**
     * Where Customer ID
     * @param customerId - The customer ID
     * @returns The Query Builder
     */
    whereCustomerId(customerId: string): this;
    /**
     * Where Status
     * @param status - The status
     * @returns The Query Builder
     */
    whereStatus(status: 'paid' | 'unpaid'): this;
}
