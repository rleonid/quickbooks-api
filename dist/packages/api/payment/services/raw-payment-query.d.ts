import { PaymentAPI } from '../payment-api.js';
import type { PaymentQueryBuilder } from '../payment-query-builder.js';
import type { Payment, SearchResponse } from '../../../../types/types.js';
/**
 * Raw Payment Query
 * @param this - The Payment API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawPaymentQuery(this: PaymentAPI, queryBuilder: PaymentQueryBuilder): Promise<SearchResponse<Payment>>;
