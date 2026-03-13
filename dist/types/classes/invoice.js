// Imports
import { ApiClient } from '../../app';
import { QuickbooksError, } from '../types';
/**
 * Invoice
 *
 * @description The Invoice Object
 */
export class Invoice {
    /**
     * @description The API client used to make requests to the API to manage the Customer object
     */
    apiClient;
    // Setup the Required Properties
    /**
     * @description Transaction line items (required)
     * @required
     * @maxItems 750 when taxable
     */
    Line;
    /**
     * @description Customer/job reference (required)
     * @filterable
     */
    CustomerRef;
    /**
     * @description Shipping origin address (required for automated tax)
     * @minorVersion 35
     */
    ShipFromAddr;
    /**
     * @description Currency reference (required if multicurrency enabled)
     */
    CurrencyRef;
    /**
     * @description Tax calculation method (required for non-US companies)
     * @allowedValues TaxExcluded, TaxInclusive, NotApplicable
     */
    GlobalTaxCalculation;
    /**
     * @description Project reference (required)
     * @minorVersion 69
     * @filterable
     */
    ProjectRef;
    /**
     * @description Billing email (required if EmailStatus=NeedToSend)
     */
    BillEmail;
    // Setup the Readonly Properties
    /**
     * @description Unique identifier (read-only, system defined)
     * @requiredForUpdate
     * @filterable
     * @sortable
     */
    Id;
    /**
     * @description Version lock token (read-only, system defined)
     * @requiredForUpdate
     */
    SyncToken;
    /**
     * @description Modification metadata (read-only)
     */
    MetaData;
    /**
     * @description Home currency balance (read-only)
     * @minorVersion 3
     */
    HomeBalance;
    /**
     * @description Delivery information (read-only)
     */
    DeliveryInfo;
    /**
     * @description Total amount (read-only, system calculated)
     */
    TotalAmt;
    /**
     * @description Sharable invoice link (read-only)
     * @minorVersion 36
     */
    InvoiceLink;
    /**
     * @description Recurring transaction reference (read-only)
     * @minorVersion 52
     */
    RecurDataRef;
    /**
     * @description Tax exemption reference (read-only)
     * @minorVersion 21
     */
    TaxExemptionRef;
    /**
     * @description Remaining balance (read-only)
     * @filterable
     * @sortable
     */
    Balance;
    /**
     * @description Home currency total (read-only)
     */
    HomeTotalAmt;
    // Setup the Optional Properties
    /**
     * @description Transaction date (yyyy/MM/dd)
     * @filterable
     * @sortable
     */
    TxnDate;
    /**
     * @description Goods delivery date
     */
    ShipDate;
    /**
     * @description Shipping tracking number
     */
    TrackingNum;
    /**
     * @description Printing status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus;
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef;
    /**
     * @description Transaction source (internal use)
     */
    TxnSource;
    /**
     * @description Related transactions
     * @maxItems 750
     */
    LinkedTxn;
    /**
     * @description Deposit account reference
     */
    DepositToAccountRef;
    /**
     * @description Allow online ACH payments
     */
    AllowOnlineACHPayment;
    /**
     * @description Transaction location type
     * @minorVersion 4
     */
    TransactionLocationType;
    /**
     * @description Payment due date
     * @filterable
     * @sortable
     */
    DueDate;
    /**
     * @description Private transaction note (max 4000 chars)
     */
    PrivateNote;
    /**
     * @description CC email address
     * @minorVersion 8
     */
    BillEmailCc;
    /**
     * @description Customer-facing memo
     */
    CustomerMemo;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate;
    /**
     * @description Deposit amount
     */
    Deposit;
    /**
     * @description Tax details
     */
    TxnTaxDetail;
    /**
     * @description Allow credit card payments
     */
    AllowOnlineCreditCardPayment;
    /**
     * @description Custom fields
     */
    CustomField;
    /**
     * @description Shipping address
     */
    ShipAddr;
    /**
     * @description Department reference
     */
    DepartmentRef;
    /**
     * @description BCC email address
     * @minorVersion 8
     */
    BillEmailBcc;
    /**
     * @description Shipping method reference
     */
    ShipMethodRef;
    /**
     * @description Billing address
     */
    BillAddr;
    /**
     * @description Tax calculation order
     * @description true = apply discount before tax
     */
    ApplyTaxAfterDiscount;
    /**
     * @description The constructor for the Invoice object
     * @param apiClient The API client used to make requests to the API
     * @param invoiceCreationData The data used to create the invoice
     */
    constructor(apiClient, invoiceCreationData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Set the Creation Data
        this.Line = invoiceCreationData?.Line ?? new Array();
        this.CustomerRef = invoiceCreationData?.CustomerRef ?? null;
        this.ShipFromAddr = invoiceCreationData?.ShipFromAddr ?? null;
        this.CurrencyRef = invoiceCreationData?.CurrencyRef ?? null;
        this.GlobalTaxCalculation = invoiceCreationData?.GlobalTaxCalculation ?? null;
        this.ProjectRef = invoiceCreationData?.ProjectRef ?? null;
        this.BillEmail = invoiceCreationData?.BillEmail ?? null;
        // Set the Readonly Properties
        this.Id = null;
        this.SyncToken = null;
        this.MetaData = null;
        this.HomeBalance = null;
        this.DeliveryInfo = null;
        this.TotalAmt = null;
        this.InvoiceLink = null;
        this.RecurDataRef = null;
        this.TaxExemptionRef = null;
        this.Balance = null;
        this.HomeTotalAmt = null;
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Invoice Data
     * @throws {QuickbooksError} If the Invoice was not found
     */
    async reload() {
        // Get the Invoice by ID
        const invoice = await this.apiClient.invoices.getInvoiceById(this.Id);
        // Check if the Invoice was not Found
        if (!invoice)
            throw new QuickbooksError('Invoice not found', await ApiClient.getIntuitErrorDetails(null));
        // Assign the Properties
        Object.assign(this, invoice);
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
     * @description Updates or creates (if the Id is not set) the Invoice
     */
    async save() {
        // Get the Invoice URL
        const url = await this.apiClient.invoices.getUrl();
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Update the Invoice
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Invoice from the response (QuickBooks returns { Invoice: {...} } or wrapped format)
        const invoiceData = responseData?.Invoice?.[0] || responseData?.Invoice || responseData;
        // Assign the Properties
        Object.assign(this, invoiceData);
    }
    /**
     * @description Sends the Invoice via email
     * @throws {QuickbooksError} If the Invoice ID is not set or the send fails
     */
    async send() {
        // Check if the Invoice has an ID
        if (!this.Id)
            throw new QuickbooksError('Invoice must be saved before sending', await ApiClient.getIntuitErrorDetails(null));
        // Get the Invoice URL and append /send
        const url = await this.apiClient.invoices.getUrl();
        url.pathname = `${url.pathname}/${this.Id}/send`;
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Send the Invoice
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Invoice from the response
        const invoiceData = responseData?.Invoice?.[0] || responseData?.Invoice || responseData;
        // Assign the Properties
        if (invoiceData)
            Object.assign(this, invoiceData);
    }
    /**
     * @description Downloads the Invoice as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Invoice ID is not set or the download fails
     */
    async downloadPDF() {
        // Check if the Invoice has an ID
        if (!this.Id)
            throw new QuickbooksError('Invoice must be saved before downloading PDF', await ApiClient.getIntuitErrorDetails(null));
        // Get the Invoice URL and append /pdf
        const url = await this.apiClient.invoices.getUrl();
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
     * @description Voids the Invoice
     * @throws {QuickbooksError} If the Invoice ID is not set or the void fails
     */
    async void() {
        // Check if the Invoice has an ID
        if (!this.Id)
            throw new QuickbooksError('Invoice must be saved before voiding', await ApiClient.getIntuitErrorDetails(null));
        // Get the Invoice URL and append operation=void
        const url = await this.apiClient.invoices.getUrl();
        url.pathname = `${url.pathname}/${this.Id}`;
        url.searchParams.set('operation', 'void');
        // Setup the Request Data
        const requestData = {
            method: 'POST',
            body: JSON.stringify({ ...this.toJSON(), sparse: true }),
        };
        // Void the Invoice
        const { responseData } = await this.apiClient.runRequest(url.href, requestData);
        // Extract the Invoice from the response
        const invoiceData = responseData?.Invoice?.[0] || responseData?.Invoice || responseData;
        // Assign the Properties
        if (invoiceData)
            Object.assign(this, invoiceData);
    }
}
