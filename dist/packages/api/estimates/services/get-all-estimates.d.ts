import type { Estimate, EstimateOptions, SearchResponse } from '../../../../types/types.js';
import { EstimateAPI } from '../estimate-api.js';
/**
 * Get All Estimates
 * @param this - The Estimate API
 * @returns The Estimates
 */
export declare function getAllEstimates(this: EstimateAPI, options?: EstimateOptions): Promise<SearchResponse<Estimate>>;
