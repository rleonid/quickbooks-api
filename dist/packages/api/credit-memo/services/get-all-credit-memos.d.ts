import type { CreditMemo, CreditMemoOptions, SearchResponse } from '../../../../types/types.js';
import { CreditMemoAPI } from '../credit-memo-api.js';
/**
 * Get All CreditMemos
 * @param this - The CreditMemo API
 * @returns The CreditMemos
 */
export declare function getAllCreditMemos(this: CreditMemoAPI, options?: CreditMemoOptions): Promise<SearchResponse<CreditMemo>>;
