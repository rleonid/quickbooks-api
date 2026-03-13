import type { Payment, PaymentOptions, SearchResponse } from '../../../../types/types.js';
import { PaymentAPI } from '../payment-api.js';
/**
 * Get All Payments
 * @param this - The Payment API
 * @returns The Payments
 */
export declare function getAllPayments(this: PaymentAPI, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
