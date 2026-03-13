import { Account, Bill, CompanyInfo, CreditMemo, Customer, Estimate, Invoice, InvoiceStatus, Payment, Preferences, RecurringTransaction, SearchOptions } from '../types.js';
export interface InvoiceOptions extends Options<Invoice> {
    status?: InvoiceStatus;
}
export interface EstimateOptions extends Options<Estimate> {
}
export interface CustomerOptions extends Options<Customer> {
}
export interface PaymentOptions extends Options<Payment> {
}
export interface AccountOptions extends Options<Account> {
}
export interface CreditMemoOptions extends Options<CreditMemo> {
}
export interface CompanyInfoOptions extends Options<CompanyInfo> {
}
export interface PreferenceOptions extends Options<Preferences> {
}
export interface BillOptions extends Options<Bill> {
}
export interface RecurringTransactionOptions extends Options<RecurringTransaction> {
}
export interface Options<T> {
    searchOptions?: SearchOptions<T>;
}
