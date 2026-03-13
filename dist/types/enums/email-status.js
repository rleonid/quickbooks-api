/**
 * Email Status
 *
 * @description The status of the email for the invoice
 */
export var EmailStatus;
(function (EmailStatus) {
    EmailStatus["NotSet"] = "NotSet";
    EmailStatus["NeedToSend"] = "NeedToSend";
    EmailStatus["EmailSent"] = "EmailSent";
})(EmailStatus || (EmailStatus = {}));
