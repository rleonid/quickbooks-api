import { ApiClient } from '../../packages/api/api-client';
import { PhysicalAddress, EmailAddress, ModificationMetadata } from '../types';
/**
 * Name Value Pair
 */
interface NameValuePair {
    Name: string;
    Value: string;
}
/**
 * Website Address
 */
interface WebsiteAddress {
    URI?: string;
}
/**
 * Phone Number
 */
interface PhoneNumber {
    FreeFormNumber: string;
}
/**
 * CompanyInfo
 *
 * @description
 * The Company Info Object (read-only)
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/companyinfo}
 */
export declare class CompanyInfo {
    /**
     * @description The API client used to make requests to the API to manage the CompanyInfo object
     */
    private apiClient;
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     */
    readonly Id: string;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     */
    readonly SyncToken: string;
    /**
     * @description System-defined metadata. Read-only
     */
    readonly MetaData?: ModificationMetadata;
    /**
     * @description Company name
     * @readonly
     */
    readonly CompanyName: string;
    /**
     * @description Legal name of the company
     * @readonly
     */
    readonly LegalName: string;
    /**
     * @description Company address
     * @readonly
     */
    readonly CompanyAddr: PhysicalAddress;
    /**
     * @description Legal address
     * @readonly
     */
    readonly LegalAddr: PhysicalAddress;
    /**
     * @description Customer communication address
     * @readonly
     */
    readonly CustomerCommunicationAddr: PhysicalAddress;
    /**
     * @description Primary phone number
     * @readonly
     */
    readonly PrimaryPhone: PhoneNumber;
    /**
     * @description Company email address
     * @readonly
     */
    readonly Email: EmailAddress;
    /**
     * @description Website address
     * @readonly
     */
    readonly WebAddr: WebsiteAddress;
    /**
     * @description Country code
     * @readonly
     */
    readonly Country: string;
    /**
     * @description Supported languages
     * @readonly
     */
    readonly SupportedLanguages: string;
    /**
     * @description Fiscal year start month
     * @readonly
     */
    readonly FiscalYearStartMonth: string;
    /**
     * @description Company start date
     * @readonly
     */
    readonly CompanyStartDate: string;
    /**
     * @description Employer ID
     * @readonly
     */
    readonly EmployerId: string;
    /**
     * @description Name-value pairs for additional data
     * @readonly
     */
    readonly NameValue: NameValuePair[];
    /**
     * @description Domain of the data source
     */
    readonly domain: string;
    /**
     * @description Sparse update flag
     */
    readonly sparse: boolean;
    /**
     * @description Constructor for CompanyInfo
     * @param apiClient - The API client
     * @param companyInfoData - The company info data (typically from API response)
     */
    constructor(apiClient: ApiClient, companyInfoData?: Partial<CompanyInfo>);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the CompanyInfo Data
     * @throws {QuickbooksError} If the CompanyInfo was not found
     */
    reload(): Promise<void>;
}
export {};
