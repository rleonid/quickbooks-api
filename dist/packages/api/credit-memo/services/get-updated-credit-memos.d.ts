import type { CreditMemo, CreditMemoOptions, SearchResponse } from '../../../../types/types.js';
import { CreditMemoAPI } from '../credit-memo-api.js';
/**
 * Get Updated CreditMemos
 * @param this - The CreditMemo API
 * @param lastUpdatedDate - The last updated date
 * @returns The CreditMemos
 */
export declare function getUpdatedCreditMemos(this: CreditMemoAPI, lastUpdatedDate: Date, options?: CreditMemoOptions): Promise<SearchResponse<CreditMemo>>;
