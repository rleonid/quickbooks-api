import { Account, type AccountOptions } from '../../../../types/types.js';
import { AccountAPI } from '../account-api.js';
/**
 * Get Account by ID
 * @param this - The Account API
 * @param id - The ID of the account
 * @returns The Account
 */
export declare function getAccountById(this: AccountAPI, id: string, options?: AccountOptions): Promise<{
    account: Account | null;
    intuitTID: string;
}>;
