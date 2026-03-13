import { Customer, type CustomerOptions, type SearchResponse } from '../../../../types/types.js';
import { CustomerAPI } from '../customer-api.js';
/**
 * Retrieves all customers filtered by the provided search options.
 *
 * This function initializes a query builder, applies the specified search options, constructs the API request URL, and performs a GET request to fetch customer data. It then formats the response and returns a search response object containing the customer results and a flag indicating whether more pages are available.
 *
 * @param options - Optional search criteria and configurations for retrieving customers.
 * @returns A promise that resolves to a search response with customer data and pagination details.
 */
export declare function getAllCustomers(this: CustomerAPI, options?: CustomerOptions): Promise<SearchResponse<Customer>>;
