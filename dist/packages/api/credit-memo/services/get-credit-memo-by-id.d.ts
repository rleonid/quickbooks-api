import { CreditMemo, type CreditMemoOptions } from '../../../../types/types.js';
import { CreditMemoAPI } from '../credit-memo-api.js';
/**
 * Get CreditMemo by ID
 * @param this - The CreditMemo API
 * @param id - The ID of the creditmemo
 * @returns The CreditMemo
 */
export declare function getCreditMemoById(this: CreditMemoAPI, id: string, options?: CreditMemoOptions): Promise<{
    creditMemo: CreditMemo | null;
    intuitTID: string;
}>;
