import { type Customer, type Query } from '../../../types/types.js';
import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Invoice Query Builder
 */
export declare class CustomerQueryBuilder extends BaseQueryBuilder<Customer> {
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
}
