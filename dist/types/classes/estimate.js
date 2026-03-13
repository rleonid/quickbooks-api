// Import the Types
import { ApiClient } from '../../packages/api/api-client.js';
import { QuickbooksError, } from '../types.js';
/**
 * Estimate
 *
 * @description
 * The Estimate Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/estimate}
 */
export class Estimate {
    /**
     * @description The API client used to make requests to the API to manage the Estimate object
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
     * @description Total amount (read-only, system calculated)
     * @readonly
     */
    TotalAmt;
    /**
     * @description Home currency total (read-only)
     * @readonly
     */
    HomeTotalAmt;
    /**
     * @description Tax exemption reference (read-only)
     * @readonly
     */
    TaxExemptionRef;
    /**
     * @description Free form address flag (read-only)
     * @readonly
     */
    FreeFormAddress;
    // Setup the Required Properties
    /**
     * @description Customer reference (required)
     * @filterable
     */
    CustomerRef;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line;
    // Setup the Optional Properties
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate;
    /**
     * @description Shipping date
     */
    ShipDate;
    /**
     * @description Shipping origin address
     */
    ShipFromAddr;
    /**
     * @description Currency reference
     */
    CurrencyRef;
    /**
     * @description Tax calculation method
     * @allowedValues TaxExcluded, TaxInclusive, NotApplicable
     */
    GlobalTaxCalculation;
    /**
     * @description Project reference
     * @filterable
     */
    ProjectRef;
    /**
     * @description Billing email
     */
    BillEmail;
    /**
     * @description Class reference
     */
    ClassRef;
    /**
     * @description Print status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus;
    /**
     * @description Custom fields
     */
    CustomField;
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef;
    /**
     * @description Transaction status
     */
    TxnStatus;
    /**
     * @description Related transactions
     */
    LinkedTxn;
    /**
     * @description Accepted date
     */
    AcceptedDate;
    /**
     * @description Expiration date
     */
    ExpirationDate;
    /**
     * @description Transaction location type
     */
    TransactionLocationType;
    /**
     * @description Due date
     * @filterable
     * @sortable
     */
    DueDate;
    /**
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber;
    /**
     * @description Private note (max 4000 chars)
     */
    PrivateNote;
    /**
     * @description Customer memo
     */
    CustomerMemo;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus;
    /**
     * @description Tax details
     */
    TxnTaxDetail;
    /**
     * @description Accepted by
     */
    AcceptedBy;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate;
    /**
     * @description Shipping address
     */
    ShipAddr;
    /**
     * @description Department reference
     */
    DepartmentRef;
    /**
     * @description Shipping method reference
     */
    ShipMethodRef;
    /**
     * @description Billing address
     */
    BillAddr;
    /**
     * @description Apply tax after discount
     */
    ApplyTaxAfterDiscount;
    /**
     * @description Recurring transaction reference
     */
    RecurDataRef;
    /**
     * @description Delivery info
     */
    DeliveryInfo;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Constructor for Estimate
     * @param apiClient - The API client
     * @param estimateCreationData - The data for the estimate
     */
    constructor(apiClient, estimateCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize the System Defined Properties
        this.Id = null;
        this.SyncToken = null;
        // Build the Required Properties
        this.CustomerRef = estimateCreationData?.CustomerRef ?? null;
        this.Line = estimateCreationData?.Line ?? [];
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Estimate Data
     * @throws {QuickbooksError} If the Estimate was not found
     */
    async reload() {
        // Get the Estimate by ID
        const result = await this.apiClient.estimates.getEstimateById(this.Id);
        // Check if the Estimate was not Found
        if (!result.estimate)
            throw new QuickbooksError('Estimate not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, result.estimate);
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
     * @description Updates or creates (if the Id is not set) the Estimate
     */
    async save() {
        // Get the Estimate URL
        const url = await this.apiClient.estimates.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the Estimate
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Estimate from the response (QuickBooks returns { Estimate: {...} } or wrapped format)
        const estimateData = responseData?.Estimate?.[0] || responseData?.Estimate || responseData;
        // Assign the Properties
        Object.assign(this, estimateData);
    }
    /**
     * @description Sends the Estimate via email
     * @throws {QuickbooksError} If the Estimate ID is not set or the send fails
     */
    async send() {
        // Check if the Estimate has an ID
        if (!this.Id)
            throw new QuickbooksError('Estimate must be saved before sending', await ApiClient.getIntuitErrorDetails(null));
        // Get the Estimate URL and append /send
        const url = await this.apiClient.estimates.getUrl();
        url.pathname = `${url.pathname}/${this.Id}/send`;
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Send the Estimate
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Estimate from the response
        const estimateData = responseData?.Estimate?.[0] || responseData?.Estimate || responseData;
        // Assign the Properties
        if (estimateData)
            Object.assign(this, estimateData);
    }
    /**
     * @description Downloads the Estimate as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Estimate ID is not set or the download fails
     */
    async downloadPDF() {
        // Check if the Estimate has an ID
        if (!this.Id)
            throw new QuickbooksError('Estimate must be saved before downloading PDF', await ApiClient.getIntuitErrorDetails(null));
        // Get the Estimate URL and append /pdf
        const url = await this.apiClient.estimates.getUrl();
        url.pathname = `${url.pathname}/${this.Id}/pdf`;
        // Get the Token
        const token = await this.apiClient.authProvider.getToken();
        // Setup the Request Data for PDF
        const requestData = {
            method: 'GET',
            headers: {
                Accept: 'application/pdf',
                Authorization: `Bearer ${token.accessToken}`,
            },
        };
        // Download the PDF
        const response = await fetch(url.href, requestData);
        // Check if the Response has failed
        if (!response.ok) {
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            throw new QuickbooksError('Failed to download PDF', errorDetails);
        }
        // Return the PDF as a Blob
        return await response.blob();
    }
}
