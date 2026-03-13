// Import the Types
import { ApiClient } from '../../packages/api/api-client.js';
import { QuickbooksError, } from '../types.js';
/**
 * CreditMemo
 *
 * @description
 * The Credit Memo Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/creditmemo}
 */
export class CreditMemo {
    /**
     * @description The API client used to make requests to the API to manage the CreditMemo object
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
     * @filterable
     * @sortable
     */
    TotalAmt;
    /**
     * @description Remaining credit amount (read-only)
     * @readonly
     */
    RemainingCredit;
    /**
     * @description Current balance (read-only)
     * @readonly
     * @filterable
     * @sortable
     */
    Balance;
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
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber;
    /**
     * @description Print status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus;
    /**
     * @description Apply tax after discount
     */
    ApplyTaxAfterDiscount;
    /**
     * @description Customer memo
     */
    CustomerMemo;
    /**
     * @description Project reference
     * @filterable
     */
    ProjectRef;
    /**
     * @description Tax details
     */
    TxnTaxDetail;
    /**
     * @description Custom fields
     */
    CustomField;
    /**
     * @description Shipping address
     */
    ShipAddr;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus;
    /**
     * @description Billing address
     */
    BillAddr;
    /**
     * @description Billing email
     */
    BillEmail;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Constructor for CreditMemo
     * @param apiClient - The API client
     * @param creditMemoCreationData - The data for the credit memo
     */
    constructor(apiClient, creditMemoCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize the System Defined Properties
        this.Id = null;
        this.SyncToken = null;
        // Build the Required Properties
        this.CustomerRef = creditMemoCreationData?.CustomerRef ?? null;
        this.Line = creditMemoCreationData?.Line ?? [];
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the CreditMemo Data
     * @throws {QuickbooksError} If the CreditMemo was not found
     */
    async reload() {
        // Get the CreditMemo by ID
        const result = await this.apiClient.creditMemos.getCreditMemoById(this.Id);
        // Check if the CreditMemo was not Found
        if (!result.creditMemo)
            throw new QuickbooksError('CreditMemo not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, result.creditMemo);
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
     * @description Updates or creates (if the Id is not set) the CreditMemo
     */
    async save() {
        // Get the CreditMemo URL
        const url = await this.apiClient.creditMemos.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the CreditMemo
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the CreditMemo from the response (QuickBooks returns { CreditMemo: {...} } or wrapped format)
        const creditMemoData = responseData?.CreditMemo?.[0] || responseData?.CreditMemo || responseData;
        // Assign the Properties
        Object.assign(this, creditMemoData);
    }
    /**
     * @description Sends the CreditMemo via email
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the send fails
     */
    async send() {
        // Check if the CreditMemo has an ID
        if (!this.Id)
            throw new QuickbooksError('CreditMemo must be saved before sending', await ApiClient.getIntuitErrorDetails(null));
        // Get the CreditMemo URL and append /send
        const url = await this.apiClient.creditMemos.getUrl();
        url.pathname = `${url.pathname}/${this.Id}/send`;
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Send the CreditMemo
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the CreditMemo from the response
        const creditMemoData = responseData?.CreditMemo?.[0] || responseData?.CreditMemo || responseData;
        // Assign the Properties
        if (creditMemoData)
            Object.assign(this, creditMemoData);
    }
    /**
     * @description Downloads the CreditMemo as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the download fails
     */
    async downloadPDF() {
        // Check if the CreditMemo has an ID
        if (!this.Id)
            throw new QuickbooksError('CreditMemo must be saved before downloading PDF', await ApiClient.getIntuitErrorDetails(null));
        // Get the CreditMemo URL and append /pdf
        const url = await this.apiClient.creditMemos.getUrl();
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
    /**
     * @description Voids the CreditMemo
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the void fails
     */
    async void() {
        // Check if the CreditMemo has an ID
        if (!this.Id)
            throw new QuickbooksError('CreditMemo must be saved before voiding', await ApiClient.getIntuitErrorDetails(null));
        // Get the CreditMemo URL and append operation=void
        const url = await this.apiClient.creditMemos.getUrl();
        url.pathname = `${url.pathname}/${this.Id}`;
        url.searchParams.set('operation', 'void');
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Void the CreditMemo
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the CreditMemo from the response
        const creditMemoData = responseData?.CreditMemo?.[0] || responseData?.CreditMemo || responseData;
        // Assign the Properties
        if (creditMemoData)
            Object.assign(this, creditMemoData);
    }
}
