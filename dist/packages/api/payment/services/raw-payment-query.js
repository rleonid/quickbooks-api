/**
 * Raw Payment Query
 * @param this - The Payment API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawPaymentQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const payments = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: payments,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Payments
    return searchResponse;
}
