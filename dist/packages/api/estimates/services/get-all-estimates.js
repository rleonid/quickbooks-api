/**
 * Get All Estimates
 * @param this - The Estimate API
 * @returns The Estimates
 */
export async function getAllEstimates(options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the Estimates
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const estimates = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: estimates,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Estimates
    return searchResponse;
}
