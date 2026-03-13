// Imports
import { ApiClient } from '../api-client.js';
import { Environment, Query, QuickbooksError } from '../../../types/types.js';
import { Endpoints } from '../../../types/enums/endpoints.js';
import { CompanyInfoQueryBuilder } from './company-info-query-builder.js';
// Import the Services
import { getCompanyInfo } from './services/get-company-info.js';
import { rawCompanyInfoQuery } from './services/raw-company-info-query.js';
/**
 * Company Info API
 */
export class CompanyInfoAPI {
    apiClient;
    // The List of Company Info Services
    getCompanyInfo = getCompanyInfo.bind(this);
    rawCompanyInfoQuery = rawCompanyInfoQuery.bind(this);
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
     * @returns The Company Info
     */
    async formatResponse(response) {
        // Check if the Response is Invalid
        if (!response?.QueryResponse) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError('Unable to format Company Info', errorDetails);
        }
        // Check if the Company Info is Not set and if it is, set the Company Info to an empty array
        if (!response.QueryResponse.CompanyInfo)
            response.QueryResponse.CompanyInfo = new Array();
        // Get the Company Info
        const queryResponse = response.QueryResponse;
        // Return the first Company Info (there should only be one)
        return queryResponse.CompanyInfo[0];
    }
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    async getQueryBuilder() {
        // Get the Company Endpoint
        const companyEndpoint = await this.getCompanyEndpoint();
        // Setup the New Query Builder
        const queryBuilder = new CompanyInfoQueryBuilder(companyEndpoint, Query.CompanyInfo);
        // Return the Query Builder
        return queryBuilder;
    }
}
