import { InvoiceAPI } from '../invoice-api';
import type { InvoiceQueryBuilder } from '../invoice-query-builder';
import { Invoice, type SearchResponse } from '../../../../types/types';
/**
 * Raw Invoice Query
 * @param this - The Invoice API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawInvoiceQuery(this: InvoiceAPI, queryBuilder: InvoiceQueryBuilder): Promise<SearchResponse<Invoice>>;
