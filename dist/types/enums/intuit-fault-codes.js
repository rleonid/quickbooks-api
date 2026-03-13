/**
 * The Intuit Fault Codes Enum
 */
export var IntuitFaultCodes;
(function (IntuitFaultCodes) {
    /**
     * Unknown Error
     */
    IntuitFaultCodes[IntuitFaultCodes["UnknownError"] = -1] = "UnknownError";
    /**
     * Success response
     */
    IntuitFaultCodes[IntuitFaultCodes["Success"] = 0] = "Success";
    /**
     * General Authentication Error
     * Review the XXX error code and follow its recommendation. AuthenticationErrorGeneral: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["GeneralAuthenticationError"] = 100] = "GeneralAuthenticationError";
    /**
     * Authentication OAuth Error
     * Review the XXX error code and follow its recommendation. AuthenticationOAuthError: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["AuthenticationOAuthError"] = 110] = "AuthenticationOAuthError";
    /**
     * Authorization Failure
     * This means an accountant user was deleted from a QuickBooks Online company while the company was connected to your app. AuthorizationFailure: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["AuthorizationFailure"] = 120] = "AuthorizationFailure";
    /**
     * Accessing Wrong Cluster
     * Review the XXX error code and follow its recommendation. WrongClusterError: XXX, statusCode: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["AccessingWrongCluster"] = 130] = "AccessingWrongCluster";
    /**
     * Company Locked Out
     * Review the XXX error code and follow its recommendation. CompanyLockedOut: XXX, statusCode: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["CompanyLockedOut"] = 140] = "CompanyLockedOut";
    /**
     * Company Under Maintenance
     * Review the XXX error code and follow its recommendation. CompanyUnderMaintenance: XXX , statusCode: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["CompanyUnderMaintenance"] = 150] = "CompanyUnderMaintenance";
    /**
     * Unsupported operation
     * The operation you're trying to perform for a given entity isn't supported. Operation XXX is not supported.
     */
    IntuitFaultCodes[IntuitFaultCodes["UnsupportedOperation"] = 500] = "UnsupportedOperation";
    /**
     * Duplicate Request ID
     * The request ID you're trying to use already exists in the QuickBooks Online Accounting API or QuickBooks Payments API. Our system detected the duplicate.
     */
    IntuitFaultCodes[IntuitFaultCodes["DuplicateRequestId"] = 600] = "DuplicateRequestId";
    /**
     * Object Not Found
     * The object ID you're requesting doesn't exist.
     */
    IntuitFaultCodes[IntuitFaultCodes["ObjectNotFound"] = 610] = "ObjectNotFound";
    /**
     * Txn ID Cannot Be Linked
     * The Txn ID (identified by XXX) you're trying to use can't be linked.
     */
    IntuitFaultCodes[IntuitFaultCodes["TxnIdCannotBeLinked"] = 620] = "TxnIdCannotBeLinked";
    /**
     * Duplicate Object
     * There's already an object with some properties (for example, duplicate reference IDs). This violates the unique constraint of the object.
     */
    IntuitFaultCodes[IntuitFaultCodes["DuplicateObject"] = 630] = "DuplicateObject";
    /**
     * Parent Reference Invalid
     * The parent isn't a valid reference.
     */
    IntuitFaultCodes[IntuitFaultCodes["ParentReferenceInvalid"] = 700] = "ParentReferenceInvalid";
    /**
     * Cannot delete object
     * The object can't be deleted due to existing dependencies. Delete those dependencies first.
     */
    IntuitFaultCodes[IntuitFaultCodes["CannotDeleteObject"] = 800] = "CannotDeleteObject";
    /**
     * Parent cannot be child
     * The same object can't be the parent or child of itself.
     */
    IntuitFaultCodes[IntuitFaultCodes["ParentCannotBeChild"] = 900] = "ParentCannotBeChild";
    /**
     * Operation failed
     * The operation you're trying to perform failed for the entity (identified by XXX). Operation XXX failed.
     */
    IntuitFaultCodes[IntuitFaultCodes["OperationFailed"] = 1000] = "OperationFailed";
    /**
     * Create Failed
     * The object you tried to create wasn't created. Object creation failed, XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["CreateFailed"] = 1010] = "CreateFailed";
    /**
     * Update Failed
     * The object you tried to update wasn't updated. Object update failed, XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["UpdateFailed"] = 1020] = "UpdateFailed";
    /**
     * Batch size exceeds allowed limit
     * The batch size for the batch request or BatchItemRequest is too big. The batch limit size is stated by the XXX value.
     */
    IntuitFaultCodes[IntuitFaultCodes["BatchSizeExceedsAllowedLimit"] = 1040] = "BatchSizeExceedsAllowedLimit";
    /**
     * Invalid Content Type
     * This error occurs when messages are sent through the Java Message Service queue. We only support XML or JSON formats.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidContentType"] = 1050] = "InvalidContentType";
    /**
     * Invalid or unsupported object name
     * The specified object name is unsupported or invalid. Object Name: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidOrUnsupportedObjectName"] = 2000] = "InvalidOrUnsupportedObjectName";
    /**
     * Request has invalid or unsupported property
     * The specified property name (identified by XXX) is unsupported or invalid. Property Name: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["RequestHasInvalidOrUnsupportedProperty"] = 2010] = "RequestHasInvalidOrUnsupportedProperty";
    /**
     * Required param missing, need to supply the required value for the API
     * The required parameter is missing in the request. Required parameter XXX is missing.
     */
    IntuitFaultCodes[IntuitFaultCodes["RequiredParamMissing"] = 2020] = "RequiredParamMissing";
    /**
     * Invalid ID
     * IDs need to be a valid number. This error can be for any entity or operation. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidId"] = 2030] = "InvalidId";
    /**
     * Invalid String
     * An element contains invalid characters. Review the string. It may contain unsupported characters. Element contains invalid characters: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidString"] = 2040] = "InvalidString";
    /**
     * Invalid String Length
     * A specified string length is either too long or too short. Minimum and maximum length defined in the error response. Min: XXX, Max: XXX, Supplied length: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidStringLength"] = 2050] = "InvalidStringLength";
    /**
     * Invalid Date Format
     * The date format isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDateFormat"] = 2060] = "InvalidDateFormat";
    /**
     * Invalid Date
     * The date value must be a valid value. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDate"] = 2070] = "InvalidDate";
    /**
     * Invalid Number Format
     * The number format supplied isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidNumberFormat"] = 2080] = "InvalidNumberFormat";
    /**
     * Invalid Number
     * The number supplied is the correct format, but the value isn't supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidNumber"] = 2090] = "InvalidNumber";
    /**
     * Invalid Decimal Format
     * The decimal format isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDecimalFormat"] = 2100] = "InvalidDecimalFormat";
    /**
     * Invalid Decimal
     * The decimal supplied may be the correct format, but the value isn't supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDecimal"] = 2110] = "InvalidDecimal";
    /**
     * Invalid Type
     * The specified type isn't compatible or supported by the API. This error usually applies to entities that have categories or types. For example, items can have a "product" or "service" type.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidType"] = 2120] = "InvalidType";
    /**
     * Invalid Request Id Format
     * The format of request ID is invalid and not supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidRequestIdFormat"] = 2130] = "InvalidRequestIdFormat";
    /**
     * Invalid Amount
     * The amount value isn't supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidAmount"] = 2140] = "InvalidAmount";
    /**
     * Invalid Percent
     * The percent value is invalid and not supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidPercent"] = 2150] = "InvalidPercent";
    /**
     * Invalid Quantity
     * The quantity value is invalid and not supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidQuantity"] = 2160] = "InvalidQuantity";
    /**
     * Invalid Enumeration
     * The enumeration value is invalid and not supported by the API.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidEnumeration"] = 2170] = "InvalidEnumeration";
    /**
     * Invalid String Range
     * The string range isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidStringRange"] = 2180] = "InvalidStringRange";
    /**
     * Invalid Date Range
     * The date range isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDateRange"] = 2190] = "InvalidDateRange";
    /**
     * Malformed Website Address Format
     * The URL isn't in the correct format. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["MalformedWebsiteAddressFormat"] = 2200] = "MalformedWebsiteAddressFormat";
    /**
     * Invalid Email Address Format
     * The email address doesn't conform to RFC 822 syntax rules. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidEmailAddressFormat"] = 2210] = "InvalidEmailAddressFormat";
    /**
     * Invalid Currency Type
     * The specified currency type isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidCurrencyType"] = 2220] = "InvalidCurrencyType";
    /**
     * Invalid Boolean
     * The specified boolean value isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidBoolean"] = 2230] = "InvalidBoolean";
    /**
     * Invalid Number Range
     * The specified number isn't within the valid range. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidNumberRange"] = 2240] = "InvalidNumberRange";
    /**
     * Missing lines
     * You must enter at least one split line.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingLines"] = 2250] = "MissingLines";
    /**
     * MissingPostingType
     * A posting type is required. Valid values are Credit or Debit.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingPostingType"] = 2260] = "MissingPostingType";
    /**
     * MissingTaxApplicableOn
     * The TaxApplicableOn entity is required. Set it in the request payload. Valid values are Credit or Debit.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingTaxApplicableOn"] = 2270] = "MissingTaxApplicableOn";
    /**
     * MissingTaxAmount
     * A tax amount is required with TaxCodeRef applied.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingTaxAmount"] = 2280] = "MissingTaxAmount";
    /**
     * NegativeAmount
     * Negative amounts aren't supported on transaction lines.
     */
    IntuitFaultCodes[IntuitFaultCodes["NegativeAmount"] = 2290] = "NegativeAmount";
    /**
     * Amount on debits not equal to credits
     * A journal entry you created or updated unbalanced an account. Balance the debits and credits for the account.
     */
    IntuitFaultCodes[IntuitFaultCodes["AmountOnDebitsNotEqualToCredits"] = 2300] = "AmountOnDebitsNotEqualToCredits";
    /**
     * Invalid Reference Id
     * The reference ID is invalid: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidReferenceId"] = 2500] = "InvalidReferenceId";
    /**
     * Invalid Request Conflict Element in Request
     * Conflicting elements found in the request.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidRequestConflictElementInRequest"] = 2600] = "InvalidRequestConflictElementInRequest";
    /**
     * Invalid Custom Field
     * The custom field for the specified object isn't valid.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidCustomField"] = 3000] = "InvalidCustomField";
    /**
     * ApplicationAuthenticationFailed
     * The signature in the Oauth request has been changed and is now invalid. SignatureBaseString: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["ApplicationAuthenticationFailed"] = 3200] = "ApplicationAuthenticationFailed";
    /**
     * EmptyField
     * Review the error message for the cause of the issue. Related to oauth_token.
     */
    IntuitFaultCodes[IntuitFaultCodes["EmptyField"] = 3202] = "EmptyField";
    /**
     * The query cannot be parsed, refer to detailed message for reasons
     * Review the error message for the cause of the issue. Query Parser Error: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["QueryCannotBeParsed"] = 4000] = "QueryCannotBeParsed";
    /**
     * The query is invalid
     * Review the error message for the cause of the issue. QueryValidationError: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["QueryIsInvalid"] = 4001] = "QueryIsInvalid";
    /**
     * The query could not be processed due to unexpected errors
     * Review the error message for the cause of the issue. QueryProcessingError: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["QueryCouldNotBeProcessed"] = 4002] = "QueryCouldNotBeProcessed";
    /**
     * Deprecated field
     * The request has a deprecated field.
     */
    IntuitFaultCodes[IntuitFaultCodes["DeprecatedField"] = 5000] = "DeprecatedField";
    /**
     * Stale Object
     * The requested update is for a stale object. Client needs to refresh the object.
     */
    IntuitFaultCodes[IntuitFaultCodes["StaleObject"] = 5010] = "StaleObject";
    /**
     * Permission Denied
     * You don't have permissions to access this feature.
     */
    IntuitFaultCodes[IntuitFaultCodes["PermissionDenied"] = 5020] = "PermissionDenied";
    /**
     * Feature Not Supported
     * The requested feature isn't supported.
     */
    IntuitFaultCodes[IntuitFaultCodes["FeatureNotSupported"] = 5030] = "FeatureNotSupported";
    /**
     * Business Validation Error
     * Review the error message for the cause of the issue. BusinessValidationError: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["BusinessValidationError"] = 6000] = "BusinessValidationError";
    /**
     * Invalid Account.AccountType && Account.SubType
     * You must specify either an Account.AccountType or an Account.AccountSubType.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidAccountAccountTypeAndSubType"] = 6010] = "InvalidAccountAccountTypeAndSubType";
    /**
     * Content length missing in request
     * Can't find the content-length header.
     */
    IntuitFaultCodes[IntuitFaultCodes["ContentLengthMissingInRequest"] = 6020] = "ContentLengthMissingInRequest";
    /**
     * Upload request size exceeds allowed limit
     * The file size exceeds the size limit. Upload requests shouldn't exceed (XXX).
     */
    IntuitFaultCodes[IntuitFaultCodes["UploadRequestSizeExceedsAllowedLimit"] = 6030] = "UploadRequestSizeExceedsAllowedLimit";
    /**
     * The file metadata must be of Attachable type
     * The submitted file metadata must be attachable. Supplied Type: XXX. Request parameter: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["FileMetadataMustBeOfAttachableType"] = 6040] = "FileMetadataMustBeOfAttachableType";
    /**
     * Invalid Uploaded File
     * The uploaded file isn't valid. Learn more about accepted attach images and note types
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidUploadedFile"] = 6041] = "InvalidUploadedFile";
    /**
     * The entity reference type is unsupported for Attachable
     * The entity reference type (specified by XXX) isn't supported for attachable.
     */
    IntuitFaultCodes[IntuitFaultCodes["EntityReferenceTypeUnsupportedForAttachable"] = 6050] = "EntityReferenceTypeUnsupportedForAttachable";
    /**
     * Account.OpenBalanceDate must be specified with Account.OpenBalance
     * A value for the Account.OpenBalanceDate field is required when specifying an Account.OpenBalance.
     */
    IntuitFaultCodes[IntuitFaultCodes["AccountOpenBalanceDateMustBeSpecifiedWithOpenBalance"] = 6060] = "AccountOpenBalanceDateMustBeSpecifiedWithOpenBalance";
    /**
     * Amount calculation incorrect in the request
     * The amount isn't equal to the Qty * UnitPrice. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["AmountCalculationIncorrectInRequest"] = 6070] = "AmountCalculationIncorrectInRequest";
    /**
     * No Name Provided
     * Fill out values for at least one of the following: Title, GivenName, MiddleName, FamilyName, DisplayName, Suffix.
     */
    IntuitFaultCodes[IntuitFaultCodes["NoNameProvided"] = 6080] = "NoNameProvided";
    /**
     * Discount Line missing required info
     * A discount amount or percent is required.
     */
    IntuitFaultCodes[IntuitFaultCodes["DiscountLineMissingRequiredInfo"] = 6090] = "DiscountLineMissingRequiredInfo";
    /**
     * Invalid Line TaxCode in the request
     * The TaxCode value isn't valid. For US, specify TAX or NON. Supplied value: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidLineTaxCodeInRequest"] = 6100] = "InvalidLineTaxCodeInRequest";
    /**
     * MAS Transaction cannot be updated
     * The requested transaction can't be updated since it's a MAS transaction.
     */
    IntuitFaultCodes[IntuitFaultCodes["MasTransactionCannotBeUpdated"] = 6110] = "MasTransactionCannotBeUpdated";
    /**
     * MAS Transaction cannot be deleted
     * The requested transaction can't be deleted since it's a MAS transaction.
     */
    IntuitFaultCodes[IntuitFaultCodes["MasTransactionCannotBeDeleted"] = 6120] = "MasTransactionCannotBeDeleted";
    /**
     * Cannot change who customer bills with
     * You can't change who this customer bills with because there are invoices connected to a parent account. These invoices include charges for this customer. Or, it's possible there are payments from the parent account that are applied to invoices for this customer. Delete all payments or invoices for the parent account that are linked to this customer.
     */
    IntuitFaultCodes[IntuitFaultCodes["CannotChangeWhoCustomerBillsWith"] = 6130] = "CannotChangeWhoCustomerBillsWith";
    /**
     * Duplicate Doc Num
     * The specified number is already in use. Specify a different number.
     */
    IntuitFaultCodes[IntuitFaultCodes["DuplicateDocNum"] = 6140] = "DuplicateDocNum";
    /**
     * ParentRef Required Validation Error
     * A ParentRef is required depending if (XXX) is true or false.
     */
    IntuitFaultCodes[IntuitFaultCodes["ParentRefRequiredValidationError"] = 6150] = "ParentRefRequiredValidationError";
    /**
     * Invalid TaxCodeRef Error
     * The specified CustomSalesTax ID can't be used to create a transaction.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidTaxCodeRefError"] = 6160] = "InvalidTaxCodeRefError";
    /**
     * Invalid TxnTaxDetail Error
     * The TxnTaxDetail attribute isn't allowed when GlobalTaxCalculation is set to NotApplicable.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidTxnTaxDetailError"] = 6170] = "InvalidTxnTaxDetailError";
    /**
     * Sub Level Limit
     * Review the number of nested accounts and customers. You can nest up to 5 levels.
     */
    IntuitFaultCodes[IntuitFaultCodes["SubLevelLimit"] = 6180] = "SubLevelLimit";
    /**
     * Invalid Company Status Error
     * The subscription period for the QuickBooks Online company has ended, has a billing problem, or was canceled. Learn more about QuickBooks Online subscription states.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidCompanyStatusError"] = 6190] = "InvalidCompanyStatusError";
    /**
     * Account Period Closed Error
     * The user has "closed the books" so the account period is closed for edits.
     */
    IntuitFaultCodes[IntuitFaultCodes["AccountPeriodClosedError"] = 6200] = "AccountPeriodClosedError";
    /**
     * Account Period Closed Required Password Error
     * The user has "closed the books" so the account period is closed for edits. A password is required to make changes and updates.
     */
    IntuitFaultCodes[IntuitFaultCodes["AccountPeriodClosedRequiredPasswordError"] = 6210] = "AccountPeriodClosedRequiredPasswordError";
    /**
     * Delete Entity Has Balance Error
     * The object or entity you're trying to delete has an open balance.
     */
    IntuitFaultCodes[IntuitFaultCodes["DeleteEntityHasBalanceError"] = 6220] = "DeleteEntityHasBalanceError";
    /**
     * Invalid TaxCodeRef Error
     * You can't update transactions to use the CustomSalesTax ID.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidTaxCodeRefErrorUpdate"] = 6230] = "InvalidTaxCodeRefErrorUpdate";
    /**
     * Duplicate Name Exists Error
     * The specified name already exists. The customer ID is: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["DuplicateNameExistsError"] = 6240] = "DuplicateNameExistsError";
    /**
     * InvalidSalesCustomer
     * The specified customer (identified by XXX) doesn't exist, or is inactive.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidSalesCustomer"] = 6250] = "InvalidSalesCustomer";
    /**
     * InventoryTxnDatedBeforeItemStartDate
     * Transactions with inventory items that have a quantity on hand can't be dated earlier than the specified InventoryStartDate.
     */
    IntuitFaultCodes[IntuitFaultCodes["InventoryTxnDatedBeforeItemStartDate"] = 6270] = "InventoryTxnDatedBeforeItemStartDate";
    /**
     * Delete Customer Has Unbilled Expenses Error
     * This customer can't be deleted because they have unbilled charges.
     */
    IntuitFaultCodes[IntuitFaultCodes["DeleteCustomerHasUnbilledExpensesError"] = 6280] = "DeleteCustomerHasUnbilledExpensesError";
    /**
     * InvalidEmployeeOrVendor
     * You must specify either an "employee" or "vendor." You can't enter both. Their ID is: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidEmployeeOrVendor"] = 6290] = "InvalidEmployeeOrVendor";
    /**
     * InvalidEmployeeOrVendorName
     * The employee or vendor's name is either missing or invalid. It should be Employee or Vendor.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidEmployeeOrVendorName"] = 6300] = "InvalidEmployeeOrVendorName";
    /**
     * MissingCustomer
     * A customer is required if the transaction is billable.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingCustomer"] = 6310] = "MissingCustomer";
    /**
     * InvalidBillable
     * Invalid billable status: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidBillable"] = 6320] = "InvalidBillable";
    /**
     * MissingBillingRate
     * Invalid hourly rate: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingBillingRate"] = 6330] = "MissingBillingRate";
    /**
     * InvalidTime
     * You must specify a time (hours:minutes): XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidTime"] = 6340] = "InvalidTime";
    /**
     * MissingTime
     * Time (hours:minutes) is missing: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingTime"] = 6350] = "MissingTime";
    /**
     * InvalidStartOrEndTime
     * Enter a valid start and end time. Make sure break times aren't longer than the elapsed time.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidStartOrEndTime"] = 6360] = "InvalidStartOrEndTime";
    /**
     * StartTimeAfterEndTime
     * The start time is after end time: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["StartTimeAfterEndTime"] = 6370] = "StartTimeAfterEndTime";
    /**
     * InvalidDuration
     * The time duration isn't within the valid range: XXX.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidDuration"] = 6380] = "InvalidDuration";
    /**
     * InvalidMultipleDurations
     * Invalid multiple time durations. Specify a total elapsed time (hours:minutes) or the start and end time.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidMultipleDurations"] = 6390] = "InvalidMultipleDurations";
    /**
     * Deleting linkedPurchase results in invalid Invoice
     * The purchase can't be deleted since it would invalidate a linked invoice.
     */
    IntuitFaultCodes[IntuitFaultCodes["DeletingLinkedPurchaseResultsInInvalidInvoice"] = 6400] = "DeletingLinkedPurchaseResultsInInvalidInvoice";
    /**
     * Email address is required
     * An email address is required for this customer since the delivery type is "email."
     */
    IntuitFaultCodes[IntuitFaultCodes["EmailAddressIsRequired"] = 6420] = "EmailAddressIsRequired";
    /**
     * Invalid account type used
     * Invalid account type: XXX
     */
    IntuitFaultCodes[IntuitFaultCodes["InvalidAccountTypeUsed"] = 6430] = "InvalidAccountTypeUsed";
    /**
     * Transaction Detail Information Required
     * You must select a product or service or an account for each split line that has an amount or a billable customer.
     */
    IntuitFaultCodes[IntuitFaultCodes["TransactionDetailInformationRequired"] = 6440] = "TransactionDetailInformationRequired";
    /**
     * Attempt to Void Transaction failed
     * Since the transaction is already settled, you can't void it.
     */
    IntuitFaultCodes[IntuitFaultCodes["AttemptToVoidTransactionFailed"] = 6450] = "AttemptToVoidTransactionFailed";
    /**
     * Invoice MAS Transaction Deposit Amount mismatch
     * The invoice deposit amount (XXX) and credit card amount (YYY) don't match.
     */
    IntuitFaultCodes[IntuitFaultCodes["InvoiceMasTransactionDepositAmountMismatch"] = 6460] = "InvoiceMasTransactionDepositAmountMismatch";
    /**
     * TaxLiabilityAccount or TaxRateError
     * You either selected a tax on a transaction that's not allowed, or haven't specified a tax rate.
     */
    IntuitFaultCodes[IntuitFaultCodes["TaxLiabilityAccountOrTaxRateError"] = 6470] = "TaxLiabilityAccountOrTaxRateError";
    /**
     * Matched Transaction Delete Error
     * You can't delete this transaction. It's matched to another transaction that was categorized into a different financial account.
     */
    IntuitFaultCodes[IntuitFaultCodes["MatchedTransactionDeleteError"] = 6480] = "MatchedTransactionDeleteError";
    /**
     * MultipleBudgetSecondaryListTypes
     * Review the details in the error response.
     */
    IntuitFaultCodes[IntuitFaultCodes["MultipleBudgetSecondaryListTypes"] = 6490] = "MultipleBudgetSecondaryListTypes";
    /**
     * MissingBudgetDetails
     * Review the details in the error response.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingBudgetDetails"] = 6500] = "MissingBudgetDetails";
    /**
     * BudgetAccountMismatch
     * Review the details in the error response.
     */
    IntuitFaultCodes[IntuitFaultCodes["BudgetAccountMismatch"] = 6510] = "BudgetAccountMismatch";
    /**
     * Missing Tracked Inventory Item Quantity
     * The tracked inventory item must have a quantity.
     */
    IntuitFaultCodes[IntuitFaultCodes["MissingTrackedInventoryItemQuantity"] = 6520] = "MissingTrackedInventoryItemQuantity";
    /**
     * Found raw Credit Card Numbering request
     * You can't enter raw credit card numbers. Manual credit card data isn't supported. Use a token for the credit card number.
     */
    IntuitFaultCodes[IntuitFaultCodes["FoundRawCreditCardNumberingRequest"] = 6530] = "FoundRawCreditCardNumberingRequest";
    /**
     * Deposited Transaction cannot be changed
     * This transaction is part of a deposit. If you want to change or delete it, you must edit and remove it from the deposit it appears on.
     */
    IntuitFaultCodes[IntuitFaultCodes["DepositedTransactionCannotBeChanged"] = 6540] = "DepositedTransactionCannotBeChanged";
    /**
     * An application error has occurred while processing your request
     * Review the System Failure Error code (XXX) to identify the issue.
     */
    IntuitFaultCodes[IntuitFaultCodes["ApplicationErrorOccurred"] = 10000] = "ApplicationErrorOccurred";
    /**
     * Result Set Big
     * The result for the query is too large.
     */
    IntuitFaultCodes[IntuitFaultCodes["ResultSetBig"] = 10100] = "ResultSetBig";
    /**
     * Company Reset
     * Company has been reset. Request for CUD is stale.
     */
    IntuitFaultCodes[IntuitFaultCodes["CompanyReset"] = 10200] = "CompanyReset";
})(IntuitFaultCodes || (IntuitFaultCodes = {}));
