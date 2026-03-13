// Import the Types
import { ApiClient } from '../../packages/api/api-client.js';
import { QuickbooksError, } from '../types.js';
/**
 * Customer
 *
 * @description
 * The Customer Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer}
 */
export class Customer {
    /**
     * @description The API client used to make requests to the API to manage the Customer object
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
     * @description Currency reference for all customer amounts
     * @readonly
     */
    CurrencyRef;
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
     * @remarks Format: Customer:Job:Sub-job (max 5 levels)
     * @example "ParentCustomer:ChildJob:SubJob"
     */
    FullyQualifiedName;
    /**
     * @description Hierarchy level position
     * @readonly
     * @systemDefined
     * @remarks 0 = top level, increments with depth (max 5 levels)
     */
    Level;
    // Setup the Optional Properties
    /**
     * @description Primary email address
     * @filterable
     * @maxLength 500
     */
    PrimaryEmailAddr;
    /**
     * @description Resale number or additional customer info
     * @maxLength 16
     */
    ResaleNum;
    /**
     * @description Default tax code reference (requires Taxable=true)
     * @remarks Ignored if Taxable=false. System-managed when automated tax enabled
     */
    DefaultTaxCodeRef;
    /**
     * @description Preferred delivery method
     */
    PreferredDeliveryMethod;
    /**
     * @description Reference to sales terms associated with this customer
     * @remarks Query SalesTerm list to determine appropriate reference
     */
    SalesTermRef;
    /**
     * @description Customer type classification reference
     * @remarks From predefined customer type list
     */
    CustomerTypeRef;
    /**
     * @description Fax number
     * @maxLength 30
     */
    Fax;
    /**
     * @description Indicates if customer is billed with parent
     * @remarks Only valid for Job/Sub-Customer, requires ParentRef
     */
    BillWithParent;
    /**
     * @description Mobile phone number
     * @maxLength 30
     */
    Mobile;
    /**
     * @description Indicates if this is a Job/Sub-customer
     * @remarks Requires ParentRef if true
     */
    Job;
    /**
     * @description Cumulative open balance including sub-jobs
     * @readonly
     * @sortable
     */
    BalanceWithJobs;
    /**
     * @description Primary phone number
     * @maxLength 30
     */
    PrimaryPhone;
    /**
     * @description Date of opening balance
     * @remarks Write-on-create field
     */
    OpenBalanceDate;
    /**
     * @description Indicates if transactions are taxable
     * @remarks Defaults true if DefaultTaxCodeRef defined
     */
    Taxable;
    /**
     * @description Alternate phone number
     * @maxLength 30
     */
    AlternatePhone;
    /**
     * @description Reference to parent customer
     * @remarks Required for sub-customers/jobs
     */
    ParentRef;
    /**
     * @description Free-form notes about customer
     * @maxLength 2000
     */
    Notes;
    /**
     * @description Website address
     * @maxLength 1000
     */
    WebAddr;
    /**
     * @description Customer active status
     * @filterable
     * @sortable
     * @remarks Inactive customers with balances get CreditMemo
     */
    Active;
    /**
     * @description Associated company name
     * @maxLength 100
     * @filterable
     * @sortable
     */
    CompanyName;
    /**
     * @description Open balance amount
     * @filterable
     * @sortable
     * @remarks Write-on-create field
     */
    Balance;
    /**
     * @description Default shipping address
     * @remarks Address components handled differently in transactions
     */
    ShipAddr;
    /**
     * @description Preferred payment method reference
     * @remarks Query PaymentMethod list for valid references
     */
    PaymentMethodRef;
    /**
     * @description Name printed on checks
     * @maxLength 110
     * @filterable
     * @sortable
     * @remarks Defaults to DisplayName if not provided
     */
    PrintOnCheckName;
    /**
     * @description Default billing address
     * @remarks Address components handled differently in transactions
     */
    BillAddr;
    /**
     * @description Display name (conditionally required)
     * @maxLength 500
     * @filterable
     * @sortable
     * @remarks Must be unique across all entities. Generated from name components if not provided
     */
    DisplayName;
    /**
     * @description Title (conditionally required)
     * @maxLength 16
     * @remarks Part of name component group (with GivenName/MiddleName/FamilyName/Suffix)
     */
    Title;
    /**
     * @description Given name (conditionally required). Maximum 100 characters
     * @filterable, sortable
     * @remarks Part of name component group
     */
    GivenName;
    /**
     * @description Middle name (conditionally required). Maximum 100 characters
     * @filterable, sortable
     * @remarks Part of name component group
     */
    MiddleName;
    /**
     * @description Name suffix (conditionally required). Maximum 16 characters
     * @remarks Part of name component group
     */
    Suffix;
    /**
     * @description Family name (conditionally required). Maximum 100 characters
     * @filterable, sortable
     * @remarks Part of name component group
     */
    FamilyName;
    /**
     * @description Constructor for Customer
     * @param apiClient - The API client
     * @param customerCreationData - The data for the customer
     */
    constructor(apiClient, customerCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize the System Defined Properties
        this.Id = null;
        this.SyncToken = null;
        this.FullyQualifiedName = null;
        this.Level = null;
        // Build the Required Properties
        this.DisplayName = customerCreationData?.DisplayName ?? null;
        this.Title = customerCreationData?.Title ?? null;
        this.GivenName = customerCreationData?.GivenName ?? null;
        this.MiddleName = customerCreationData?.MiddleName ?? null;
        this.Suffix = customerCreationData?.Suffix ?? null;
        this.FamilyName = customerCreationData?.FamilyName ?? null;
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Customer Data
     * @throws {QuickbooksError} If the Customer was not found
     */
    async reload() {
        // Get the Customer by ID
        const customer = await this.apiClient.customers.getCustomerById(this.Id);
        // Check if the Customer was not Found
        if (!customer)
            throw new QuickbooksError('Customer not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, customer);
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
     * @description Updates or creates (if the Id is not set) the Customer
     */
    async save() {
        // Get the Customer URL
        const url = await this.apiClient.customers.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the Customer
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Customer from the response (QuickBooks returns { Customer: {...} } or wrapped format)
        const customerData = responseData?.Customer?.[0] || responseData?.Customer || responseData;
        // Assign the Properties
        Object.assign(this, customerData);
    }
    /**
     * @description Deletes (deactivates) the Customer by setting Active=false
     * @throws {QuickbooksError} If the Customer ID is not set or the delete fails
     */
    async delete() {
        // Check if the Customer has an ID
        if (!this.Id)
            throw new QuickbooksError('Customer must be saved before deleting', await ApiClient.getIntuitErrorDetails(null));
        // Set Active to false for soft delete
        this.Active = false;
        // Save the Customer with Active=false
        await this.save();
    }
}
