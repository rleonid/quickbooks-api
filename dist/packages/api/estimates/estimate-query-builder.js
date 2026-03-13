import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Estimate Query Builder
 */
export class EstimateQueryBuilder extends BaseQueryBuilder {
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
        this.whereClauses.push(`CustomerRef = '${customerId}'`);
        return this;
    }
    /**
     * Where Transaction Date
     * @param date - The transaction date
     * @returns The Query Builder
     */
    whereTxnDate(date) {
        const whereProperty = 'TxnDate';
        this.whereClauses.push(`${whereProperty} = '${date.toISOString()}'`);
        return this;
    }
    /**
     * Where Accepted Date
     * @param date - The acceptance date
     * @returns The Query Builder
     */
    whereAcceptedDate(date) {
        const whereProperty = 'AcceptedDate';
        this.whereClauses.push(`${whereProperty} = '${date.toISOString()}'`);
        return this;
    }
    /**
     * Where Expiration Date
     * @param date - The expiration date
     * @returns The Query Builder
     */
    whereExpirationDate(date) {
        const whereProperty = 'ExpirationDate';
        this.whereClauses.push(`${whereProperty} = '${date.toISOString()}'`);
        return this;
    }
}
