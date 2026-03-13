import { Estimate, type EstimateOptions } from '../../../../types/types.js';
import { EstimateAPI } from '../estimate-api.js';
/**
 * Get Estimate by ID
 * @param this - The Estimate API
 * @param id - The ID of the estimate
 * @returns The Estimate
 */
export declare function getEstimateById(this: EstimateAPI, id: string, options?: EstimateOptions): Promise<{
    estimate: Estimate | null;
    intuitTID: string;
}>;
