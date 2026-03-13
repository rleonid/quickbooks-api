// Import the Types
import { ApiClient } from '../../packages/api/api-client';
import { QuickbooksError } from '../types';
/**
 * CompanyInfo
 *
 * @description
 * The Company Info Object (read-only)
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/companyinfo}
 */
export class CompanyInfo {
    /**
     * @description The API client used to make requests to the API to manage the CompanyInfo object
     */
    apiClient;
    // Setup the Readonly Properties
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     */
    Id;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     */
    SyncToken;
    /**
     * @description System-defined metadata. Read-only
     */
    MetaData;
    /**
     * @description Company name
     * @readonly
     */
    CompanyName;
    /**
     * @description Legal name of the company
     * @readonly
     */
    LegalName;
    /**
     * @description Company address
     * @readonly
     */
    CompanyAddr;
    /**
     * @description Legal address
     * @readonly
     */
    LegalAddr;
    /**
     * @description Customer communication address
     * @readonly
     */
    CustomerCommunicationAddr;
    /**
     * @description Primary phone number
     * @readonly
     */
    PrimaryPhone;
    /**
     * @description Company email address
     * @readonly
     */
    Email;
    /**
     * @description Website address
     * @readonly
     */
    WebAddr;
    /**
     * @description Country code
     * @readonly
     */
    Country;
    /**
     * @description Supported languages
     * @readonly
     */
    SupportedLanguages;
    /**
     * @description Fiscal year start month
     * @readonly
     */
    FiscalYearStartMonth;
    /**
     * @description Company start date
     * @readonly
     */
    CompanyStartDate;
    /**
     * @description Employer ID
     * @readonly
     */
    EmployerId;
    /**
     * @description Name-value pairs for additional data
     * @readonly
     */
    NameValue;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Constructor for CompanyInfo
     * @param apiClient - The API client
     * @param companyInfoData - The company info data (typically from API response)
     */
    constructor(apiClient, companyInfoData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize readonly properties
        this.Id = null;
        this.SyncToken = null;
        this.CompanyName = null;
        this.LegalName = null;
        this.CompanyAddr = null;
        this.LegalAddr = null;
        this.CustomerCommunicationAddr = null;
        this.PrimaryPhone = null;
        this.Email = null;
        this.WebAddr = null;
        this.Country = null;
        this.SupportedLanguages = null;
        this.FiscalYearStartMonth = null;
        this.CompanyStartDate = null;
        this.EmployerId = null;
        this.NameValue = null;
        this.domain = null;
        this.sparse = null;
        // Initialize all properties from the data
        if (companyInfoData) {
            Object.assign(this, companyInfoData);
        }
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the CompanyInfo Data
     * @throws {QuickbooksError} If the CompanyInfo was not found
     */
    async reload() {
        // Get the CompanyInfo
        const result = await this.apiClient.companyInfo.getCompanyInfo();
        // Check if the CompanyInfo was not Found
        if (!result.companyInfo)
            throw new QuickbooksError('CompanyInfo not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, result.companyInfo);
    }
}
