/**
 * Raw Bill Query
 * @param this - The Bill API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawBillQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const bills = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: bills,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Bills
    return searchResponse;
}
