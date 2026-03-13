import { EstimateAPI } from '../estimate-api.js';
import type { EstimateQueryBuilder } from '../estimate-query-builder.js';
import type { Estimate, SearchResponse } from '../../../../types/types.js';
/**
 * Raw Estimate Query
 * @param this - The Estimate API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawEstimateQuery(this: EstimateAPI, queryBuilder: EstimateQueryBuilder): Promise<SearchResponse<Estimate>>;
