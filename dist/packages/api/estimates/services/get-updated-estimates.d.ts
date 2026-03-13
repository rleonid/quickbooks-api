import type { Estimate, EstimateOptions, SearchResponse } from '../../../../types/types';
import { EstimateAPI } from '../estimate-api';
/**
 * Get Updated Estimates
 * @param this - The Estimate API
 * @param lastUpdatedDate - The last updated date
 * @returns The Estimates
 */
export declare function getUpdatedEstimates(this: EstimateAPI, lastUpdatedDate: Date, options?: EstimateOptions): Promise<SearchResponse<Estimate>>;
