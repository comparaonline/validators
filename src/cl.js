import { mod11Verifier, cleanString, between } from './utils';

const NATIONAL_ID_MIN_LENGTH = 7;
const NATIONAL_ID_MAX_LENGTH = 8;

export const nationalIdLength = id => (
  between(id.replace(/\D/g, '').length, NATIONAL_ID_MIN_LENGTH, NATIONAL_ID_MAX_LENGTH)
);

export const nationalId = id => {
  if (typeof id !== 'string') return false;

  const [number, verifier] = id.split(/\s*-\s*/);
  return (nationalIdLength(number)) && verifier === mod11Verifier(number);
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
