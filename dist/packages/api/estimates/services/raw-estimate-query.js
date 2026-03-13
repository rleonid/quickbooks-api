/**
 * Raw Estimate Query
 * @param this - The Estimate API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawEstimateQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
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
