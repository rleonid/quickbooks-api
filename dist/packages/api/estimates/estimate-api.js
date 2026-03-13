// Imports
import { ApiClient } from '../api-client';
import { Environment, Query, QuickbooksError } from '../../../types/types';
import { Endpoints } from '../../../types/enums/endpoints';
import { EstimateQueryBuilder } from './estimate-query-builder';
import path from 'path';
// Import the Services
import { getAllEstimates } from './services/get-all-estimates';
import { getEstimateById } from './services/get-estimate-by-id';
import { getEstimatesForDateRange } from './services/get-estimates-for-date-range';
import { getUpdatedEstimates } from './services/get-updated-estimates';
import { rawEstimateQuery } from './services/raw-estimate-query';
/**
 * API Client
 */
export class EstimateAPI {
    apiClient;
    // The List of Estimate Services
    getAllEstimates = getAllEstimates.bind(this);
    getEstimateById = getEstimateById.bind(this);
    getEstimatesForDateRange = getEstimatesForDateRange.bind(this);
    getUpdatedEstimates = getUpdatedEstimates.bind(this);
    rawEstimateQuery = rawEstimateQuery.bind(this);
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
     * @returns The Estimates
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Estimates', errorDetails);
        }
        // Check if the Estimate is Not set and if it is, set the Estimate to an empty array
        if (!response.QueryResponse.Estimate)
            response.QueryResponse.Estimate = new Array();
        // Get the Estimates
        const queryResponse = response.QueryResponse;
        // Return the Estimates
        return queryResponse.Estimate;
    }
    // Returns the Estimate URL
    async getUrl() {
        // Setup the URL
        const url = new URL(await this.getCompanyEndpoint());
        // Set the Estimate Endpoint
        url.pathname = path.join(url.pathname, 'estimate');
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
        const queryBuilder = new EstimateQueryBuilder(companyEndpoint, Query.Estimate);
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
        if (!result?.responseData || !result.responseData?.QueryResponse?.Estimate)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.Estimate.length < 1)
            return false;
        // Return True
        return true;
    }
}
