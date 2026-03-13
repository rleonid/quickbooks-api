import type { Payment, PaymentOptions, SearchResponse } from '../../../../types/types';
import { PaymentAPI } from '../payment-api';
/**
 * Get Payments by Due Date
 * @param this - The Payment API
 * @param dueDate - The due date to filter by
 * @returns Filtered Payments
 */
export declare function getPaymentsByDueDate(this: PaymentAPI, dueDate: Date, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
