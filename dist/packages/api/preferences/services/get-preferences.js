// Imports
import { plainToClass } from 'class-transformer';
import { Preferences } from '../../../../types/types';
/**
 * Get All Preferences
 * @param this - The Preference API
 * @returns The Preferences
 */
export async function getPreferences(options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the Preferences
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const preferencesData = await this.formatResponse(responseData);
    // Convert the Preferences to Classes
    const preferences = preferencesData.map((pref) => {
        const prefClass = plainToClass(Preferences, pref);
        prefClass.setApiClient(this.apiClient);
        return prefClass;
    });
    // Setup the Search Response
    const searchResponse = {
        results: preferences,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Preferences
    return searchResponse;
}
