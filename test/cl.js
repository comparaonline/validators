/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { nationalId, phone, plate } from '../src/cl';


describe('Validating cl related with', () => {
  describe('#nationalId', () => {
    it('returns true on a non zero verifier digit', () => {
      expect(nationalId('13422727-3')).to.be.true;
    });
    it('returns true on a zero verifier digit', () => {
      expect(nationalId('5222514-0')).to.be.true;
    });
    it('returns true on a k verifier digit', () => {
      expect(nationalId('17552942-k')).to.be.true;
    });
    it('returns true on a k verifier digit', () => {
      expect(nationalId('17552942-k')).to.be.true;
    });
    it('returns true on a valid id with spaces between hyphen', () => {
      expect(nationalId('17552942 - k')).to.be.true;
      expect(nationalId('17552942 -  k')).to.be.true;
    });
    it('returns true on a valid id with dots in number part', () => {
      expect(nationalId('17.552.942-k')).to.be.true;
      expect(nationalId('17.552.942 - k')).to.be.true;
    });
    it('returns false on an id with wrong verifier', () => {
      expect(nationalId('17.552.942-2')).to.be.false;
    });
    it('returns false on a malformed id', () => {
      expect(nationalId('17.552.942-')).to.be.false;
      expect(nationalId('17.552.942')).to.be.false;
    });
    it('returns false on an invalid id variable type', () => {
      expect(nationalId(undefined)).to.be.false;
      expect(nationalId(null)).to.be.false;
      expect(nationalId(23730200)).to.be.false;
    });
  });

  describe('#phone', () => {
    context('with old format for regions', () => {
      it('returns true on a number w/ a separation hyphen', () => {
        expect(phone('32-2711498')).to.be.true;
      });
      it('returns true on a number w/o a separation hyphen', () => {
        expect(phone('322711498')).to.be.true;
      });
      it('returns false on a number w/o proper length', () => {
        expect(phone('32711498')).to.be.false;
        expect(phone('3-2711498')).to.be.false;
        expect(phone('3-271149891')).to.be.false;
        expect(phone('32-27114989')).to.be.false;
      });
    });

    context('with old format for metropolitan area', () => {
      it('returns true on a number w/ a separation hyphen', () => {
        expect(phone('2-22711498')).to.be.true;
      });
      it('returns true on a number w/o a separation hyphen', () => {
        expect(phone('228711498')).to.be.true;
      });
      it('returns false on a number w/o proper length', () => {
        expect(phone('22-22711498')).to.be.false;
        expect(phone('2222711498')).to.be.false;
        expect(phone('2-2278114')).to.be.false;
      });
    });

    context('with new format', () => {
      it('returns true on a number with proper length', () => {
        expect(phone('722711498')).to.be.true;
      });
      it('returns false on a number with wrong length', () => {
        expect(phone('72711498')).to.be.false;
        expect(phone('7271149892')).to.be.false;
      });
    });
  });

  describe('#plate', () => {
    it('returns true on a plate with proper length', () => {
      expect(plate('AA1111')).to.be.true;
      expect(plate('AA-1111')).to.be.true;
    });
    it('returns false on a plate with wrong length', () => {
      expect(plate('A111')).to.be.false;
      expect(plate('AAA11111')).to.be.false;
      expect(plate('AAA1-1111')).to.be.false;
    });

    context('with old format', () => {
      it('returns true on a plate with proper format', () => {
        expect(plate('AB7089')).to.be.true;
        expect(plate('AB-7089')).to.be.true;
      });
      it('returns false on a plate with wrong format', () => {
        expect(plate('A11B22')).to.be.false;
        expect(plate('AV-1B22')).to.be.false;
      });
    });

    context('with current format', () => {
      it('returns true on a plate with proper format', () => {
        expect(plate('GGZP89')).to.be.true;
        expect(plate('GGZP-89')).to.be.true;
      });
      it('returns false on a plate with wrong format', () => {
        expect(plate('A11B22')).to.be.false;
        expect(plate('AABB12')).to.be.false;
        expect(plate('AZPA-12')).to.be.false;
      });
    });
  });
});
