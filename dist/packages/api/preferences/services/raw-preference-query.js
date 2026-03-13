/**
 * Raw Preference Query
 * @param this - The Preference API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawPreferenceQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const preferences = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: preferences,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Preferences
    return searchResponse;
}
