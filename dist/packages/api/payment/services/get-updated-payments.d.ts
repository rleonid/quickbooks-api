import type { Payment, PaymentOptions, SearchResponse } from '../../../../types/types.js';
import { PaymentAPI } from '../payment-api.js';
/**
 * Get Updated Payments
 * @param this - The Payment API
 * @param lastUpdatedDate - The last updated date
 * @returns The Payments
 */
export declare function getUpdatedPayments(this: PaymentAPI, lastUpdatedDate: Date, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
