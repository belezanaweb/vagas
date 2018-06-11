import { inTheFuture, firstNDigits } from "../lib/util";

const onCreditCardInput = function (cardValue) {

    // Remove non-digits, get the first 16 numbers and separate them with "." in
    // groups of 4
    const newVal = firstNDigits(cardValue, 16)
        .replace(/(.{4})(?=\d)/g, "$1.");

    return newVal;
};

const onHolderNameInput = function (holderName) {

    // Remove duplicated spaces, non-word characters and digits
    const newVal = String(holderName)
        .replace(/ {2,}/g, " ")
        .replace(/\W|\d/g, c => (c === " ") ? " " : "");

    return newVal;
};

const onExpiryDateInput = function (expiryDate) {

    let newVal = firstNDigits(expiryDate, 6);

    if (newVal.length === 6 && !inTheFuture(newVal)) {
        newVal = newVal.slice(0, 5);
    }

    return newVal.replace(/^(\d{2})(.)/g, "$1/$2");
};

const onCvvInput = function (cvv) {

    const newVal = firstNDigits(cvv, 3);

    return newVal;
};

export {
    onCreditCardInput,
    onHolderNameInput,
    onExpiryDateInput,
    onCvvInput
};
