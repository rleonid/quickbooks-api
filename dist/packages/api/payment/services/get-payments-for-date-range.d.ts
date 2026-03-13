import { type Payment, type PaymentOptions, type SearchResponse } from '../../../../types/types';
import { PaymentAPI } from '../payment-api';
/**
 * Get Payments for a Date Range
 * @param this - The Payment API
 * @param startDate - The start date
 * @param endDate - The end date
 * @returns The Payments
 */
export declare function getPaymentsForDateRange(this: PaymentAPI, startDate: Date, endDate: Date, options?: PaymentOptions): Promise<SearchResponse<Payment>>;
