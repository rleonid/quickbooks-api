import { ApiClient } from '../../packages/api/api-client';
import { ReferenceType, ModificationMetadata } from '../types';
/**
 * Account
 *
 * @description
 * The Account Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account}
 */
export declare class Account {
    /**
     * @description The API client used to make requests to the API to manage the Account object
     */
    private apiClient;
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     * @filterable
     * @sortable
     * @requiredForUpdate
     */
    readonly Id: string;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     * @requiredForUpdate
     */
    readonly SyncToken: string;
    /**
     * @description System-defined metadata. Read-only
     */
    readonly MetaData?: ModificationMetadata;
    /**
     * @description Fully qualified hierarchical name
     * @readonly
     * @systemDefined
     * @filterable
     * @sortable
     */
    readonly FullyQualifiedName: string;
    /**
     * @description Current balance including sub-accounts
     * @readonly
     * @filterable
     * @sortable
     */
    readonly CurrentBalanceWithSubAccounts: number;
    /**
     * @description Current balance of the account
     * @readonly
     * @filterable
     * @sortable
     */
    readonly CurrentBalance: number;
    /**
     * @description Account name (required)
     * @maxLength 100
     * @filterable
     * @sortable
     */
    Name: string;
    /**
     * @description Account type classification (required)
     * @filterable
     * @sortable
     * @remarks From predefined account type list
     */
    AccountType: string;
    /**
     * @description Account subtype (required for most account types)
     * @filterable
     * @sortable
     */
    AccountSubType: string;
    /**
     * @description Account classification (required)
     * @filterable
     * @sortable
     * @remarks Asset, Liability, Equity, Revenue, Expense
     */
    Classification: string;
    /**
     * @description Currency reference
     * @readonly
     */
    CurrencyRef?: ReferenceType;
    /**
     * @description Indicates if account is active
     * @filterable
     * @sortable
     */
    Active?: boolean;
    /**
     * @description Indicates if this is a sub-account
     */
    SubAccount?: boolean;
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for Account
     * @param apiClient - The API client
     * @param accountCreationData - The data for the account
     */
    constructor(apiClient: ApiClient, accountCreationData: AccountCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Account Data
     * @throws {QuickbooksError} If the Account was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the Account
     */
    save(): Promise<void>;
    /**
     * @description Deletes (deactivates) the Account by setting Active=false
     * @throws {QuickbooksError} If the Account ID is not set or the delete fails
     */
    delete(): Promise<void>;
}
export type AccountCreationData = {
    Name: string;
    AccountType: string;
    AccountSubType: string;
    Classification: string;
};
