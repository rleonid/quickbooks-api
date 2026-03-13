import type { Query, Estimate } from '../../../types/types';
import { BaseQueryBuilder } from '../common/base-query-builder';
/**
 * The Estimate Query Builder
 */
export declare class EstimateQueryBuilder extends BaseQueryBuilder<Estimate> {
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint: string, baseQuery: Query);
    /**
     * Where Customer ID
     * @param customerId - The customer ID
     * @returns The Query Builder
     */
    whereCustomerId(customerId: string): this;
    /**
     * Where Transaction Date
     * @param date - The transaction date
     * @returns The Query Builder
     */
    whereTxnDate(date: Date): this;
    /**
     * Where Accepted Date
     * @param date - The acceptance date
     * @returns The Query Builder
     */
    whereAcceptedDate(date: Date): this;
    /**
     * Where Expiration Date
     * @param date - The expiration date
     * @returns The Query Builder
     */
    whereExpirationDate(date: Date): this;
}
