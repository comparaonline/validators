/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { Chance } from 'chance';
import {
  creditCard,
  isAmericanExpress,
  isDinersClub,
  isMastercard,
  isVisa
} from '../src/credit-card';

const chance = new Chance();

describe('Credit Card validations', () => {
  describe('#creditCard', () => {
    context('Mastercard', () =>
      it('returns true', () =>
        expect(creditCard(chance.cc({ type: 'Mastercard' }))).to.be.true
      )
    );

    context('Visa', () =>
      it('returns true', () =>
        expect(creditCard(chance.cc({ type: 'Visa' }))).to.be.true
      )
    );

    context('American Express ', () =>
      it('returns true', () =>
        expect(creditCard(chance.cc({ type: 'American Express' }))).to.be.true
      )
    );

    context('Mod10 with length equal to 12', () =>
      it('returns true', () => expect(creditCard('100500101017')).to.be.true)
    );

    context('Mod11 (RUT)', () =>
      it('returns false', () => expect(creditCard('75769172')).to.be.false)
    );

    context('Mod10 with length equal to 11', () =>
      it('returns false', () => expect(creditCard('10050010106')).to.be.false)
    );

    context('Mod10 with length equal to 20', () =>
      it('returns false', () => expect(creditCard('11122233445566779018')).to.be.false)
    );

    context('with letters', () =>
      it('returns false', () => expect(creditCard('creditcardnumber')).to.be.false)
    );
  });

  describe('#isAmericaExpress', () => {
    context('Mastercard', () =>
      it('returns false', () =>
        expect(isAmericanExpress(chance.cc({ type: 'Mastercard' }))).to.be.false
      )
    );

    context('American Express', () =>
      it('returns false', () =>
        expect(isAmericanExpress(chance.cc({ type: 'American Express' }))).to.be.true
      )
    );
  });

  describe('#isVisa', () => {
    context('Mastercard', () =>
      it('returns false', () => expect(isVisa(chance.cc({ type: 'Mastercard' }))).to.be.false)
    );

    context('Visa', () =>
      it('returns true', () => expect(isVisa(chance.cc({ type: 'Visa' }))).to.be.true)
    );
  });

  describe('#isDinersClub', () => {
    context('Mastercard', () =>
      it('returns false', () =>
        expect(isDinersClub(chance.cc({ type: 'Mastercard' }))).to.be.false
      )
    );

    context('Diners Club International', () =>
      it('returns true', () =>
        expect(isDinersClub(chance.cc({ type: 'Diners Club International' }))).to.be.true)
    );
  });

  describe('#isMastercard', () => {
    context('Diners Club International', () =>
      it('returns false', () =>
        expect(isMastercard(chance.cc({ type: 'Diners Club International' }))).to.be.false
      )
    );

    context('Mastercard', () =>
      it('returns true', () =>
        expect(isMastercard(chance.cc({ type: 'Mastercard' }))).to.be.true
      )
    );
  });
});
