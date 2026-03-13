import { ApiClient } from '../../app';
import { EmailStatus, PhysicalAddress, SalesItemLine, GroupLine, DescriptionOnlyLine, DiscountLine, SubTotalLine, ReferenceType, GlobalTaxCalculation, EmailAddress, ModificationMetadata, DeliveryInfo, PrintStatus, LinkedTxn, MemoRef, TxnTaxDetail, CustomField } from '../types';
/**
 * Invoice
 *
 * @description The Invoice Object
 */
export declare class Invoice {
    /**
     * @description The API client used to make requests to the API to manage the Customer object
     */
    private apiClient;
    /**
     * @description Transaction line items (required)
     * @required
     * @maxItems 750 when taxable
     */
    Line: Array<SalesItemLine | GroupLine | DescriptionOnlyLine | DiscountLine | SubTotalLine>;
    /**
     * @description Customer/job reference (required)
     * @filterable
     */
    CustomerRef: ReferenceType;
    /**
     * @description Shipping origin address (required for automated tax)
     * @minorVersion 35
     */
    ShipFromAddr: PhysicalAddress;
    /**
     * @description Currency reference (required if multicurrency enabled)
     */
    CurrencyRef: ReferenceType;
    /**
     * @description Tax calculation method (required for non-US companies)
     * @allowedValues TaxExcluded, TaxInclusive, NotApplicable
     */
    GlobalTaxCalculation: GlobalTaxCalculation;
    /**
     * @description Project reference (required)
     * @minorVersion 69
     * @filterable
     */
    ProjectRef: ReferenceType;
    /**
     * @description Billing email (required if EmailStatus=NeedToSend)
     */
    BillEmail: EmailAddress;
    /**
     * @description Unique identifier (read-only, system defined)
     * @requiredForUpdate
     * @filterable
     * @sortable
     */
    readonly Id: string;
    /**
     * @description Version lock token (read-only, system defined)
     * @requiredForUpdate
     */
    readonly SyncToken: string;
    /**
     * @description Modification metadata (read-only)
     */
    readonly MetaData: ModificationMetadata;
    /**
     * @description Home currency balance (read-only)
     * @minorVersion 3
     */
    readonly HomeBalance: number;
    /**
     * @description Delivery information (read-only)
     */
    readonly DeliveryInfo: DeliveryInfo;
    /**
     * @description Total amount (read-only, system calculated)
     */
    readonly TotalAmt: number;
    /**
     * @description Sharable invoice link (read-only)
     * @minorVersion 36
     */
    readonly InvoiceLink: string;
    /**
     * @description Recurring transaction reference (read-only)
     * @minorVersion 52
     */
    readonly RecurDataRef: ReferenceType;
    /**
     * @description Tax exemption reference (read-only)
     * @minorVersion 21
     */
    readonly TaxExemptionRef: ReferenceType;
    /**
     * @description Remaining balance (read-only)
     * @filterable
     * @sortable
     */
    readonly Balance: number;
    /**
     * @description Home currency total (read-only)
     */
    readonly HomeTotalAmt: number;
    /**
     * @description Transaction date (yyyy/MM/dd)
     * @filterable
     * @sortable
     */
    TxnDate?: Date;
    /**
     * @description Goods delivery date
     */
    ShipDate?: Date;
    /**
     * @description Shipping tracking number
     */
    TrackingNum?: string;
    /**
     * @description Printing status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus?: PrintStatus;
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef?: ReferenceType;
    /**
     * @description Transaction source (internal use)
     */
    TxnSource?: string;
    /**
     * @description Related transactions
     * @maxItems 750
     */
    LinkedTxn?: Array<LinkedTxn>;
    /**
     * @description Deposit account reference
     */
    DepositToAccountRef?: ReferenceType;
    /**
     * @description Allow online ACH payments
     */
    AllowOnlineACHPayment?: boolean;
    /**
     * @description Transaction location type
     * @minorVersion 4
     */
    TransactionLocationType?: string;
    /**
     * @description Payment due date
     * @filterable
     * @sortable
     */
    DueDate?: Date;
    /**
     * @description Private transaction note (max 4000 chars)
     */
    PrivateNote?: string;
    /**
     * @description CC email address
     * @minorVersion 8
     */
    BillEmailCc?: EmailAddress;
    /**
     * @description Customer-facing memo
     */
    CustomerMemo?: MemoRef;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus?: EmailStatus;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate?: number;
    /**
     * @description Deposit amount
     */
    Deposit?: number;
    /**
     * @description Tax details
     */
    TxnTaxDetail?: TxnTaxDetail;
    /**
     * @description Allow credit card payments
     */
    AllowOnlineCreditCardPayment?: boolean;
    /**
     * @description Custom fields
     */
    CustomField?: CustomField;
    /**
     * @description Shipping address
     */
    ShipAddr?: PhysicalAddress;
    /**
     * @description Department reference
     */
    DepartmentRef?: ReferenceType;
    /**
     * @description BCC email address
     * @minorVersion 8
     */
    BillEmailBcc?: EmailAddress;
    /**
     * @description Shipping method reference
     */
    ShipMethodRef?: ReferenceType;
    /**
     * @description Billing address
     */
    BillAddr?: PhysicalAddress;
    /**
     * @description Tax calculation order
     * @description true = apply discount before tax
     */
    ApplyTaxAfterDiscount?: Boolean;
    /**
     * @description The constructor for the Invoice object
     * @param apiClient The API client used to make requests to the API
     * @param invoiceCreationData The data used to create the invoice
     */
    constructor(apiClient: ApiClient, invoiceCreationData: InvoiceCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Invoice Data
     * @throws {QuickbooksError} If the Invoice was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the Invoice
     */
    save(): Promise<void>;
    /**
     * @description Sends the Invoice via email
     * @throws {QuickbooksError} If the Invoice ID is not set or the send fails
     */
    send(): Promise<void>;
    /**
     * @description Downloads the Invoice as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Invoice ID is not set or the download fails
     */
    downloadPDF(): Promise<Blob>;
    /**
     * @description Voids the Invoice
     * @throws {QuickbooksError} If the Invoice ID is not set or the void fails
     */
    void(): Promise<void>;
}
export type InvoiceCreationData = {
    Line: Array<SalesItemLine | GroupLine | DescriptionOnlyLine | DiscountLine | SubTotalLine>;
    CustomerRef: ReferenceType;
    ShipFromAddr: PhysicalAddress;
    CurrencyRef: ReferenceType;
    GlobalTaxCalculation: GlobalTaxCalculation;
    ProjectRef: ReferenceType;
    BillEmail: EmailAddress;
};
