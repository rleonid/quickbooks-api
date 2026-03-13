// Import the Types
import { ApiClient } from '../../packages/api/api-client.js';
import { QuickbooksError } from '../types.js';
/**
 * Preferences
 *
 * @description
 * The Preferences Object (read-only, retrieved via API)
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/preferences}
 */
export class Preferences {
    /**
     * @description The API client used to make requests to the API to manage the Preferences object
     */
    apiClient;
    // Setup the Readonly Properties
    /**
     * @description Unique identifier for this object
     * @readonly @systemDefined
     */
    Id;
    /**
     * @description Version number for update tracking
     * @readonly @systemDefined
     */
    SyncToken;
    /**
     * @description System-defined metadata. Read-only
     */
    MetaData;
    /**
     * @description Email messages preferences
     * @readonly
     */
    EmailMessagesPrefs;
    /**
     * @description Product and services preferences
     * @readonly
     */
    ProductAndServicesPrefs;
    /**
     * @description Domain of the data source
     */
    domain;
    /**
     * @description Report preferences
     * @readonly
     */
    ReportPrefs;
    /**
     * @description Accounting info preferences
     * @readonly
     */
    AccountingInfoPrefs;
    /**
     * @description Sales forms preferences
     * @readonly
     */
    SalesFormsPrefs;
    /**
     * @description Vendor and purchases preferences
     * @readonly
     */
    VendorAndPurchasesPrefs;
    /**
     * @description Tax preferences
     * @readonly
     */
    TaxPrefs;
    /**
     * @description Other preferences
     * @readonly
     */
    OtherPrefs;
    /**
     * @description Sparse update flag
     */
    sparse;
    /**
     * @description Time tracking preferences
     * @readonly
     */
    TimeTrackingPrefs;
    /**
     * @description Currency preferences
     * @readonly
     */
    CurrencyPrefs;
    /**
     * @description Constructor for Preferences
     * @param apiClient - The API client
     * @param preferencesData - The preferences data (typically from API response)
     */
    constructor(apiClient, preferencesData) {
        // Set the API Client
        this.apiClient = apiClient;
        // Initialize readonly properties
        this.Id = null;
        this.SyncToken = null;
        this.domain = null;
        this.sparse = null;
        // Initialize all properties from the data
        if (preferencesData) {
            Object.assign(this, preferencesData);
        }
    }
    /**
     * @description Set the API Client
     * @param apiClient - The API client
     */
    setApiClient(apiClient) {
        this.apiClient = apiClient;
    }
    /**
     * @description Reload the Preferences Data
     * @throws {QuickbooksError} If the Preferences was not found
     */
    async reload() {
        // Get the Preferences
        const result = await this.apiClient.preferences.getPreferences();
        // Check if the Preferences was not Found
        if (!result.results || result.results.length === 0) {
            throw new QuickbooksError('Preferences not found', await ApiClient.getIntuitErrorDetails(null));
        }
        // Assign the Properties (Preferences typically returns an array, get the first)
        Object.assign(this, result.results[0]);
    }
}
