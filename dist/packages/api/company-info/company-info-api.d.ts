import { ApiClient } from '../api-client.js';
import { type CompanyInfo } from '../../../types/types.js';
import { CompanyInfoQueryBuilder } from './company-info-query-builder.js';
/**
 * Company Info API
 */
export declare class CompanyInfoAPI {
    protected readonly apiClient: ApiClient;
    readonly getCompanyInfo: (options?: import("../../../types/interfaces/options.js").CompanyInfoOptions | undefined) => Promise<{
        companyInfo: CompanyInfo | undefined;
        intuitTID: string;
    }>;
    readonly rawCompanyInfoQuery: (query: string) => Promise<{
        companyInfo: CompanyInfo;
        intuitTID: string;
    }>;
    /**
     * Constructor
     * @param apiClient - The API Client
     */
    constructor(apiClient: ApiClient);
    /**
     * Get the Company Endpoint
     * @returns The Company Endpoint with the attached token realmId
     */
    protected getCompanyEndpoint(): Promise<string>;
    /**
     * Format the Response
     * @param response - The Response
     * @returns The Company Info
     */
    protected formatResponse(response: any): Promise<CompanyInfo>;
    /**
     * Get the Query Builder
     * @returns The Query Builder
     */
    getQueryBuilder(): Promise<CompanyInfoQueryBuilder>;
}
