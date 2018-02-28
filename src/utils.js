export const mod11Verifier = value => {
  const number = value.replace(/\D/g, '');

  const reversedStringArray = Array.from(number.toString()).reverse();
  const sum = reversedStringArray.reduce((memo, digit, index) => {
    const factor = (index % 6) + 2;
    return memo + (parseInt(digit, 10) * factor);
  }, 0);

  const mod11 = 11 - (sum % 11);
  let verifier = mod11;
  if (mod11 === 11) verifier = 0;
  if (mod11 === 10) verifier = 'k';
  return verifier.toString();
};

export const cleanString = string => string.replace(/\W/g, '');

export const between = (x, min, max) => x >= min && x <= max;

export const repeat = (r, a) => Array(r + 1).join(a);

export const range = r => Array.from({ length: r }, (x, i) => i);
