/**
 * The Avaialble Endpoints for the Auth Provider
 */
export var APIUrls;
(function (APIUrls) {
    // Auth Related URL's
    APIUrls["Issuer"] = "https://oauth.platform.intuit.com/op/v1";
    APIUrls["UserAuth"] = "https://appcenter.intuit.com";
    APIUrls["OAuth2"] = "https://oauth.platform.intuit.com/oauth2/v1";
    APIUrls["OAuthDeveloper"] = "https://developer.api.intuit.com/v2/oauth2";
    APIUrls["JWKS"] = "https://oauth.platform.intuit.com/op/v1/jwks";
    // OpenID Connect URL's
    APIUrls["SandboxPlatform"] = "https://sandbox-accounts.platform.intuit.com/v1";
    APIUrls["ProductionPlatform"] = "https://accounts.platform.intuit.com/v1";
    // API Related URL's
    APIUrls["SandboxApiBaseUrl"] = "https://sandbox-quickbooks.api.intuit.com/v3";
    APIUrls["ProductionApiBaseUrl"] = "https://quickbooks.api.intuit.com/v3";
})(APIUrls || (APIUrls = {}));
