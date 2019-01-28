// eslint-disable-next-line import/prefer-default-export
export const BLACKLIST = [
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999"
];

export const cpf = value => {
  if (!value || BLACKLIST.indexOf(value) > -1) {
    return false;
  }
  value = value.replace(/[^\d]+/g, "");
  function validateDigit(digit) {
    const init = digit - 9;
    let add = 0;
    for (let i = 0; i < 9; i += 1) {
      add += parseInt(value.charAt(i + init), 10) * (i + 1);
    }
    return (add % 11) % 10 === parseInt(value.charAt(digit), 10);
  }
  return validateDigit(9) && validateDigit(10);
};
