// 

exports.isEmptyOrNull = (value) => {
    if (value === null || value === undefined || value === "") {
        return true;
    }
    return false;
};

exports.invoiceNumber = (number) => {
    var str = "" + (number+1);
    var pad = "INV0000";
    var ivoice = pad.substring(0, pad.length - str.length) + str;
    return "INV" + ivoice;
}

exports.KEY_TOKEN = "KHSDAB@#$12345r23";
exports.KEY_REFRESH = "@#4523FKSREN^%#@#";

