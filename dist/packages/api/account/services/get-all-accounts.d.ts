import type { Account, AccountOptions, SearchResponse } from '../../../../types/types';
import { AccountAPI } from '../account-api';
/**
 * Get All Accounts
 * @param this - The Account API
 * @returns The Accounts
 */
export declare function getAllAccounts(this: AccountAPI, options?: AccountOptions): Promise<SearchResponse<Account>>;
