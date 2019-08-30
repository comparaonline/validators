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
  [ELO]: /^(40117[8-9]|431274|438935|451416|457393|45763[1-2]|506(699|7[0-6][0-9]|77[0-8])|509\d{3}|504175|627780|636297|636368|65003[1-3]|6500(3[5-9]|4[0-9]|5[0-1])|6504(0[5-9]|[1-3][0-9])|650(4[8-9][0-9]|5[0-2][0-9]|53[0-8])|6505(4[1-9]|[5-8][0-9]|9[0-8])|6507(0[0-9]|1[0-8])|65072[0-7]|6509(0[1-9]|1[0-9]|20)|6516(5[2-9]|[6-7][0-9])|6550([0-1][0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/
};

export const isAmericanExpress = number =>
  creditCardRegexp[AMERICAN_EXPRESS].test(number);
export const isDinersClub = number =>
  creditCardRegexp[DINERS_CLUB].test(number);
export const isMastercard = number => creditCardRegexp[MASTERCARD].test(number);
export const isVisa = number => creditCardRegexp[VISA].test(number);
export const isHipercard = number => creditCardRegexp[HIPERCARD].test(number);
export const isElo = number => creditCardRegexp[ELO].test(number);

const creditCardValidation = {
  [VISA]: isVisa,
  [MASTERCARD]: isMastercard,
  [AMERICAN_EXPRESS]: isAmericanExpress,
  [DINERS_CLUB]: isDinersClub,
  [HIPERCARD]: isHipercard,
  [ELO]: isElo
};

export const creditCard = number =>
  number.length > 11 && number.length < 20 && luhn(number);

export const creditCardByName = name => number =>
  [creditCard, creditCardValidation[name]].every(validation =>
    validation(number)
  );
