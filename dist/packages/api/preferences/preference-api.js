// Imports
import { ApiClient } from '../api-client';
import { Environment, Query, QuickbooksError } from '../../../types/types';
import { Endpoints } from '../../../types/enums/endpoints';
import { PreferenceQueryBuilder } from './preference-query-builder';
// Import the Services
import { getPreferences } from './services/get-preferences';
import { rawPreferenceQuery } from './services/raw-preference-query';
/**
 * API Client
 */
export class PreferenceAPI {
    apiClient;
    // The List of Preference Services
    getPreferences = getPreferences.bind(this);
    rawPreferenceQuery = rawPreferenceQuery.bind(this);
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
     * @returns The Preferences
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Preferences', errorDetails);
        }
        // Check if the Preferences is Not set and if it is, set the Preferences to an empty array
        if (!response.QueryResponse.Preferences)
            response.QueryResponse.Preferences = new Array();
        // Get the Preferences
        const queryResponse = response.QueryResponse;
        // Return the Preferences
        return queryResponse.Preferences;
    }
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    async getQueryBuilder() {
        // Get the Company Endpoint
        const companyEndpoint = await this.getCompanyEndpoint();
        // Setup the New Query Builder
        const queryBuilder = new PreferenceQueryBuilder(companyEndpoint, Query.Preferences);
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
        if (!result?.responseData || !result.responseData?.QueryResponse?.Preference)
            return false;
        // Check if the Response is Invalid
        if (result.responseData.QueryResponse.Preference.length < 1)
            return false;
        // Return True
        return true;
    }
}
