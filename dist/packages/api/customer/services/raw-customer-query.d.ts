import { CustomerAPI } from '../customer-api.js';
import type { CustomerQueryBuilder } from '../customer-query-builder.js';
import { Customer, type SearchResponse } from '../../../../types/types.js';
/**
 * Executes a custom customer query using the specified query builder.
 *
 * This function builds a query URL from the provided query builder, sends a GET request via the API client,
 * formats the response into customer data, and returns a SearchResponse object. The response includes both
 * the list of customers and a flag indicating whether additional pages of results are available.
 *
 * @param queryBuilder - The query builder used to generate the request URL.
 * @returns A promise that resolves to a SearchResponse containing customer data and pagination information.
 */
export declare function rawCustomerQuery(this: CustomerAPI, queryBuilder: CustomerQueryBuilder): Promise<SearchResponse<Customer>>;
