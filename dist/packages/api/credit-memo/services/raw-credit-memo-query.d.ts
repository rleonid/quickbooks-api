import { CreditMemoAPI } from '../credit-memo-api';
import type { CreditMemoQueryBuilder } from '../credit-memo-query-builder';
import type { CreditMemo, SearchResponse } from '../../../../types/types';
/**
 * Raw CreditMemo Query
 * @param this - The CreditMemo API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawCreditMemoQuery(this: CreditMemoAPI, queryBuilder: CreditMemoQueryBuilder): Promise<SearchResponse<CreditMemo>>;
