/**
 * Raw Account Query
 * @param this - The Account API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawAccountQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
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
