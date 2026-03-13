import { ApiClient } from '../../packages/api/api-client';
import { ReferenceType, ModificationMetadata, LinkedTxn, TxnTaxDetail } from '../types';
/**
 * Bill Line Detail Types
 */
export type BillLineDetailType = 'AccountBasedExpenseLineDetail' | 'ItemBasedExpenseLineDetail';
/**
 * Bill Line
 */
export interface BillLine {
    Id?: string;
    Description?: string;
    Amount?: number;
    DetailType?: BillLineDetailType;
    AccountBasedExpenseLineDetail?: {
        AccountRef: ReferenceType;
        CustomerRef?: ReferenceType;
        BillableStatus?: 'Billable' | 'NotBillable';
        TaxCodeRef?: ReferenceType;
    };
    ItemBasedExpenseLineDetail?: any;
}
/**
 * Bill
 *
 * @description
 * The Bill Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill}
 */
export declare class Bill {
    /**
     * @description The API client used to make requests to the API to manage the Bill object
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
     * @description Total amount of the bill (read-only, system calculated)
     * @readonly
     * @filterable
     * @sortable
     */
    readonly TotalAmt?: number;
    /**
     * @description Remaining balance (read-only)
     * @readonly
     * @filterable
     * @sortable
     */
    readonly Balance?: number;
    /**
     * @description Vendor reference (required)
     * @filterable
     */
    VendorRef: ReferenceType;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line?: BillLine[];
    /**
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber?: string;
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate?: string;
    /**
     * @description Currency reference
     */
    CurrencyRef?: ReferenceType;
    /**
     * @description Private note (max 4000 chars)
     */
    PrivateNote?: string;
    /**
     * @description Accounts payable account reference
     */
    APAccountRef?: ReferenceType;
    /**
     * @description Sales terms reference
     * @filterable
     */
    SalesTermRef?: ReferenceType;
    /**
     * @description Payment due date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    DueDate?: string;
    /**
     * @description Related transactions
     */
    LinkedTxn?: LinkedTxn[];
    /**
     * @description Tax details
     */
    TxnTaxDetail?: TxnTaxDetail;
    /**
     * @description Currency exchange rate
     */
    ExchangeRate?: number;
    /**
     * @description Department reference
     */
    DepartmentRef?: ReferenceType;
    /**
     * @description Include in annual TPAR report
     */
    IncludeInAnnualTPAR?: boolean;
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for Bill
     * @param apiClient - The API client
     * @param billCreationData - The data for the bill
     */
    constructor(apiClient: ApiClient, billCreationData: BillCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Bill Data
     * @throws {QuickbooksError} If the Bill was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the Bill
     */
    save(): Promise<void>;
    /**
     * @description Downloads the Bill as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Bill ID is not set or the download fails
     */
    downloadPDF(): Promise<Blob>;
}
export type BillCreationData = {
    VendorRef: ReferenceType;
    Line?: BillLine[];
};
