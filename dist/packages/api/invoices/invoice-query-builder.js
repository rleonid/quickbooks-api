// Imports
import { InvoiceFilters } from '../../../types/types.js';
import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Invoice Query Builder
 */
export class InvoiceQueryBuilder extends BaseQueryBuilder {
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
        this.whereClauses.push(`${InvoiceFilters.DueDate} = '${date.toISOString()}'`);
        return this;
    }
    /**
     * Where Customer ID
     * @param customerId - The customer ID
     * @returns The Query Builder
     */
    whereCustomerId(customerId) {
        this.whereClauses.push(`${InvoiceFilters.CustomerRef} = '${customerId}'`);
        return this;
    }
    /**
     * Where Status
     * @param status - The status
     * @returns The Query Builder
     */
    whereStatus(status) {
        // Setup the Operator
        const operator = status === 'paid' ? '=' : '>';
        // Add the Where Clause
        this.whereClauses.push(`${InvoiceFilters.Balance} ${operator} '0'`);
        // Return the Query Builder
        return this;
    }
}
