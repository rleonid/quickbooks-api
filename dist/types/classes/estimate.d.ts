import { ApiClient } from '../../packages/api/api-client';
import { ReferenceType, PhysicalAddress, EmailAddress, ModificationMetadata, CustomField, LinkedTxn, TxnTaxDetail, MemoRef, GlobalTaxCalculation, EstimateStatus, EmailStatus } from '../types';
/**
 * Estimate Line
 */
export interface EstimateLine {
    readonly Id?: string;
    DetailType: string;
    SalesItemLineDetail?: {
        TaxInclusiveAmt?: number;
        DiscountAmt?: number;
        ItemRef?: ReferenceType;
        ClassRef?: ReferenceType;
        TaxCodeRef?: ReferenceType;
        ServiceDate?: string;
        DiscountRate?: number;
        Qty?: number;
        UnitPrice?: number;
        readonly TaxClassificationRef?: ReferenceType;
        ItemAccountRef?: ReferenceType;
    };
    SubTotalLineDetail?: {};
    Amount: number;
    Description?: string;
    LineNum?: number;
}
/**
 * Estimate
 *
 * @description
 * The Estimate Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/estimate}
 */
export declare class Estimate {
    /**
     * @description The API client used to make requests to the API to manage the Estimate object
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
     * @description Total amount (read-only, system calculated)
     * @readonly
     */
    readonly TotalAmt?: number;
    /**
     * @description Home currency total (read-only)
     * @readonly
     */
    readonly HomeTotalAmt?: number;
    /**
     * @description Tax exemption reference (read-only)
     * @readonly
     */
    readonly TaxExemptionRef?: ReferenceType;
    /**
     * @description Free form address flag (read-only)
     * @readonly
     */
    readonly FreeFormAddress?: boolean;
    /**
     * @description Customer reference (required)
     * @filterable
     */
    CustomerRef: ReferenceType;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line: EstimateLine[];
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate?: string;
    /**
     * @description Shipping date
     */
    ShipDate?: string;
    /**
     * @description Shipping origin address
     */
    ShipFromAddr?: PhysicalAddress;
    /**
     * @description Currency reference
     */
    CurrencyRef?: ReferenceType;
    /**
     * @description Tax calculation method
     * @allowedValues TaxExcluded, TaxInclusive, NotApplicable
     */
    GlobalTaxCalculation?: GlobalTaxCalculation;
    /**
     * @description Project reference
     * @filterable
     */
    ProjectRef?: ReferenceType;
    /**
     * @description Billing email
     */
    BillEmail?: EmailAddress;
    /**
     * @description Class reference
     */
    ClassRef?: ReferenceType;
    /**
     * @description Print status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus?: string;
    /**
     * @description Custom fields
     */
    CustomField?: CustomField[];
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef?: ReferenceType;
    /**
     * @description Transaction status
     */
    TxnStatus?: EstimateStatus;
    /**
     * @description Related transactions
     */
    LinkedTxn?: LinkedTxn[];
    /**
     * @description Accepted date
     */
    AcceptedDate?: string;
    /**
     * @description Expiration date
     */
    ExpirationDate?: string;
    /**
     * @description Transaction location type
     */
    TransactionLocationType?: string;
    /**
     * @description Due date
     * @filterable
     * @sortable
     */
    DueDate?: string;
    /**
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber?: string;
    /**
     * @description Private note (max 4000 chars)
     */
    PrivateNote?: string;
    /**
     * @description Customer memo
     */
    CustomerMemo?: MemoRef;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus?: EmailStatus;
    /**
     * @description Tax details
     */
    TxnTaxDetail?: TxnTaxDetail;
    /**
     * @description Accepted by
     */
    AcceptedBy?: string;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate?: number;
    /**
     * @description Shipping address
     */
    ShipAddr?: PhysicalAddress;
    /**
     * @description Department reference
     */
    DepartmentRef?: ReferenceType;
    /**
     * @description Shipping method reference
     */
    ShipMethodRef?: ReferenceType;
    /**
     * @description Billing address
     */
    BillAddr?: PhysicalAddress;
    /**
     * @description Apply tax after discount
     */
    ApplyTaxAfterDiscount?: boolean;
    /**
     * @description Recurring transaction reference
     */
    RecurDataRef?: ReferenceType;
    /**
     * @description Delivery info
     */
    DeliveryInfo?: {
        DeliveryType?: string;
    };
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for Estimate
     * @param apiClient - The API client
     * @param estimateCreationData - The data for the estimate
     */
    constructor(apiClient: ApiClient, estimateCreationData: EstimateCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Estimate Data
     * @throws {QuickbooksError} If the Estimate was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the Estimate
     */
    save(): Promise<void>;
    /**
     * @description Sends the Estimate via email
     * @throws {QuickbooksError} If the Estimate ID is not set or the send fails
     */
    send(): Promise<void>;
    /**
     * @description Downloads the Estimate as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Estimate ID is not set or the download fails
     */
    downloadPDF(): Promise<Blob>;
}
export type EstimateCreationData = {
    CustomerRef: ReferenceType;
    Line: EstimateLine[];
};
