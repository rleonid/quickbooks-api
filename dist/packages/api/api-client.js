import { IntuitFaultCodes, IntuitFaultType, QuickbooksError, } from '../../types/types.js';
import { InvoiceAPI } from './invoices/invoice-api.js';
import { EstimateAPI } from './estimates/estimate-api.js';
import { CustomerAPI } from './customer/customer-api.js';
import { PaymentAPI } from './payment/payment-api.js';
import { AccountAPI } from './account/account-api.js';
import { PreferenceAPI } from './preferences/preference-api.js';
import { CreditMemoAPI } from './credit-memo/credit-memo-api.js';
import { CompanyInfoAPI } from './company-info/company-info-api.js';
import { BillAPI } from './bill/bill-api.js';
import { RecurringTransactionAPI } from './recurring-transaction/recurring-transaction-api.js';
/**
 * API Client
 */
export class ApiClient {
    authProvider;
    environment;
    /**
     * Customer API
     */
    customers;
    /**
     * Invoices API
     */
    invoices;
    /**
     * Credit Memo API
     */
    creditMemos;
    /**
     * Estimates API
     */
    estimates;
    /**
     * Payments API
     */
    payments;
    /**
     * Accounts API
     */
    accounts;
    /**
     * Preferences API
     */
    preferences;
    /**
     * Company Info API
     */
    companyInfo;
    /**
     * Bills API
     */
    bills;
    /**
     * RecurringTransactions API
     */
    recurringTransactions;
    /**
     * Automatically check for a next page (This creates an extra query to the API to check if there is a next page)
     */
    autoCheckNextPage = true;
    /**
     * Constructor

     * @param authProvider - The Auth Provider
     */
    constructor(authProvider, environment) {
        this.authProvider = authProvider;
        this.environment = environment;
        // Initialize the API's
        this.invoices = new InvoiceAPI(this);
        this.customers = new CustomerAPI(this);
        this.estimates = new EstimateAPI(this);
        this.accounts = new AccountAPI(this);
        this.payments = new PaymentAPI(this);
        this.preferences = new PreferenceAPI(this);
        this.creditMemos = new CreditMemoAPI(this);
        this.companyInfo = new CompanyInfoAPI(this);
        this.bills = new BillAPI(this);
        this.recurringTransactions = new RecurringTransactionAPI(this);
    }
    /**
     * Runs a Request

     * @param url - The URL to run the request on
     * @param headers - The headers to run the request on
     * @returns {AuthProvider} The Auth Provider
     */
    async runRequest(url, requestInit) {
        // Get the Token
        const token = await this.authProvider.getToken();
        // Setup the Request Data
        requestInit.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate',
            Authorization: `Bearer ${token.accessToken}`,
            ...requestInit.headers,
        };
        // Run the Request
        const response = await fetch(url, requestInit);
        // Check if the Response has failed
        if (!response.ok) {
            // Get the Intuit Error Details
            const errorDetails = await ApiClient.getIntuitErrorDetails(response);
            // Throw the Quickbooks Error
            throw new QuickbooksError(`Failed to run request`, errorDetails);
        }
        // Check if the response is an Object and if it is, parse it as JSON
        const responseData = response.headers.get('Content-Type')?.includes('application/json') ? await response.json() : null;
        // Get the Intuit Transaction ID
        const intuitTID = response.headers.get('intuit_tid') ?? '0-00000000-000000000000000000000000';
        // Return the Response Data and Response Object
        return { response, responseData, intuitTID };
    }
    /**
     * Gets the Intuit error details from the response
     * @param response The response to get the Intuit error details from
     * @returns {IntuitErrorData} The Intuit error details
     */
    static async getIntuitErrorDetails(response) {
        // Setup the Default Response Data
        const unknownResponseData = {
            fault: {
                error: [{ message: 'Unknown Error', detail: 'Unknown Error', code: IntuitFaultCodes.UnknownError }],
                type: IntuitFaultType.UnknownFault,
            },
            time: new Date(),
        };
        // Get the Response Data
        const responseData = (await response?.json().catch(() => null)) ?? unknownResponseData;
        // Get the Fault
        const fault = responseData.Fault ?? responseData.fault;
        // Setup the Error Items (Mapped to the lowercase version)
        let mappedErrors = responseData.fault?.error ?? new Array();
        // Check if the Fault is the old version and if it is, map the Error Objects to the lowercase version
        if (responseData.Fault)
            mappedErrors = responseData.Fault.Error.map((error) => ({
                message: error.Message,
                detail: error.Detail,
                code: parseInt(String(error.code)), // We need to parse the error code as a string to an integer as a number gets returned from the API
            }));
        // Get the Intuit Error Code
        const errorDetails = {
            statusCode: response?.status ?? 0,
            intuitError: mappedErrors,
            intuitTID: response?.headers.get('intuit_tid') ?? '	0-00000000-000000000000000000000000',
            type: fault?.type ?? IntuitFaultType.UnknownFault,
        };
        // Return the Intuit Error Details
        return errorDetails;
    }
}
