import { CompanyInfoOptions } from '../../../../types/interfaces/options.js';
import { CompanyInfo } from '../../../../types/types.js';
import { CompanyInfoAPI } from '../company-info-api.js';
/**
 * Get Company Info
 * @param this - The Company Info API
 * @param options - The Search Options
 * @returns The Company Info
 */
export declare function getCompanyInfo(this: CompanyInfoAPI, options?: CompanyInfoOptions): Promise<{
    companyInfo: CompanyInfo | undefined;
    intuitTID: string;
}>;
