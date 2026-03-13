import type { Preferences, Query } from '../../../types/types';
import { BaseQueryBuilder } from '../common/base-query-builder';
/**
 * The Preference Query Builder
 */
export declare class PreferenceQueryBuilder extends BaseQueryBuilder<Preferences> {
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
