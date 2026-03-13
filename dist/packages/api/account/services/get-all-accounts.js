/**
 * Get All Accounts
 * @param this - The Account API
 * @returns The Accounts
 */
export async function getAllAccounts(options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the Accounts
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const accounts = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: accounts,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Accounts
    return searchResponse;
}
