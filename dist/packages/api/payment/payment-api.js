// Imports
import { ApiClient } from '../api-client.js';
import { Environment, Query, QuickbooksError } from '../../../types/types.js';
import { Endpoints } from '../../../types/enums/endpoints.js';
import { PaymentQueryBuilder } from './payment-query-builder.js';
import path from 'path';
// Import the Services
import { getAllPayments } from './services/get-all-payments.js';
import { getPaymentById } from './services/get-payment-by-id.js';
import { getPaymentsForDateRange } from './services/get-payments-for-date-range.js';
import { getUpdatedPayments } from './services/get-updated-payments.js';
import { getPaymentsByDueDate } from './services/get-payment-by-due-date.js';
import { rawPaymentQuery } from './services/raw-payment-query.js';
/**
 * API Client
 */
export class PaymentAPI {
    apiClient;
    // The List of Payment Services
    getAllPayments = getAllPayments.bind(this);
    getPaymentById = getPaymentById.bind(this);
    getPaymentsForDateRange = getPaymentsForDateRange.bind(this);
    getUpdatedPayments = getUpdatedPayments.bind(this);
    getPaymentsByDueDate = getPaymentsByDueDate.bind(this);
    rawPaymentQuery = rawPaymentQuery.bind(this);
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
     * @returns The Payments
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Payments', errorDetails);
        }
        // Check if the Payment is Not set and if it is, set the Payment to an empty array
        if (!response.QueryResponse.Payment)
            response.QueryResponse.Payment = new Array();
        // Get the Payments
        const queryResponse = response.QueryResponse;
        // Return the Payments
        return queryResponse.Payment;
    }
    // Returns the Payment URL
    async getUrl() {
        // Setup the URL
        const url = new URL(await this.getCompanyEndpoint());
        // Set the Payment Endpoint
        url.pathname = path.join(url.pathname, 'payment');
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
        const queryBuilder = new PaymentQueryBuilder(companyEndpoint, Query.Payment);
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
        if (!result?.responseData || !result.responseData?.QueryResponse?.Payment)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.Payment.length < 1)
            return false;
        // Return True
        return true;
    }
}
