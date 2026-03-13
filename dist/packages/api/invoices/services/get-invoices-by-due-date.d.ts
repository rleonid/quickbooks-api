import { Invoice, type InvoiceOptions, type SearchResponse } from '../../../../types/types.js';
import { InvoiceAPI } from '../invoice-api.js';
/**
 * Get Invoices by Due Date
 * @param this - The Invoice API
 * @param dueDate - The due date to filter by
 * @returns Filtered Invoices
 */
export declare function getInvoicesByDueDate(this: InvoiceAPI, dueDate: Date, options?: InvoiceOptions): Promise<SearchResponse<Invoice>>;
