const emailRegexp = /^.+@.+\..+$/i;
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.]{8,}$/i;

export const fullName = name => {
  if (typeof name !== 'string') return false;
  return name.split(/\s+/).length > 1;
};

export const email = address => emailRegexp.test(address);

export const password = p => passwordRegexp.test(p);
