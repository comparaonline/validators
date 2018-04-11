/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { plate } from '../src/co';


describe('Validating co related with', () => {
  describe('#plate', () => {
    it('returns true on a plate with proper length', () => {
      expect(plate('AAA111')).to.be.true;
      expect(plate('AA-A111')).to.be.true;
    });
    it('returns false on a plate with wrong length', () => {
      expect(plate('A111')).to.be.false;
      expect(plate('AA1111')).to.be.false;
      expect(plate('AAA11111')).to.be.false;
      expect(plate('AAA1-1111')).to.be.false;
    });
  });
});
