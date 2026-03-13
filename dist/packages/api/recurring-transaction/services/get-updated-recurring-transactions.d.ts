import type { RecurringTransaction, RecurringTransactionOptions, SearchResponse } from '../../../../types/types';
import { RecurringTransactionAPI } from '../recurring-transaction-api';
/**
 * Get Updated RecurringTransactions
 * @param this - The RecurringTransaction API
 * @param lastUpdatedDate - The last updated date
 * @returns The RecurringTransactions
 */
export declare function getUpdatedRecurringTransactions(this: RecurringTransactionAPI, lastUpdatedDate: Date, options?: RecurringTransactionOptions): Promise<SearchResponse<RecurringTransaction>>;
