const expect = require('chai').expect;
const Validators = require('src/cl');

describe('Validating cl related with', () => {
  describe('#national_id', () => {
    it('returns true on a non zero verifier digit', () => {
      expect(Validators.nationalId('13422727-3')).to.be.true;
    });
    it('returns true on a zero verifier digit', () => {
      expect(Validators.nationalId('5222514-0')).to.be.true;
    });
    it('returns true on a k verifier digit', () => {
      expect(Validators.nationalId('17552942-k')).to.be.true;
    });
    it('returns true on a k verifier digit', () => {
      expect(Validators.nationalId('17552942-k')).to.be.true;
    });
    it('returns true on a valid id with spaces between hyphen', () => {
      expect(Validators.nationalId('17552942 - k')).to.be.true;
      expect(Validators.nationalId('17552942 -  k')).to.be.true;
    });
    it('returns true on a valid id with dots in number part', () => {
      expect(Validators.nationalId('17.552.942-k')).to.be.true;
      expect(Validators.nationalId('17.552.942 - k')).to.be.true;
    });
    it('returns false on an id with wrong verifier', () => {
      expect(Validators.nationalId('17.552.942-2')).to.be.false;
    });
    it('returns false on a malformed id', () => {
      expect(Validators.nationalId('17.552.942-')).to.be.false;
      expect(Validators.nationalId('17.552.942')).to.be.false;
    });
    it('returns false on an undefined or null id', () => {
      expect(Validators.nationalId(undefined)).to.be.false;
      expect(Validators.nationalId(null)).to.be.false;
    });
  });
});
