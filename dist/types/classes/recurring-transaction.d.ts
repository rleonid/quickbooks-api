import { ApiClient } from '../../packages/api/api-client';
import { type ModificationMetadata } from '../types';
import type { RecurringInfo, RecurringInvoice, RecurringBill } from '../interfaces/recurring-transaction';
/**
 * RecurringTransaction
 *
 * @description The RecurringTransaction Object — a template that QBO uses to
 * automatically (or on reminder) create recurring invoices, bills, etc.
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/recurringtransaction}
 */
export declare class RecurringTransaction {
    /**
     * @description The API client used to make requests to the API
     */
    private apiClient;
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
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
     * @description Schedule and recurrence configuration
     */
    RecurringInfo: RecurringInfo;
    /**
     * @description Invoice template (present when the recurring transaction wraps an Invoice)
     */
    Invoice?: RecurringInvoice;
    /**
     * @description Bill template (present when the recurring transaction wraps a Bill)
     */
    Bill?: RecurringBill;
    /**
     * @description Domain of the data source
     */
    domain?: string;
    /**
     * @description Sparse update flag
     */
    sparse?: boolean;
    /**
     * @description Constructor for RecurringTransaction
     * @param apiClient - The API client
     * @param creationData - The data for the recurring transaction
     */
    constructor(apiClient: ApiClient, creationData: RecurringTransactionCreationData);
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient: ApiClient): void;
    /**
     * @description Reload the RecurringTransaction Data
     * @throws {QuickbooksError} If the RecurringTransaction was not found
     */
    reload(): Promise<void>;
    /**
     * @description Custom JSON serialization to exclude private properties
     */
    private toJSON;
    /**
     * @description Updates or creates (if the Id is not set) the RecurringTransaction
     */
    save(): Promise<void>;
    /**
     * @description Deletes the RecurringTransaction
     * @throws {QuickbooksError} If the RecurringTransaction ID is not set
     */
    delete(): Promise<void>;
}
export type RecurringTransactionCreationData = {
    RecurringInfo: RecurringInfo;
    Invoice?: RecurringInvoice;
    Bill?: RecurringBill;
};
