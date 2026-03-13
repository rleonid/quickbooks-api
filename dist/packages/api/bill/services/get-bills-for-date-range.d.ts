import { type Bill, type BillOptions, type SearchResponse } from '../../../../types/types.js';
import { BillAPI } from '../bill-api.js';
/**
 * Get Bills for a Date Range
 * @param this - The Bill API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Bills
 */
export declare function getBillsForDateRange(this: BillAPI, startDate: Date, endDate: Date, options?: BillOptions): Promise<SearchResponse<Bill>>;
