/**
 * Raw Company Info Query
 * @param this - The Company Info API
 * @param query - The Raw Query
 * @returns The Company Info
 */
export async function rawCompanyInfoQuery(query) {
    // Get the Company Endpoint
    const companyEndpoint = await this.getCompanyEndpoint();
    // Setup the URL
    const url = `${companyEndpoint}/query?query=${encodeURIComponent(query)}`;
    // Get the Company Info
    const { responseData, intuitTID } = await this.apiClient.runRequest(url, { method: 'GET' });
    // Format the Response
    const companyInfo = await this.formatResponse(responseData);
    // Return the Company Info with Intuit TID
    return {
        companyInfo,
        intuitTID,
    };
}
