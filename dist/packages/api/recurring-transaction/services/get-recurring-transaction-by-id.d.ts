import { RecurringTransaction } from '../../../../types/types.js';
import { RecurringTransactionAPI } from '../recurring-transaction-api.js';
/**
 * Get RecurringTransaction by ID
 * @param this - The RecurringTransaction API
 * @param id - The ID of the recurring transaction
 * @returns The RecurringTransaction
 */
export declare function getRecurringTransactionById(this: RecurringTransactionAPI, id: string): Promise<{
    recurringTransaction: RecurringTransaction | null;
    intuitTID: string;
}>;
