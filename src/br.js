// eslint-disable-next-line import/prefer-default-export
export const cpf = value => {
  if (!value) {
    return false;
  }
  value = value.replace(/[^\d]+/g, '');
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
