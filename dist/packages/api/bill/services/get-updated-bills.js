/**
 * Get Updated Bills
 * @param this - The Bill API
 * @param lastUpdatedDate - The last updated date
 * @returns The Bills
 */
export async function getUpdatedBills(lastUpdatedDate, options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Last Updated Date Filter
    queryBuilder.whereLastUpdatedAfter(lastUpdatedDate);
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
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
    // Return the Bills
    return searchResponse;
}
