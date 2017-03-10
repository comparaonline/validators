module.exports = {
  fullName: (name) => {
    if (typeof name !== 'string') return false;
    return name.split(/\s+/).length > 1;
  },
  email: (address) => {
    const emailRegexp = /^.+@.+\..+$/i;
    return emailRegexp.test(address);
  },
  password: (password) => {
    const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d.]{8,}$/i;
    return passwordRegexp.test(password);
  }
};
