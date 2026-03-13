import { ApiClient } from '../../packages/api/api-client';
import { ModificationMetadata } from '../types';
/**
 * Preferences
 *
 * @description
 * The Preferences Object (read-only, retrieved via API)
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/preferences}
 */
export declare class Preferences {
    /**
     * @description The API client used to make requests to the API to manage the Preferences object
     */
    private apiClient;
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     */
    readonly Id: string;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     */
    readonly SyncToken: string;
    /**
     * @description System-defined metadata. Read-only
     */
    readonly MetaData?: ModificationMetadata;
    /**
     * @description Email messages preferences
     * @readonly
     */
    readonly EmailMessagesPrefs?: {
        InvoiceMessage?: {
            Message?: string;
            Subject?: string;
        };
        EstimateMessage?: {
            Message?: string;
            Subject?: string;
        };
        SalesReceiptMessage?: {
            Message?: string;
            Subject?: string;
        };
        StatementMessage?: {
            Message?: string;
            Subject?: string;
        };
    };
    /**
     * @description Product and services preferences
     * @readonly
     */
    readonly ProductAndServicesPrefs?: {
        QuantityWithPriceAndRate?: boolean;
        ForPurchase?: boolean;
        QuantityOnHand?: boolean;
        ForSales?: boolean;
    };
    /**
     * @description Domain of the data source
     */
    readonly domain: string;
    /**
     * @description Report preferences
     * @readonly
     */
    readonly ReportPrefs?: {
        ReportBasis?: string;
        CalcAgingReportFromTxnDate?: boolean;
    };
    /**
     * @description Accounting info preferences
     * @readonly
     */
    readonly AccountingInfoPrefs?: {
        FirstMonthOfFiscalYear?: string;
        UseAccountNumbers?: boolean;
        TaxYearMonth?: string;
        ClassTrackingPerTxn?: boolean;
        TrackDepartments?: boolean;
        TaxForm?: string;
        CustomerTerminology?: string;
        BookCloseDate?: string;
        DepartmentTerminology?: string;
        ClassTrackingPerTxnLine?: boolean;
    };
    /**
     * @description Sales forms preferences
     * @readonly
     */
    readonly SalesFormsPrefs?: {
        ETransactionPaymentEnabled?: boolean;
        CustomTxnNumbers?: boolean;
        AllowShipping?: boolean;
        AllowServiceDate?: boolean;
        ETransactionEnabledStatus?: string;
        DefaultCustomerMessage?: string;
        EmailCopyToCompany?: boolean;
        AllowEstimates?: boolean;
        DefaultTerms?: {
            value?: string;
        };
        AllowDiscount?: boolean;
        DefaultDiscountAccount?: string;
        AllowDeposit?: boolean;
        AutoApplyPayments?: boolean;
        IPNSupportEnabled?: boolean;
        AutoApplyCredit?: boolean;
        CustomField?: Array<{
            CustomField?: Array<{
                BooleanValue?: boolean;
                Type?: string;
                Name?: string;
                StringValue?: string;
            }>;
        }>;
        UsingPriceLevels?: boolean;
        ETransactionAttachPDF?: boolean;
    };
    /**
     * @description Vendor and purchases preferences
     * @readonly
     */
    readonly VendorAndPurchasesPrefs?: {
        BillableExpenseTracking?: boolean;
        TrackingByCustomer?: boolean;
        POCustomField?: Array<{
            CustomField?: Array<{
                BooleanValue?: boolean;
                Type?: string;
                Name?: string;
                StringValue?: string;
            }>;
        }>;
    };
    /**
     * @description Tax preferences
     * @readonly
     */
    readonly TaxPrefs?: {
        TaxGroupCodeRef?: {
            value?: string;
        };
        UsingSalesTax?: boolean;
    };
    /**
     * @description Other preferences
     * @readonly
     */
    readonly OtherPrefs?: {
        NameValue?: Array<{
            Name?: string;
            Value?: string;
        }>;
    };
    /**
     * @description Sparse update flag
     */
    readonly sparse: boolean;
    /**
     * @description Time tracking preferences
     * @readonly
     */
    readonly TimeTrackingPrefs?: {
        WorkWeekStartDate?: string;
        MarkTimeEntriesBillable?: boolean;
        ShowBillRateToAll?: boolean;
        UseServices?: boolean;
        BillCustomers?: boolean;
    };
    /**
     * @description Currency preferences
     * @readonly
     */
    readonly CurrencyPrefs?: {
        HomeCurrency?: {
            value?: string;
        };
        MultiCurrencyEnabled?: boolean;
    };
    /**
     * @description Constructor for Preferences
     * @param apiClient - The API client
     * @param preferencesData - The preferences data (typically from API response)
     */
    constructor(apiClient: ApiClient, preferencesData?: Partial<Preferences>);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the Preferences Data
     * @throws {QuickbooksError} If the Preferences was not found
     */
    reload(): Promise<void>;
}
