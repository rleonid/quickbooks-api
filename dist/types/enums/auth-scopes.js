/**
 * The the list of available scopes for the application
 */
export var AuthScopes;
(function (AuthScopes) {
    AuthScopes["Accounting"] = "com.intuit.quickbooks.accounting";
    AuthScopes["Payment"] = "com.intuit.quickbooks.payment";
    AuthScopes["OpenId"] = "openid";
    AuthScopes["Profile"] = "profile";
    AuthScopes["Email"] = "email";
    AuthScopes["Phone"] = "phone";
    AuthScopes["Address"] = "address";
})(AuthScopes || (AuthScopes = {}));
