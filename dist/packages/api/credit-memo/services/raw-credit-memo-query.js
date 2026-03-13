/**
 * Raw CreditMemo Query
 * @param this - The CreditMemo API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawCreditMemoQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const creditmemos = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: creditmemos,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the CreditMemos
    return searchResponse;
}
