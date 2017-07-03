/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { cpf } from '../src/br';

describe('Validating br related with', () => {
  describe('#cpf', () => {
    it('rejects falsy values', () => {
      expect(cpf('')).to.be.false;
      expect(cpf(null)).to.be.false;
      expect(cpf(undefined)).to.be.false;
    });

    it('rejects invalid values', () => {
      expect(cpf('987.654.321-98')).to.be.false;
    });

    it('validates formatted strings', () => {
      expect(cpf('295.379.955-93')).to.be.true;
    });

    it('validates unformatted strings', () => {
      expect(cpf('29537995593')).to.be.true;
    });

    it('validates messed strings', () => {
      expect(cpf('295$379\n955...93')).to.be.true;
    });
  });
});
