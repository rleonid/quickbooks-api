/**
 * Get All Bills
 * @param this - The Bill API
 * @param options - The options
 * @returns The Bills
 */
export async function getAllBills(options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Search Options
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Build the URL
    const url = queryBuilder.build();
    // Get the Bills
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const bills = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: bills,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Search Response
    return searchResponse;
}
