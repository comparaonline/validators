/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { Chance } from 'chance';
import { fullName, email, password, creditCard } from '../src/string';

describe('Validating strings with', () => {
  describe('#fullName', () => {
    it('returns true on a two-word string', () => {
      expect(fullName('Foo Bar')).to.be.true;
    });
    it('returns true on a three-word string', () => {
      expect(fullName('Foo Bar FuBar')).to.be.true;
    });
    it('returns false on a one-word string', () => {
      expect(fullName('OneWord')).to.be.false;
    });
    it('returns false on an invalid string variable type', () => {
      expect(fullName(undefined)).to.be.false;
      expect(fullName(null)).to.be.false;
    });
  });

  describe('#email', () => {
    it('returns true on text-only email components', () => {
      expect(email('foobar@foo.com')).to.be.true;
    });
    it('returns true on a mixed text and numbers email components', () => {
      expect(email('foob4r@foo.com')).to.be.true;
      expect(email('foobar@f1.com')).to.be.true;
      expect(email('foob4r@f1.com')).to.be.true;
    });
    it('returns true when local-part uses plus sign to join words', () => {
      expect(email('foo+bar@foo.com')).to.be.true;
    });
    it('returns true when local-part uses a dot to join words', () => {
      expect(email('foo.bar@foo.com')).to.be.true;
    });
    it('returns true when domain has multiple subdomains', () => {
      expect(email('foo.bar@foo.bar.com')).to.be.true;
    });
    it('returns false when local-part is missing', () => {
      expect(email('@foo.com')).to.be.false;
    });
    it('returns false when domain is missing', () => {
      expect(email('foobar')).to.be.false;
    });
    it('returns false when domain does not have country extension', () => {
      expect(email('foobar@foo')).to.be.false;
      expect(email('foobar@foo.')).to.be.false;
    });
  });

  describe('#password', () => {
    context('without numbers', () => {
      it('returns false', () => {
        expect(password('dasjdsij')).to.be.false;
      });
    });
    context('without letters', () => {
      it('returns false', () => {
        expect(password('12343234')).to.be.false;
      });
    });
    context('with less than 8 chars', () => {
      it('returns false', () => {
        expect(password('abc123')).to.be.false;
      });
    });
    context('with letters, numbers and longer than 8 chars', () => {
      it('returns true', () => {
        expect(password('1p2a3s4s')).to.be.true;
      });
    });
    context('with letters, numbers, dots and longer than 8 chars', () => {
      it('returns true', () => {
        expect(password('1p.a.s.s')).to.be.true;
      });
    });
  });

  describe('#creditCard', () => {
    const chance = new Chance();

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
});
