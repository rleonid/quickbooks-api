import { Invoice, type InvoiceOptions, type SearchResponse } from '../../../../types/types';
import { InvoiceAPI } from '../invoice-api';
/**
 * Get Invoices for a Date Range
 * @param this - The Invoice API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Invoices
 */
export declare function getInvoicesForDateRange(this: InvoiceAPI, startDate: Date, endDate: Date, options?: InvoiceOptions): Promise<SearchResponse<Invoice>>;
