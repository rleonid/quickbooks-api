import type { Payment, PaymentOptions, SearchResponse } from '../../../../types/types';
import { PaymentAPI } from '../payment-api';
/**
 * Get All Payments
 * @param this - The Payment API
 * @returns The Payments
 */
export declare function getAllPayments(this: PaymentAPI, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
