// Import the Query Builder
import { QuickbooksError } from '../../../../types/types';
import { ApiClient } from '../../api-client';
/**
 * Get Accounts for a Date Range
 * @param this - The Account API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Accounts
 */
export async function getAccountsForDateRange(startDate, endDate, options = {}) {
    // Ensure the Start Date is Before the End Date
    if (startDate > endDate)
        throw new QuickbooksError('Start date must be before end date', await ApiClient.getIntuitErrorDetails(null));
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Date Range Filters
    queryBuilder.whereLastUpdatedAfter(startDate);
    queryBuilder.whereLastUpdatedBefore(endDate);
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
