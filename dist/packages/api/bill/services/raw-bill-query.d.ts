import { BillAPI } from '../bill-api';
import type { BillQueryBuilder } from '../bill-query-builder';
import type { Bill, SearchResponse } from '../../../../types/types';
/**
 * Raw Bill Query
 * @param this - The Bill API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawBillQuery(this: BillAPI, queryBuilder: BillQueryBuilder): Promise<SearchResponse<Bill>>;
