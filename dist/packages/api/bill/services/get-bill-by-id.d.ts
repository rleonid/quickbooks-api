import { Bill } from '../../../../types/types';
import { BillAPI } from '../bill-api';
/**
 * Get Bill by ID
 * @param this - The Bill API
 * @param id - The ID of the bill
 * @returns The Bill
 */
export declare function getBillById(this: BillAPI, id: string): Promise<{
    bill: Bill | null;
    intuitTID: string;
}>;
