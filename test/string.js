const expect = require('chai').expect;
const Validators = require('src/string');

describe('Validating strings with', () => {
  describe('#fullName', () => {
    it('returns true on a two-word string', () => {
      expect(Validators.fullName('Foo Bar')).to.be.true;
    });
    it('returns true on a three-word string', () => {
      expect(Validators.fullName('Foo Bar FuBar')).to.be.true;
    });
    it('returns false on a one-word string', () => {
      expect(Validators.fullName('OneWord')).to.be.false;
    });
    it('returns false on an undefined or null string', () => {
      expect(Validators.fullName(undefined)).to.be.false;
      expect(Validators.fullName(null)).to.be.false;
    });
  });

  describe('#email', () => {
    it('returns true on text-only email components', () => {
      expect(Validators.email('foobar@foo.com')).to.be.true;
    });
    it('returns true on a mixed text and numbers email components', () => {
      expect(Validators.email('foob4r@foo.com')).to.be.true;
      expect(Validators.email('foobar@f1.com')).to.be.true;
      expect(Validators.email('foob4r@f1.com')).to.be.true;
    });
    it('returns true when local-part uses plus sign to join words', () => {
      expect(Validators.email('foo+bar@foo.com')).to.be.true;
    });
    it('returns true when local-part uses a dot to join words', () => {
      expect(Validators.email('foo.bar@foo.com')).to.be.true;
    });
    it('returns true when domain has multiple subdomains', () => {
      expect(Validators.email('foo.bar@foo.bar.com')).to.be.true;
    });
    it('returns false when local-part is missing', () => {
      expect(Validators.email('@foo.com')).to.be.false;
    });
    it('returns false when domain is missing', () => {
      expect(Validators.email('foobar')).to.be.false;
    });
    it('returns false when domain does not have country extension', () => {
      expect(Validators.email('foobar@foo')).to.be.false;
      expect(Validators.email('foobar@foo.')).to.be.false;
    });
  });
});
