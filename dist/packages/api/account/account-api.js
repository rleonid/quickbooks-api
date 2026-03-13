// Imports
import { ApiClient } from '../api-client.js';
import { Environment, Query, QuickbooksError } from '../../../types/types.js';
import { Endpoints } from '../../../types/enums/endpoints.js';
import { AccountQueryBuilder } from './account-query-builder.js';
import path from 'path';
// Import the Services
import { getAllAccounts } from './services/get-all-accounts.js';
import { getAccountById } from './services/get-account-by-id.js';
import { getAccountsForDateRange } from './services/get-accounts-for-date-range.js';
import { getAccountsCreatedForDateRange } from './services/get-accounts-created-for-date-range.js';
import { getUpdatedAccounts } from './services/get-updated-accounts.js';
import { rawAccountQuery } from './services/raw-account-query.js';
/**
 * API Client
 */
export class AccountAPI {
    apiClient;
    // The List of Account Services
    getAllAccounts = getAllAccounts.bind(this);
    getAccountById = getAccountById.bind(this);
    getAccountsCreatedForDateRange = getAccountsCreatedForDateRange.bind(this);
    getAccountsForDateRange = getAccountsForDateRange.bind(this);
    getUpdatedAccounts = getUpdatedAccounts.bind(this);
    rawAccountQuery = rawAccountQuery.bind(this);
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
     * @returns The Accounts
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Accounts', errorDetails);
        }
        // Check if the Account is Not set and Initialize an Empty Array
        if (!response.QueryResponse.Account)
            response.QueryResponse.Account = new Array();
        // Get the Accounts
        const queryResponse = response.QueryResponse;
        // Return the Accounts
        return queryResponse.Account;
    }
    // Returns the Account URL
    async getUrl() {
        // Setup the URL
        const url = new URL(await this.getCompanyEndpoint());
        // Set the Account Endpoint
        url.pathname = path.join(url.pathname, 'account');
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
        const queryBuilder = new AccountQueryBuilder(companyEndpoint, Query.Account);
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
            // Return null
            return null;
        });
        // Check if the Result is null
        if (!result)
            return false;
        // Check if the Response is invalid
        if (!result.responseData?.QueryResponse?.Account)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.Account.length < 1)
            return false;
        // Return True
        return true;
    }
}
