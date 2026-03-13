import { Payment, type PaymentOptions } from '../../../../types/types.js';
import { PaymentAPI } from '../payment-api.js';
/**
 * Get Payment by ID
 * @param this - The Payment API
 * @param id - The ID of the payment
 * @returns The Payment
 */
export declare function getPaymentById(this: PaymentAPI, id: string, options?: PaymentOptions): Promise<{
    payment: Payment | null;
    intuitTID: string;
}>;
