import { AccountAPI } from '../account-api';
import type { AccountQueryBuilder } from '../account-query-builder';
import type { Account, SearchResponse } from '../../../../types/types';
/**
 * Raw Account Query
 * @param this - The Account API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawAccountQuery(this: AccountAPI, queryBuilder: AccountQueryBuilder): Promise<SearchResponse<Account>>;
