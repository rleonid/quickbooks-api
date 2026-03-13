import { Invoice, type SearchResponse, type InvoiceOptions } from '../../../../types/types';
import { InvoiceAPI } from '../invoice-api';
/**
 * Get All Invoices
 * @param this - The Invoice API
 * @returns The Invoices
 */
export declare function getAllInvoices(this: InvoiceAPI, options?: InvoiceOptions): Promise<SearchResponse<Invoice>>;
