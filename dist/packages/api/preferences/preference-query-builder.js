import { BaseQueryBuilder } from '../common/base-query-builder';
/**
 * The Preference Query Builder
 */
export class PreferenceQueryBuilder extends BaseQueryBuilder {
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
}
