import { Preferences, type PreferenceOptions, type SearchResponse } from '../../../../types/types.js';
import { PreferenceAPI } from '../preference-api.js';
/**
 * Get All Preferences
 * @param this - The Preference API
 * @returns The Preferences
 */
export declare function getPreferences(this: PreferenceAPI, options?: PreferenceOptions): Promise<SearchResponse<Preferences>>;
