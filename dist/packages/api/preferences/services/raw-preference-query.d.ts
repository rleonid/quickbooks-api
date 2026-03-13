import { PreferenceAPI } from '../preference-api.js';
import type { PreferenceQueryBuilder } from '../preference-query-builder.js';
import type { Preferences, SearchResponse } from '../../../../types/types.js';
/**
 * Raw Preference Query
 * @param this - The Preference API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawPreferenceQuery(this: PreferenceAPI, queryBuilder: PreferenceQueryBuilder): Promise<SearchResponse<Preferences>>;
