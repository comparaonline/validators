import luhn from 'fast-luhn';

const VISA = 'Visa';
const MASTERCARD = 'Mastercard';
const AMERICAN_EXPRESS = 'American Express';
const DINERS_CLUB = 'Diners Club';

const creditCardRegexp = {
  [AMERICAN_EXPRESS]: /^3[47][0-9]{13}$/,
  [DINERS_CLUB]: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  [MASTERCARD]: /^5[1-5][0-9]{14}$/,
  [VISA]: /^4[0-9]{12}(?:[0-9]{3})?$/
};

export const isAmericanExpress = number => creditCardRegexp[AMERICAN_EXPRESS].test(number);
export const isDinersClub = number => creditCardRegexp[DINERS_CLUB].test(number);
export const isMastercard = number => creditCardRegexp[MASTERCARD].test(number);
export const isVisa = number => creditCardRegexp[VISA].test(number);

export const creditCard = number => (number.length > 11 && number.length < 20) && luhn(number);
