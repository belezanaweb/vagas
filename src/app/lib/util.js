const THIN_SPACE = "\u2009";

const formatCurrency = function (val) {
    return Number(val).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
};

const underscoreThinSpace = function (usQtt) {

    return Array
        .from({ length: usQtt })
        .fill("_")
        .join(THIN_SPACE);
};

const creditCardFormat = function () {

    const rgx = new RegExp(`(.{7})(${THIN_SPACE})`, "g");

    return underscoreThinSpace(16).replace(rgx, "$1.");
};

const inTheFuture = function (date) {

    const now = new Date();

    let localTz = now.getTimezoneOffset();

    const sign = (localTz > 0)
        ? "+"
        : "-";

    localTz = Math.abs(localTz);
    const hoursOffset = String(localTz / 60).padStart(2, "0");
    const minutesOffset = String(localTz % 60).padStart(2, "0");


    // Assuming `date` is in the format "mmyyyy"
    const month = date.slice(0, 2);
    const year = date.slice(2);

    const userDate = new Date(`${year}-${month}-01T00:00:00${sign}${hoursOffset}:${minutesOffset}`);

    return (userDate > now);
};

const firstNDigits = function (str, n) {
    return String(str)
        .replace(/\D/g, "")
        .slice(0, n);
};

export {
    THIN_SPACE,
    formatCurrency,
    underscoreThinSpace,
    creditCardFormat,
    inTheFuture,
    firstNDigits
};
