// Imports
import { APIUrls } from './api-urls';
/**
 * The Endpoints for the API
 */
export var Endpoints;
(function (Endpoints) {
    // Auth Related Endpoints
    Endpoints["UserAuth"] = "https://appcenter.intuit.com/connect/oauth2/companyselection";
    Endpoints["TokenBearer"] = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
    Endpoints["TokenRevoke"] = "https://developer.api.intuit.com/v2/oauth2/tokens/revoke";
    // OpenID Connect Endpoints
    Endpoints["SandboxUserInfo"] = "https://sandbox-accounts.platform.intuit.com/v1/openid_connect/userinfo";
    Endpoints["ProductionUserInfo"] = "https://accounts.platform.intuit.com/v1/openid_connect/userinfo";
    // API Related Endpoints
    Endpoints["SandboxCompanyApi"] = "https://sandbox-quickbooks.api.intuit.com/v3/company";
    Endpoints["ProductionCompanyApi"] = "https://quickbooks.api.intuit.com/v3/company";
})(Endpoints || (Endpoints = {}));
