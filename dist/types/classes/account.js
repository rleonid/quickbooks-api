// Import the Types
import { ApiClient } from '../../packages/api/api-client';
import { QuickbooksError } from '../types';
/**
 * Account
 *
 * @description
 * The Account Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account}
 */
export class Account {
    /**
     * @description The API client used to make requests to the API to manage the Account object
     */
    apiClient;
    // Setup the Readonly Properties
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     * @filterable
     * @sortable
     * @requiredForUpdate
     */
    Id;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     * @requiredForUpdate
     */
    SyncToken;
    /**
     * @description System-defined metadata. Read-only
     */
    MetaData;
    /**
     * @description Fully qualified hierarchical name
     * @readonly
     * @systemDefined
     * @filterable
     * @sortable
     */
    FullyQualifiedName;
    /**
     * @description Current balance including sub-accounts
     * @readonly
     * @filterable
     * @sortable
     */
    CurrentBalanceWithSubAccounts;
    /**
     * @description Current balance of the account
     * @readonly
     * @filterable
     * @sortable
     */
    CurrentBalance;
    // Setup the Required Properties
    /**
     * @description Account name (required)
     * @maxLength 100
     * @filterable
     * @sortable
     */
    Name;
    /**
     * @description Account type classification (required)
     * @filterable
     * @sortable
     * @remarks From predefined account type list
     */
    AccountType;
    /**
     * @description Account subtype (required for most account types)
     * @filterable
     * @sortable
     */
    AccountSubType;
    /**
     * @description Account classification (required)
     * @filterable
     * @sortable
     * @remarks Asset, Liability, Equity, Revenue, Expense
     */
    Classification;
    // Setup the Optional Properties
    /**
     * @description Currency reference
     * @readonly
     */
    CurrencyRef;
    /**
     * @description Indicates if account is active
     * @filterable
     * @sortable
     */
    Active;
    /**
     * @description Indicates if this is a sub-account
     */
    SubAccount;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Constructor for Account
     * @param apiClient - The API client
     * @param accountCreationData - The data for the account
     */
    constructor(apiClient, accountCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize the System Defined Properties
        this.Id = null;
        this.SyncToken = null;
        this.FullyQualifiedName = null;
        this.CurrentBalanceWithSubAccounts = null;
        this.CurrentBalance = null;
        // Build the Required Properties
        this.Name = accountCreationData?.Name ?? null;
        this.AccountType = accountCreationData?.AccountType ?? null;
        this.AccountSubType = accountCreationData?.AccountSubType ?? null;
        this.Classification = accountCreationData?.Classification ?? null;
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Account Data
     * @throws {QuickbooksError} If the Account was not found
     */
    async reload() {
        // Get the Account by ID
        const result = await this.apiClient.accounts.getAccountById(this.Id);
        // Check if the Account was not Found
        if (!result.account)
            throw new QuickbooksError('Account not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, result.account);
    }
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    toJSON() {
        // Setup the Excluded Properties
        const excludedProperties = ['apiClient'];
        // Setup the JSON Object
        const jsonData = { ...Object.fromEntries(Object.entries(this).filter(([key]) => !excludedProperties.includes(key))) };
        // Return the JSON Object
        return jsonData;
    }
    /**
     * @description Updates or creates (if the Id is not set) the Account
     */
    async save() {
        // Get the Account URL
        const url = await this.apiClient.accounts.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the Account
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Account from the response (QuickBooks returns { Account: {...} } or wrapped format)
        const accountData = responseData?.Account?.[0] || responseData?.Account || responseData;
        // Assign the Properties
        Object.assign(this, accountData);
    }
    /**
     * @description Deletes (deactivates) the Account by setting Active=false
     * @throws {QuickbooksError} If the Account ID is not set or the delete fails
     */
    async delete() {
        // Check if the Account has an ID
        if (!this.Id)
            throw new QuickbooksError('Account must be saved before deleting', await ApiClient.getIntuitErrorDetails(null));
        // Set Active to false for soft delete
        this.Active = false;
        // Save the Account with Active=false
        await this.save();
    }
}
