module.exports = {
  mod11Verifier: (value) => {
    const number = value.replace(/\D/g, '');

    const reversedStringArray = Array.from(number.toString()).reverse();
    const sum = reversedStringArray.reduce((memo, digit, index) => {
      const factor = index % 6 + 2;
      return memo + parseInt(digit) * factor;
    }, 0);

    const mod11 = 11 - sum % 11;
    var verifier = mod11;
    if (mod11 == 11) verifier = 0;
    if (mod11 == 10) verifier = 'k';
    return verifier;
  },
  cleanString: (string) => {
    return string.replace(/\W/g, '');
  }
};
