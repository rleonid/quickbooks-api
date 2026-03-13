import { Preferences, type PreferenceOptions, type SearchResponse } from '../../../../types/types';
import { PreferenceAPI } from '../preference-api';
/**
 * Get All Preferences
 * @param this - The Preference API
 * @returns The Preferences
 */
export declare function getPreferences(this: PreferenceAPI, options?: PreferenceOptions): Promise<SearchResponse<Preferences>>;
