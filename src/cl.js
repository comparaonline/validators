const Utils = require('./utils');

module.exports = {
  nationalId: (id) => {
    if (typeof id !== 'string' ) return false;

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
  },
  plate: (plate) => {
    const cleanedPlate = Utils.cleanString(plate);
    if(cleanedPlate.length != 6) return false;
    const oldFormat = /[a-zA-Z]{2}-?\d{4}/;
    const currentFormat = /[BCDFGHJKLPRSTVWXYZ]{4}-?\d{2}$/;
    return oldFormat.test(plate) || currentFormat.test(plate);
  }
};
