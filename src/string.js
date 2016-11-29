module.exports = {
  fullName: (name) => {
    if (name == null) return false;
    return name.split(/\s+/).length > 1;
  },
  email: (address) => {
    const emailRegexp = /^(\w+|.|\+)+@(\w+\.)+\w+$/i
    return emailRegexp.test(address);
  }
}
