import { type CustomerOptions, Customer } from '../../../../types/types';
import { CustomerAPI } from '../customer-api';
/**
 * Retrieves a customer by their ID from the Customer API.
 *
 * This asynchronous function constructs a query using the customer ID and optional search
 * configurations to build the request URL. It sends a GET request, formats the response, and
 * returns the first matching customer. If no customer is found, it throws an error.
 *
 * @param id - The unique identifier of the customer.
 * @param options - Optional search configurations to refine the query.
 *
 * @returns A Promise that resolves to the retrieved customer.
 *
 * @throws {Error} If no customer is found for the provided ID.
 */
export declare function getCustomerById(this: CustomerAPI, id: string, options?: CustomerOptions): Promise<{
    customer: Customer | null;
    intuitTID: string;
}>;
