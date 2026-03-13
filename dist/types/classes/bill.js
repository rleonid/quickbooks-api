// Import the Types
import { ApiClient } from '../../packages/api/api-client';
import { QuickbooksError } from '../types';
/**
 * Bill
 *
 * @description
 * The Bill Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill}
 */
export class Bill {
    /**
     * @description The API client used to make requests to the API to manage the Bill object
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
     * @description Total amount of the bill (read-only, system calculated)
     * @readonly
     * @filterable
     * @sortable
     */
    TotalAmt;
    /**
     * @description Remaining balance (read-only)
     * @readonly
     * @filterable
     * @sortable
     */
    Balance;
    // Setup the Required Properties
    /**
     * @description Vendor reference (required)
     * @filterable
     */
    VendorRef;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line;
    // Setup the Optional Properties
    /**
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber;
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate;
    /**
     * @description Currency reference
     */
    CurrencyRef;
    /**
     * @description Private note (max 4000 chars)
     */
    PrivateNote;
    /**
     * @description Accounts payable account reference
     */
    APAccountRef;
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef;
    /**
     * @description Payment due date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    DueDate;
    /**
     * @description Related transactions
     */
    LinkedTxn;
    /**
     * @description Tax details
     */
    TxnTaxDetail;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate;
    /**
     * @description Department reference
     */
    DepartmentRef;
    /**
     * @description Include in annual TPAR report
     */
    IncludeInAnnualTPAR;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Constructor for Bill
     * @param apiClient - The API client
     * @param billCreationData - The data for the bill
     */
    constructor(apiClient, billCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize the System Defined Properties
        this.Id = null;
        this.SyncToken = null;
        // Build the Required Properties
        this.VendorRef = billCreationData?.VendorRef ?? null;
        this.Line = billCreationData?.Line ?? [];
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Bill Data
     * @throws {QuickbooksError} If the Bill was not found
     */
    async reload() {
        // Get the Bill by ID
        const result = await this.apiClient.bills.getBillById(this.Id);
        // Check if the Bill was not Found
        if (!result.bill)
            throw new QuickbooksError('Bill not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, result.bill);
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
     * @description Updates or creates (if the Id is not set) the Bill
     */
    async save() {
        // Get the Bill URL
        const url = await this.apiClient.bills.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the Bill
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Bill from the response (QuickBooks returns { Bill: {...} } or wrapped format)
        const billData = responseData?.Bill?.[0] || responseData?.Bill || responseData;
        // Assign the Properties
        Object.assign(this, billData);
    }
    /**
     * @description Downloads the Bill as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Bill ID is not set or the download fails
     */
    async downloadPDF() {
        // Check if the Bill has an ID
        if (!this.Id)
            throw new QuickbooksError('Bill must be saved before downloading PDF', await ApiClient.getIntuitErrorDetails(null));
        // Get the Bill URL and append /pdf
        const url = await this.apiClient.bills.getUrl();
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
