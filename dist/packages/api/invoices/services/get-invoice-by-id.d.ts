import { Invoice, InvoiceOptions } from '../../../../types/types';
import { InvoiceAPI } from '../invoice-api';
/**
 * Get Invoice by ID
 * @param this - The Invoice API
 * @param id - The ID of the invoice
 * @returns The Invoice
 */
export declare function getInvoiceById(this: InvoiceAPI, id: string, options?: InvoiceOptions): Promise<{
    invoice: Invoice | null;
    intuitTID: string;
}>;
