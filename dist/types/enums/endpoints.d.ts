/**
 * The Endpoints for the API
 */
export declare enum Endpoints {
    UserAuth = "https://appcenter.intuit.com/connect/oauth2/companyselection",
    TokenBearer = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
    TokenRevoke = "https://developer.api.intuit.com/v2/oauth2/tokens/revoke",
    SandboxUserInfo = "https://sandbox-accounts.platform.intuit.com/v1/openid_connect/userinfo",
    ProductionUserInfo = "https://accounts.platform.intuit.com/v1/openid_connect/userinfo",
    SandboxCompanyApi = "https://sandbox-quickbooks.api.intuit.com/v3/company",
    ProductionCompanyApi = "https://quickbooks.api.intuit.com/v3/company"
}
