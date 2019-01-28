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

    it('validates against blacklisted values', () => {
      expect(cpf('00000000000')).to.be.false;
      expect(cpf('11111111111')).to.be.false;
      expect(cpf('22222222222')).to.be.false;
      expect(cpf('33333333333')).to.be.false;
      expect(cpf('44444444444')).to.be.false;
      expect(cpf('55555555555')).to.be.false;
      expect(cpf('66666666666')).to.be.false;
      expect(cpf('77777777777')).to.be.false;
      expect(cpf('88888888888')).to.be.false;
      expect(cpf('99999999999')).to.be.false;
    });
  });
});
