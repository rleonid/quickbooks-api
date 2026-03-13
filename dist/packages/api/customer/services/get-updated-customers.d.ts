import { Customer, type CustomerOptions, type SearchResponse } from '../../../../types/types.js';
import { CustomerAPI } from '../customer-api.js';
/**
 * Retrieves updated customer records modified after the specified cutoff date.
 *
 * This function constructs a query to filter customers updated after the given date, applies
 * any provided search options, builds the request URL, and executes a GET request to fetch the data.
 * The API response is then formatted into a search response object containing the list of customers
 * and a flag indicating whether additional pages of results are available.
 *
 * @param lastUpdatedDate - The cutoff date; only customers updated after this date are returned.
 * @param options - Optional search parameters to refine the query.
 * @returns A promise that resolves to a search response with the updated customer records and pagination information.
 */
export declare function getUpdatedCustomers(this: CustomerAPI, lastUpdatedDate: Date, options?: CustomerOptions): Promise<SearchResponse<Customer>>;
