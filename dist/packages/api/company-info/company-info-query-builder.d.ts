import type { CompanyInfo, Query } from '../../../types/types.js';
import { BaseQueryBuilder } from '../common/base-query-builder.js';
/**
 * The Company Info Query Builder
 */
export declare class CompanyInfoQueryBuilder extends BaseQueryBuilder<CompanyInfo> {
    /**
     * Constructor
     * @param endpoint - The Endpoint
     * @param baseQuery - The Base Query
     */
    constructor(endpoint: string, baseQuery: Query);
}
