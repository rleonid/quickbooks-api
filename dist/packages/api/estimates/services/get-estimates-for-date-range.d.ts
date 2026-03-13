import { type Estimate, type EstimateOptions, type SearchResponse } from '../../../../types/types.js';
import { EstimateAPI } from '../estimate-api.js';
/**
 * Get Estimates for a Date Range
 * @param this - The Estimate API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Estimates
 */
export declare function getEstimatesForDateRange(this: EstimateAPI, startDate: Date, endDate: Date, options?: EstimateOptions): Promise<SearchResponse<Estimate>>;
