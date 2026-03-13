import { ApiClient } from '../../packages/api/api-client.js';
import { ReferenceType, PhysicalAddress, EmailAddress, ModificationMetadata, CustomField, TxnTaxDetail, MemoRef } from '../types.js';
/**
 * Credit Memo Line
 */
export interface CreditMemoLine {
    Id?: string;
    Description?: string;
    DetailType: string;
    SalesItemLineDetail?: {
        TaxCodeRef: ReferenceType;
        Qty: number;
        UnitPrice: number;
        ItemRef: ReferenceType;
    };
    LineNum?: number;
    Amount: number;
    SubTotalLineDetail?: {};
}
/**
 * CreditMemo
 *
 * @description
 * The Credit Memo Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/creditmemo}
 */
export declare class CreditMemo {
    /**
     * @description The API client used to make requests to the API to manage the CreditMemo object
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
     * @filterable
     * @sortable
     */
    readonly TotalAmt?: number;
    /**
     * @description Remaining credit amount (read-only)
     * @readonly
     */
    readonly RemainingCredit?: number;
    /**
     * @description Current balance (read-only)
     * @readonly
     * @filterable
     * @sortable
     */
    readonly Balance?: number;
    /**
     * @description Customer reference (required)
     * @filterable
     */
    CustomerRef: ReferenceType;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line: CreditMemoLine[];
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate?: string;
    /**
     * @description Document number
     * @filterable
     * @sortable
     */
    DocNumber?: string;
    /**
     * @description Print status
     * @allowedValues NotSet, NeedToPrint, PrintComplete
     */
    PrintStatus?: string;
    /**
     * @description Apply tax after discount
     */
    ApplyTaxAfterDiscount?: boolean;
    /**
     * @description Customer memo
     */
    CustomerMemo?: MemoRef;
    /**
     * @description Project reference
     * @filterable
     */
    ProjectRef?: ReferenceType;
    /**
     * @description Tax details
     */
    TxnTaxDetail?: TxnTaxDetail;
    /**
     * @description Custom fields
     */
    CustomField?: CustomField[];
    /**
     * @description Shipping address
     */
    ShipAddr?: PhysicalAddress;
    /**
     * @description Email status
     * @allowedValues NotSet, NeedToSend, EmailSent
     */
    EmailStatus?: string;
    /**
     * @description Billing address
     */
    BillAddr?: PhysicalAddress;
    /**
     * @description Billing email
     */
    BillEmail?: EmailAddress;
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for CreditMemo
     * @param apiClient - The API client
     * @param creditMemoCreationData - The data for the credit memo
     */
    constructor(apiClient: ApiClient, creditMemoCreationData: CreditMemoCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the CreditMemo Data
     * @throws {QuickbooksError} If the CreditMemo was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the CreditMemo
     */
    save(): Promise<void>;
    /**
     * @description Sends the CreditMemo via email
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the send fails
     */
    send(): Promise<void>;
    /**
     * @description Downloads the CreditMemo as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the download fails
     */
    downloadPDF(): Promise<Blob>;
    /**
     * @description Voids the CreditMemo
     * @throws {QuickbooksError} If the CreditMemo ID is not set or the void fails
     */
    void(): Promise<void>;
}
export type CreditMemoCreationData = {
    CustomerRef: ReferenceType;
    Line: CreditMemoLine[];
};
