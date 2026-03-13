import type { Payment, PaymentOptions, SearchResponse } from '../../../../types/types.js';
import { PaymentAPI } from '../payment-api.js';
/**
 * Get Payments by Due Date
 * @param this - The Payment API
 * @param dueDate - The due date to filter by
 * @returns Filtered Payments
 */
export declare function getPaymentsByDueDate(this: PaymentAPI, dueDate: Date, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
