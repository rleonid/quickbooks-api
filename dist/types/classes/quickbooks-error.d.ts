import { IntuitErrorData } from '../types';
/**
 * The Quickbooks Error Class
 */
export declare class QuickbooksError extends Error {
    /**
     * The Intuit Error Details
     */
    readonly details: IntuitErrorData;
    /**
     * Initialize the Quickbooks Error
     * @param message The error message
     * @param details The Intuit error details
     */
    constructor(message: string, details: IntuitErrorData);
}
