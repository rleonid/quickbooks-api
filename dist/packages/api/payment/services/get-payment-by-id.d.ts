import { Payment, type PaymentOptions } from '../../../../types/types';
import { PaymentAPI } from '../payment-api';
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
