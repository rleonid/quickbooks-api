import { Invoice, type SearchResponse, type InvoiceOptions } from '../../../../types/types.js';
import { InvoiceAPI } from '../invoice-api.js';
/**
 * Get All Invoices
 * @param this - The Invoice API
 * @returns The Invoices
 */
export declare function getAllInvoices(this: InvoiceAPI, options?: InvoiceOptions): Promise<SearchResponse<Invoice>>;
