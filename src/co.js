import { cleanString } from './utils';

export const plate = plateNumber => {
  const cleanedPlate = cleanString(plateNumber);
  if (cleanedPlate.length !== 6) return false;
  const format = /^[a-zA-Z]{3}[0-9]{3}$/;
  return format.test(cleanedPlate);
};

export default {};
