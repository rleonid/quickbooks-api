import type { Bill, BillOptions, SearchResponse } from '../../../../types/types.js';
import { BillAPI } from '../bill-api.js';
/**
 * Get All Bills
 * @param this - The Bill API
 * @param options - The options
 * @returns The Bills
 */
export declare function getAllBills(this: BillAPI, options?: BillOptions): Promise<SearchResponse<Bill>>;
