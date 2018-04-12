import { mod11Verifier, cleanString, between, range, repeat } from './utils';

const NATIONAL_ID_SPLIT_REGEX = /\s*-\s*/;
const NATIONAL_ID_MIN_LENGTH = 7;
const NATIONAL_ID_MAX_LENGTH = 8;
const NATIONAL_ID_REPEAT_DIGITS = 10;
const COMPANIES_NATIONAL_ID_MIN = 50000000;
const COMPANIES_NATIONAL_ID_MAX = 99999999;

const NATIONAL_ID_BLACKLIST = [
  NATIONAL_ID_MIN_LENGTH,
  NATIONAL_ID_MAX_LENGTH
].reduce(
  (list, length) =>
    list.concat(range(NATIONAL_ID_REPEAT_DIGITS).map(n => repeat(length, n))),
  []
);

const splitNationalId = id => id.split(NATIONAL_ID_SPLIT_REGEX);

export const nationalIdLength = id =>
  between(
    id.replace(/\D/g, '').length,
    NATIONAL_ID_MIN_LENGTH,
    NATIONAL_ID_MAX_LENGTH
  );

export const nationalId = id => {
  if (typeof id !== 'string') return false;

  const [number, verifier] = splitNationalId(id);
  return nationalIdLength(number) && verifier === mod11Verifier(number);
};

export const isNationalIdInBlacklist = (id, list = [], useDefault = true) => {
  const [number] = splitNationalId(id);
  const blacklist = useDefault ? list.concat(NATIONAL_ID_BLACKLIST) : list;
  return blacklist.indexOf(number) !== -1;
};

export const isCompanyNationalId = id => {
  if (typeof id !== 'string') return false;
  const [number] = splitNationalId(id);

  return between(number, COMPANIES_NATIONAL_ID_MIN, COMPANIES_NATIONAL_ID_MAX);
};

export const phone = number => {
  const oldFormatRegions = /^\d{2}-?\d{7}$/;
  const oldFormatMetropolitan = /^\d-?\d{8}$/;
  const newFormat = /^\d{9}$/;
  return (
    oldFormatRegions.test(number) ||
    oldFormatMetropolitan.test(number) ||
    newFormat.test(number)
  );
};

export const plate = plateNumber => {
  const cleanedPlate = cleanString(plateNumber);
  if (cleanedPlate.length !== 6) return false;
  const oldFormat = /[a-zA-Z]{2}-?\d{4}/;
  const currentFormat = /[BCDFGHJKLPRSTVWXYZ]{4}-?\d{2}$/;
  return oldFormat.test(plateNumber) || currentFormat.test(plateNumber);
};
