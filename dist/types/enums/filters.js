/**
 * Customer Filters
 *
 * @description The filterables for the Customer Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer}
 */
export var CustomerFilters;
(function (CustomerFilters) {
    CustomerFilters["Id"] = "Id";
    CustomerFilters["DisplayName"] = "DisplayName";
    CustomerFilters["GivenName"] = "GivenName";
    CustomerFilters["MiddleName"] = "MiddleName";
    CustomerFilters["FamilyName"] = "FamilyName";
    CustomerFilters["PrimaryEmailAddr"] = "PrimaryEmailAddr";
    CustomerFilters["Active"] = "Active";
    CustomerFilters["CompanyName"] = "CompanyName";
    CustomerFilters["Balance"] = "Balance";
    CustomerFilters["PrintOnCheckName"] = "PrintOnCheckName";
    CustomerFilters["FullyQualifiedName"] = "FullyQualifiedName";
})(CustomerFilters || (CustomerFilters = {}));
/**
 * Invoice Filters
 *
 * @description The filterables for the Invoice Object
 *
 * @see {@link https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice}
 */
export var InvoiceFilters;
(function (InvoiceFilters) {
    InvoiceFilters["Id"] = "Id";
    InvoiceFilters["CustomerRef"] = "CustomerRef";
    InvoiceFilters["DocNumber"] = "DocNumber";
    InvoiceFilters["ProjectRef"] = "ProjectRef";
    InvoiceFilters["TxnDate"] = "TxnDate";
    InvoiceFilters["SalesTermRef"] = "SalesTermRef";
    InvoiceFilters["DueDate"] = "DueDate";
    InvoiceFilters["Balance"] = "Balance";
})(InvoiceFilters || (InvoiceFilters = {}));
