import { mod11Verifier, cleanString } from './utils';

export const nationalId = id => {
  if (typeof id !== 'string') return false;

  const [number, verifier] = id.split(/\s*-\s*/);
  return verifier === mod11Verifier(number);
};

export const phone = number => {
  const oldFormatRegions = /^\d{2}-?\d{7}$/;
  const oldFormatMetropolitan = /^\d-?\d{8}$/;
  const newFormat = /^\d{9}$/;
  return oldFormatRegions.test(number)
    || oldFormatMetropolitan.test(number)
    || newFormat.test(number);
};

export const plate = plateNumber => {
  const cleanedPlate = cleanString(plateNumber);
  if (cleanedPlate.length !== 6) return false;
  const oldFormat = /[a-zA-Z]{2}-?\d{4}/;
  const currentFormat = /[BCDFGHJKLPRSTVWXYZ]{4}-?\d{2}$/;
  return oldFormat.test(plateNumber) || currentFormat.test(plateNumber);
};
