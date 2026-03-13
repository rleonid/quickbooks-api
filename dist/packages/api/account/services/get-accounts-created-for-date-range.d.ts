import { type Account, type AccountOptions, type SearchResponse } from '../../../../types/types.js';
import { AccountAPI } from '../account-api.js';
/**
 * Get Accounts created for a Date Range
 * @param this - The Account API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Accounts
 */
export declare function getAccountsCreatedForDateRange(this: AccountAPI, startDate: Date, endDate: Date, options?: AccountOptions): Promise<SearchResponse<Account>>;
