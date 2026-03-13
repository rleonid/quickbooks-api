/**
 * The Quickbooks Error Class
 */
export class QuickbooksError extends Error {
    /**
     * The Intuit Error Details
     */
    details;
    /**
     * Initialize the Quickbooks Error
     * @param message The error message
     * @param details The Intuit error details
     */
    constructor(message, details) {
        // Initialize the Error
        super(message);
        // Set the Intuit Error Details
        this.details = details;
    }
}
