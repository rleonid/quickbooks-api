// Import the Query Builder
import { plainToClass } from 'class-transformer';
import { Payment } from '../../../../types/types';
/**
 * Get Payment by ID
 * @param this - The Payment API
 * @param id - The ID of the payment
 * @returns The Payment
 */
export async function getPaymentById(id, options = {}) {
    // Get the Query Builder
    const queryBuilder = await this.getQueryBuilder();
    // Setup ID Filter
    queryBuilder.whereId(id);
    // Setup the Search Options (if provided)
    if (options.searchOptions)
        queryBuilder.setSearchOptions(options.searchOptions);
    // Setup the URL
    const url = queryBuilder.build();
    // Get the Payment
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Check if the Response Failed to find an Payment
    if (!responseData)
        return { payment: null, intuitTID };
    // Format the Response
    const payments = await this.formatResponse(responseData);
    // Convert the Payment to a Class
    const payment = payments[0] ? plainToClass(Payment, payments[0]) : null;
    // Check if the Payment is valid and set the API Client
    if (payment)
        payment.setApiClient(this.apiClient);
    // Return the Payment with Intuit TID
    return {
        payment,
        intuitTID,
    };
}
