// Imports
import { ApiClient } from '../api-client.js';
import { Environment, Query, QuickbooksError } from '../../../types/types.js';
import { Endpoints } from '../../../types/enums/endpoints.js';
import { CustomerQueryBuilder } from './customer-query-builder.js';
// Import the Services
import { getAllCustomers } from './services/get-all-customers.js';
import { getCustomerById } from './services/get-customer-by-id.js';
import { getCustomersForDateRange } from './services/get-customers-for-date-range.js';
import { getUpdatedCustomers } from './services/get-updated-customers.js';
import { rawCustomerQuery } from './services/raw-customer-query.js';
import path from 'path';
/**
 * API Client
 */
export class CustomerAPI {
    apiClient;
    // The List of Customer Services
    getAllCustomers = getAllCustomers.bind(this);
    getCustomerById = getCustomerById.bind(this);
    getCustomersForDateRange = getCustomersForDateRange.bind(this);
    getUpdatedCustomers = getUpdatedCustomers.bind(this);
    rawCustomerQuery = rawCustomerQuery.bind(this);
    /**
     * Constructor

     * @param apiClient - The API Client
     */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * Get the Company Endpoint
     * @returns The Company Endpoint with the attached token realmId
     */
    async getCompanyEndpoint() {
        // Get the Base Endpoint
        const baseEndpoint = this.apiClient.environment === Environment.Production ? Endpoints.ProductionCompanyApi : Endpoints.SandboxCompanyApi;
        // Get the Token
        const token = await this.apiClient.authProvider.getToken();
        // Return the Company Endpoint
        return `${baseEndpoint}/${token.realmId}`;
    }
    /**
     * Format the Response
     * @param response - The Response
     * @returns The Customers
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Customers', errorDetails);
        }
        // Check if the Customer is Not set and if it is, set the Customer to an empty array
        if (!response.QueryResponse.Customer)
            response.QueryResponse.Customer = new Array();
        // Get the Customers
        const queryResponse = response.QueryResponse;
        // Return the Customers
        return queryResponse.Customer;
    }
    // Returns the Customer URL
    async getUrl() {
        // Setup the URL
        const url = new URL(await this.getCompanyEndpoint());
        // Set the Customer Endpoint
        url.pathname = path.join(url.pathname, 'customer');
        // Return the URL
        return url;
    }
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    async getQueryBuilder() {
        // Get the Company Endpoint
        const companyEndpoint = await this.getCompanyEndpoint();
        // Setup the New Query Builder
        const queryBuilder = new CustomerQueryBuilder(companyEndpoint, Query.Customer);
        // Return the Query Builder
        return queryBuilder;
    }
    /**
     * Checks if there is a next page
     * @param queryBuilder - The Query Builder
     * @returns {boolean} True if there is a next page, false otherwise
     */
    async hasNextPage(queryBuilder) {
        // Check if the Auto Check Next Page is Disabled
        if (!this.apiClient.autoCheckNextPage)
            return false;
        // Get the Page Number
        const page = (queryBuilder.searchOptions.page || 1) + 1;
        // Update the Page Number
        queryBuilder.searchOptions.page = page;
        // Get the URL
        const url = queryBuilder.build();
        // Run the Request
        const result = await this.apiClient.runRequest(url, { method: 'GET' }).catch((error) => {
            // Log the error
            console.error(`Failed to check if there is a next page: ${error}`);
            return null;
        });
        // Check if the Response is invalid
        if (!result?.responseData || !result.responseData?.QueryResponse?.Customer)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.Customer.length < 1)
            return false;
        // Return True
        return true;
    }
}
