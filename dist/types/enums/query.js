/**
 * The type of query to run
 */
export var Query;
(function (Query) {
    Query["Invoice"] = "select * from invoice";
    Query["Estimate"] = "select * from estimate";
    Query["Customer"] = "select * from customer";
    Query["Payment"] = "select * from payment";
    Query["CreditMemo"] = "select * from creditmemo";
    Query["Preferences"] = "select * from Preferences";
    Query["Account"] = "select * from account";
    Query["CompanyInfo"] = "select * from companyinfo";
    Query["Bill"] = "select * from Bill";
    Query["RecurringTransaction"] = "select * from RecurringTransaction";
})(Query || (Query = {}));
