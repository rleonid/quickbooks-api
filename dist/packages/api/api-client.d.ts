import { AuthProvider } from '../auth/auth-provider';
import { Environment, IntuitErrorData } from '../../types/types';
import { InvoiceAPI } from './invoices/invoice-api';
import { EstimateAPI } from './estimates/estimate-api';
import { CustomerAPI } from './customer/customer-api';
import { PaymentAPI } from './payment/payment-api';
import { AccountAPI } from './account/account-api';
import { PreferenceAPI } from './preferences/preference-api';
import { CreditMemoAPI } from './credit-memo/credit-memo-api';
import { CompanyInfoAPI } from './company-info/company-info-api';
import { BillAPI } from './bill/bill-api';
import { RecurringTransactionAPI } from './recurring-transaction/recurring-transaction-api';
/**
 * API Client
 */
export declare class ApiClient {
    readonly authProvider: AuthProvider;
    readonly environment: Environment;
    /**
     * Customer API
     */
    customers: CustomerAPI;
    /**
     * Invoices API
     */
    invoices: InvoiceAPI;
    /**
     * Credit Memo API
     */
    creditMemos: CreditMemoAPI;
    /**
     * Estimates API
     */
    estimates: EstimateAPI;
    /**
     * Payments API
     */
    payments: PaymentAPI;
    /**
     * Accounts API
     */
    accounts: AccountAPI;
    /**
     * Preferences API
     */
    preferences: PreferenceAPI;
    /**
     * Company Info API
     */
    companyInfo: CompanyInfoAPI;
    /**
     * Bills API
     */
    bills: BillAPI;
    /**
     * RecurringTransactions API
     */
    recurringTransactions: RecurringTransactionAPI;
    /**
     * Automatically check for a next page (This creates an extra query to the API to check if there is a next page)
     */
    autoCheckNextPage: boolean;
    /**
     * Constructor

     * @param authProvider - The Auth Provider
     */
    constructor(authProvider: AuthProvider, environment: Environment);
    /**
     * Runs a Request

     * @param url - The URL to run the request on
     * @param headers - The headers to run the request on
     * @returns {AuthProvider} The Auth Provider
     */
    runRequest(url: string, requestInit: RequestInit): Promise<{
        response: Response;
        responseData: any;
        intuitTID: string;
    }>;
    /**
     * Gets the Intuit error details from the response
     * @param response The response to get the Intuit error details from
     * @returns {IntuitErrorData} The Intuit error details
     */
    static getIntuitErrorDetails(response: Response | null): Promise<IntuitErrorData>;
}
