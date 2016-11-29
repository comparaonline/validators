const Utils = require('./utils');

module.exports = {
  nationalId: (id) => {
    if (id == null) return false;

    const [number, verifier] = id.split(/\s*-\s*/);
    return verifier == Utils.mod11Verifier(number);
  },
  phone: (number) => {
    const oldFormatRegions = /^\d{2}-?\d{7}$/;
    const oldFormatMetropolitan = /^\d-?\d{8}$/;
    const newFormat = /^\d{9}$/;
    return oldFormatRegions.test(number)
      || oldFormatMetropolitan.test(number)
      || newFormat.test(number);
  }
}
