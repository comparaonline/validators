module.exports = {
  fullName: (name) => {
    if (typeof name !== 'string') return false;
    return name.split(/\s+/).length > 1;
  },
  email: (address) => {
    const emailRegexp = /^(\w+|.|\+)+@(\w+\.)+\w+$/i;
    return emailRegexp.test(address);
  }
};
