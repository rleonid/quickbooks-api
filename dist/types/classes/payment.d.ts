import { ApiClient } from '../../packages/api/api-client.js';
import { ReferenceType, ModificationMetadata, LinkedTxn } from '../types.js';
/**
 * Payment Line
 */
export interface PaymentLine {
    Amount: number;
    LineEx?: {
        any?: Array<{
            name: string;
            nil: boolean;
            value: {
                Name: string;
                Value: string;
            };
            declaredType: string;
            scope: string;
            globalScope: boolean;
            typeSubstituted: boolean;
        }>;
    };
    LinkedTxn: LinkedTxn[];
}
/**
 * Payment
 *
 * @description
 * The Payment Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment}
 */
export declare class Payment {
    /**
     * @description The API client used to make requests to the API to manage the Payment object
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
     * @description Unapplied amount (read-only)
     * @readonly
     */
    readonly UnappliedAmt?: number;
    /**
     * @description Customer reference (required)
     * @filterable
     */
    CustomerRef: ReferenceType;
    /**
     * @description Deposit to account reference (required)
     */
    DepositToAccountRef: ReferenceType;
    /**
     * @description Transaction line items (required)
     * @required
     */
    Line: PaymentLine[];
    /**
     * @description Transaction date (yyyy-MM-dd)
     * @filterable
     * @sortable
     */
    TxnDate?: string;
    /**
     * @description Process payment immediately
     */
    ProcessPayment?: boolean;
    /**
     * @description Project reference
     * @filterable
     */
    ProjectRef?: ReferenceType;
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for Payment
     * @param apiClient - The API client
     * @param paymentCreationData - The data for the payment
     */
    constructor(apiClient: ApiClient, paymentCreationData: PaymentCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Payment Data
     * @throws {QuickbooksError} If the Payment was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the Payment
     */
    save(): Promise<void>;
    /**
     * @description Downloads the Payment as a PDF
     * @returns {Promise<Blob>} The PDF file as a Blob
     * @throws {QuickbooksError} If the Payment ID is not set or the download fails
     */
    downloadPDF(): Promise<Blob>;
    /**
     * @description Voids the Payment
     * @throws {QuickbooksError} If the Payment ID is not set or the void fails
     */
    void(): Promise<void>;
}
export type PaymentCreationData = {
    CustomerRef: ReferenceType;
    DepositToAccountRef: ReferenceType;
    Line: PaymentLine[];
};
