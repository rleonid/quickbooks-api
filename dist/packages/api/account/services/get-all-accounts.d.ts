import type { Account, AccountOptions, SearchResponse } from '../../../../types/types.js';
import { AccountAPI } from '../account-api.js';
/**
 * Get All Accounts
 * @param this - The Account API
 * @returns The Accounts
 */
export declare function getAllAccounts(this: AccountAPI, options?: AccountOptions): Promise<SearchResponse<Account>>;
