/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
// eslint-disable-next-line
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
    it('returns false on an invalid id variable type', () => {
      expect(Validators.nationalId(undefined)).to.be.false;
      expect(Validators.nationalId(null)).to.be.false;
      expect(Validators.nationalId(23730200)).to.be.false;
    });
  });

  describe('#phone', () => {
    context('with old format for regions', () => {
      it('returns true on a number w/ a separation hyphen', () => {
        expect(Validators.phone('32-2711498')).to.be.true;
      });
      it('returns true on a number w/o a separation hyphen', () => {
        expect(Validators.phone('322711498')).to.be.true;
      });
      it('returns false on a number w/o proper length', () => {
        expect(Validators.phone('32711498')).to.be.false;
        expect(Validators.phone('3-2711498')).to.be.false;
        expect(Validators.phone('3-271149891')).to.be.false;
        expect(Validators.phone('32-27114989')).to.be.false;
      });
    });

    context('with old format for metropolitan area', () => {
      it('returns true on a number w/ a separation hyphen', () => {
        expect(Validators.phone('2-22711498')).to.be.true;
      });
      it('returns true on a number w/o a separation hyphen', () => {
        expect(Validators.phone('228711498')).to.be.true;
      });
      it('returns false on a number w/o proper length', () => {
        expect(Validators.phone('22-22711498')).to.be.false;
        expect(Validators.phone('2222711498')).to.be.false;
        expect(Validators.phone('2-2278114')).to.be.false;
      });
    });

    context('with new format', () => {
      it('returns true on a number with proper length', () => {
        expect(Validators.phone('722711498')).to.be.true;
      });
      it('returns false on a number with wrong length', () => {
        expect(Validators.phone('72711498')).to.be.false;
        expect(Validators.phone('7271149892')).to.be.false;
      });
    });
  });

  describe('#plate', () => {
    it('returns true on a plate with proper length', () => {
      expect(Validators.plate('AA1111')).to.be.true;
      expect(Validators.plate('AA-1111')).to.be.true;
    });
    it('returns false on a plate with wrong length', () => {
      expect(Validators.plate('A111')).to.be.false;
      expect(Validators.plate('AAA11111')).to.be.false;
      expect(Validators.plate('AAA1-1111')).to.be.false;
    });

    context('with old format', () => {
      it('returns true on a plate with proper format', () => {
        expect(Validators.plate('AB7089')).to.be.true;
        expect(Validators.plate('AB-7089')).to.be.true;
      });
      it('returns false on a plate with wrong format', () => {
        expect(Validators.plate('A11B22')).to.be.false;
        expect(Validators.plate('AV-1B22')).to.be.false;
      });
    });

    context('with current format', () => {
      it('returns true on a plate with proper format', () => {
        expect(Validators.plate('GGZP89')).to.be.true;
        expect(Validators.plate('GGZP-89')).to.be.true;
      });
      it('returns false on a plate with wrong format', () => {
        expect(Validators.plate('A11B22')).to.be.false;
        expect(Validators.plate('AABB12')).to.be.false;
        expect(Validators.plate('AZPA-12')).to.be.false;
      });
    });
  });
});
