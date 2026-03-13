import { PaymentAPI } from '../payment-api';
import type { PaymentQueryBuilder } from '../payment-query-builder';
import type { Payment, SearchResponse } from '../../../../types/types';
/**
 * Raw Payment Query
 * @param this - The Payment API
 * @param queryBuilder - The query builder to use
 * @returns Custom query results
 */
export declare function rawPaymentQuery(this: PaymentAPI, queryBuilder: PaymentQueryBuilder): Promise<SearchResponse<Payment>>;
