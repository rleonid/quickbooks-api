/**
 * Raw RecurringTransaction Query
 * @param this - The RecurringTransaction API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export async function rawRecurringTransactionQuery(queryBuilder) {
    // Build the URL
    const url = queryBuilder.build();
    // Execute the custom query
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const recurringTransactions = await this.formatResponse(responseData);
    // Setup the Search Response
    const searchResponse = {
        results: recurringTransactions,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the RecurringTransactions
    return searchResponse;
}
