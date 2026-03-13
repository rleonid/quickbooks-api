/**
 * Get All CreditMemos
 * @param this - The CreditMemo API
 * @returns The CreditMemos
 */
export async function getAllCreditMemos(options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the CreditMemos
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
