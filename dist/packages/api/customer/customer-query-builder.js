// Imports
import { CustomerFilters } from '../../../types/types.js';
import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Invoice Query Builder
 */
export class CustomerQueryBuilder extends BaseQueryBuilder {
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint, baseQuery) {
        super(endpoint, baseQuery);
    }
    /**
     * Where Customer ID
     * @param customerId - The customer ID
     * @returns The Query Builder
     */
    whereCustomerId(customerId) {
        this.whereClauses.push(`${CustomerFilters.Id} = '${customerId}'`);
        return this;
    }
}
