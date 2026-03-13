import { RecurringTransactionAPI } from '../recurring-transaction-api';
import type { RecurringTransactionQueryBuilder } from '../recurring-transaction-query-builder';
import type { RecurringTransaction, SearchResponse } from '../../../../types/types';
/**
 * Raw RecurringTransaction Query
 * @param this - The RecurringTransaction API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawRecurringTransactionQuery(this: RecurringTransactionAPI, queryBuilder: RecurringTransactionQueryBuilder): Promise<SearchResponse<RecurringTransaction>>;
