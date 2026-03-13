import type { Account, AccountOptions, SearchResponse } from '../../../../types/types.js';
import { AccountAPI } from '../account-api.js';
/**
 * Get Updated Accounts
 * @param this - The Account API
 * @param lastUpdatedDate - The last updated date
 * @returns The Accounts
 */
export declare function getUpdatedAccounts(this: AccountAPI, lastUpdatedDate: Date, options?: AccountOptions): Promise<SearchResponse<Account>>;
