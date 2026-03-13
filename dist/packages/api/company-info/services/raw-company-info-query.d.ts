import type { CompanyInfo } from '../../../../types/types.js';
import { CompanyInfoAPI } from '../company-info-api.js';
/**
 * Raw Company Info Query
 * @param this - The Company Info API
 * @param query - The Raw Query
 * @returns The Company Info
 */
export declare function rawCompanyInfoQuery(this: CompanyInfoAPI, query: string): Promise<{
    companyInfo: CompanyInfo;
    intuitTID: string;
}>;
