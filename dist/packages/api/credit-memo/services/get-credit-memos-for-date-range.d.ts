import { type CreditMemo, type CreditMemoOptions, type SearchResponse } from '../../../../types/types.js';
import { CreditMemoAPI } from '../credit-memo-api.js';
/**
 * Get CreditMemos for a Date Range
 * @param this - The CreditMemo API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The CreditMemos
 */
export declare function getCreditMemosForDateRange(this: CreditMemoAPI, startDate: Date, endDate: Date, options?: CreditMemoOptions): Promise<SearchResponse<CreditMemo>>;
