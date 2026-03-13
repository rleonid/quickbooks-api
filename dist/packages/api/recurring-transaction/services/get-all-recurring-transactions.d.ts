import type { RecurringTransaction, RecurringTransactionOptions, SearchResponse } from '../../../../types/types';
import { RecurringTransactionAPI } from '../recurring-transaction-api';
/**
 * Get All RecurringTransactions
 * @param this - The RecurringTransaction API
 * @param options - The options
 * @returns The RecurringTransactions
 */
export declare function getAllRecurringTransactions(this: RecurringTransactionAPI, options?: RecurringTransactionOptions): Promise<SearchResponse<RecurringTransaction>>;
