import { PreferenceAPI } from '../preference-api';
import type { PreferenceQueryBuilder } from '../preference-query-builder';
import type { Preferences, SearchResponse } from '../../../../types/types';
/**
 * Raw Preference Query
 * @param this - The Preference API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawPreferenceQuery(this: PreferenceAPI, queryBuilder: PreferenceQueryBuilder): Promise<SearchResponse<Preferences>>;
