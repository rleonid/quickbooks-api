import { Invoice, type InvoiceOptions, type SearchResponse } from '../../../../types/types';
import { InvoiceAPI } from '../invoice-api';
/**
 * Get Updated Invoices
 * @param this - The Invoice API
 * @param lastUpdatedDate - The last updated date
 * @returns The Invoices
 */
export declare function getUpdatedInvoices(this: InvoiceAPI, lastUpdatedDate: Date, options?: InvoiceOptions): Promise<SearchResponse<Invoice>>;
