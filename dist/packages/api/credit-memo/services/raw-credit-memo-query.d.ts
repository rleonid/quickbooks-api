import { CreditMemoAPI } from '../credit-memo-api.js';
import type { CreditMemoQueryBuilder } from '../credit-memo-query-builder.js';
import type { CreditMemo, SearchResponse } from '../../../../types/types.js';
/**
 * Raw CreditMemo Query
 * @param this - The CreditMemo API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawCreditMemoQuery(this: CreditMemoAPI, queryBuilder: CreditMemoQueryBuilder): Promise<SearchResponse<CreditMemo>>;
