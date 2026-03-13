import type { CreditMemo, CreditMemoOptions, SearchResponse } from '../../../../types/types';
import { CreditMemoAPI } from '../credit-memo-api';
/**
 * Get All CreditMemos
 * @param this - The CreditMemo API
 * @returns The CreditMemos
 */
export declare function getAllCreditMemos(this: CreditMemoAPI, options?: CreditMemoOptions): Promise<SearchResponse<CreditMemo>>;
