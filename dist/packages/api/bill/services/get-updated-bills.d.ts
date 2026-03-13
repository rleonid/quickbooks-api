import type { Bill, BillOptions, SearchResponse } from '../../../../types/types';
import { BillAPI } from '../bill-api';
/**
 * Get Updated Bills
 * @param this - The Bill API
 * @param lastUpdatedDate - The last updated date
 * @returns The Bills
 */
export declare function getUpdatedBills(this: BillAPI, lastUpdatedDate: Date, options?: BillOptions): Promise<SearchResponse<Bill>>;
