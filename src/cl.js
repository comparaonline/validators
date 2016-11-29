const Utils = require('./utils');

module.exports = {
  nationalId: (id) => {
    if (id == null) return false;

    const [number, verifier] = id.split(/\s*-\s*/);
    return verifier == Utils.mod11Verifier(number);
  },
  phone: (number) => {
    const oldFormat = /\d{1,2}-?\d{7}/;
    const newFormat = /\d{9}/;
    return oldFormat.test(number) || newFormat.test(number);
  }
}
