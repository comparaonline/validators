import luhn from 'fast-luhn';

const VISA = 'Visa';
const MASTERCARD = 'Mastercard';
const AMERICAN_EXPRESS = 'American Express';
const DINERS_CLUB = 'Diners Club';
const HIPERCARD = 'Hipercard';
const ELO = 'Elo';

const creditCardRegexp = {
  [AMERICAN_EXPRESS]: /^3[47][0-9]{13}$/,
  [DINERS_CLUB]: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  [MASTERCARD]: /^5[1-5][0-9]{14}$/,
  [VISA]: /^4[0-9]{12}(?:[0-9]{3})?$/,
  [HIPERCARD]: /^((606282|637095|637568)[0-9]{10}|38[0-9]{14,17})$/,
  [ELO]: /^((50670[7-8])|(506715)|(50671[7-9])|(50672[0-1])|(50672[4-9])|(50673[0-3])|(506739)|(50674[0-8])|(50675[0-3])|(50677[4-8])|(50900[0-9])|(50901[3-9])|(50902[0-9])|(50903[1-9])|(50904[0-9])|(50905[0-9])|(50906[0-4])|(50906[6-9])|(50907[0-2])|(50907[4-5])|(636368)|(636297)|(504175)|(438935)|(40117[8-9])|(45763[1-2])|(457393)|(431274)|(50907[6-9])|(50908[0-9])|(627780))/
};

export const isAmericanExpress = number => creditCardRegexp[AMERICAN_EXPRESS].test(number);
export const isDinersClub = number => creditCardRegexp[DINERS_CLUB].test(number);
export const isMastercard = number => creditCardRegexp[MASTERCARD].test(number);
export const isVisa = number => creditCardRegexp[VISA].test(number);
export const isHipercard = number => creditCardRegexp[HIPERCARD].test(number);
export const isElo = number => creditCardRegexp[ELO].test(number);

export const creditCard = number => (number.length > 11 && number.length < 20) && luhn(number);
