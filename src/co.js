import { cleanString } from './utils';

const PLATE_MAX_LENGTH = 6;

export const plate = plateNumber => {
  const cleanedPlate = cleanString(plateNumber);
  if (cleanedPlate.length !== PLATE_MAX_LENGTH) return false;
  const format = /^[a-zA-Z]{3}[0-9]{3}$/;
  return format.test(cleanedPlate);
};

export default {};
