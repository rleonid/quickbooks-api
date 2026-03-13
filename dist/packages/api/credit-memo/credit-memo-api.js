// Imports
import { ApiClient } from '../api-client';
import { Environment, Query, QuickbooksError } from '../../../types/types';
import { Endpoints } from '../../../types/enums/endpoints';
import { CreditMemoQueryBuilder } from './credit-memo-query-builder';
import path from 'path';
// Import the Services
import { getAllCreditMemos } from './services/get-all-credit-memos';
import { getCreditMemoById } from './services/get-credit-memo-by-id';
import { getCreditMemosForDateRange } from './services/get-credit-memos-for-date-range';
import { getUpdatedCreditMemos } from './services/get-updated-credit-memos';
import { rawCreditMemoQuery } from './services/raw-credit-memo-query';
/**
 * API Client
 */
export class CreditMemoAPI {
    apiClient;
    // The List of CreditMemo Services
    getAllCreditMemos = getAllCreditMemos.bind(this);
    getCreditMemoById = getCreditMemoById.bind(this);
    getCreditMemosForDateRange = getCreditMemosForDateRange.bind(this);
    getUpdatedCreditMemos = getUpdatedCreditMemos.bind(this);
    rawCreditMemoQuery = rawCreditMemoQuery.bind(this);
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
     * @returns The CreditMemos
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Credit Memos', errorDetails);
        }
        // Check if the Credit Memo is Not set and if it is, set the Credit Memo to an empty array
        if (!response.QueryResponse.CreditMemo)
            response.QueryResponse.CreditMemo = new Array();
        // Get the CreditMemos
        const queryResponse = response.QueryResponse;
        // Return the CreditMemos
        return queryResponse.CreditMemo;
    }
    // Returns the CreditMemo URL
    async getUrl() {
        // Setup the URL
        const url = new URL(await this.getCompanyEndpoint());
        // Set the CreditMemo Endpoint
        url.pathname = path.join(url.pathname, 'creditmemo');
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
        const queryBuilder = new CreditMemoQueryBuilder(companyEndpoint, Query.CreditMemo);
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
        if (!result?.responseData || !result.responseData?.QueryResponse?.CreditMemo)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.CreditMemo.length < 1)
            return false;
        // Return True
        return true;
    }
}
