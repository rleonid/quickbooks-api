import { Customer, type CustomerOptions, type SearchResponse } from '../../../../types/types.js';
import { CustomerAPI } from '../customer-api.js';
/**
 * Retrieves customers updated within a specified date range.
 *
 * This asynchronous function constructs a query to filter customers based on their last update timestamps,
 * applies optional search configurations, and retrieves customer data via a GET request. The response is
 * formatted into a structured search response containing the customers and a flag indicating if more pages of
 * results are available.
 *
 * @param startDate - The beginning of the date range for filtering customer updates.
 * @param endDate - The end of the date range for filtering customer updates.
 * @param options - Optional search configuration for additional filtering, pagination, or sorting.
 * @returns A promise that resolves to a search response with the filtered customers and pagination details.
 */
export declare function getCustomersForDateRange(this: CustomerAPI, startDate: Date, endDate: Date, options?: CustomerOptions): Promise<SearchResponse<Customer>>;
