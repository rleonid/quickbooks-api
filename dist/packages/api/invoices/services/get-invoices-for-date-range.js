// Import the Query Builder
import { plainToClass } from 'class-transformer';
import { Invoice, QuickbooksError } from '../../../../types/types.js';
import { ApiClient } from '../../api-client.js';
/**
 * Get Invoices for a Date Range
 * @param this - The Invoice API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Invoices
 */
export async function getInvoicesForDateRange(startDate, endDate, options = {}) {
    // Ensure the Start Date is Before the End Date
    if (startDate > endDate)
        throw new QuickbooksError('Start date must be before end date', await ApiClient.getIntuitErrorDetails(null));
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup the Date Range Filters
    queryBuilder.whereLastUpdatedAfter(startDate);
    queryBuilder.whereLastUpdatedBefore(endDate);
    // Filter by Status (if provided)
    if (options.status)
        queryBuilder.whereStatus(options.status);
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the Invoices
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const invoices = await this.formatResponse(responseData);
    // Map the Invoices to Classes
    const mappedInvoices = invoices.map((invoice) => plainToClass(Invoice, invoice));
    // Setup the Search Response
    const searchResponse = {
        results: mappedInvoices,
        hasNextPage: await this.hasNextPage(queryBuilder),
        intuitTID,
    };
    // Return the Invoices
    return searchResponse;
}
