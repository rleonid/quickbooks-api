import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Payment Query Builder
 */
export class PaymentQueryBuilder extends BaseQueryBuilder {
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint, baseQuery) {
        super(endpoint, baseQuery);
    }
    /**
     * Where Due Date
     * @param date - The due date
     * @returns The Query Builder
     */
    whereDueDate(date) {
        this.whereClauses.push(`DueDate = '${date.toISOString()}'`);
        return this;
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
}
