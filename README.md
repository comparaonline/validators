# Validators
[![CircleCI](https://circleci.com/gh/comparaonline/validators.svg?style=svg&circle-token=ce5d0f911cb4cdf7378989640acbc3f771298d86)](https://circleci.com/gh/comparaonline/validators)

A collection of general purpose validations. Currently it only holds **javascript** validations supporting both CommonJS and the browser.

## Getting Started

### Node / NPM
#### Install
```
$ npm install comparaonline/validators
```

#### Use
```js
var Validators = require('validators');
console.log(Validators.string.fullName('Foo Bar')); // will log true
```
You can use the ES2015 module sintax too:

```js
import Validators from 'validators';
console.log(Validators.string.fullName('Foo Bar')); // will log true
```


### Browser
1. Download `dist/validators.min.js`
2. Include it in your page:

   ```html
   <script type="text/javascript" src="validators.js"></script>
   ```

3. Use it under the global name `Validators`:

   ```js
   alert(Validators.string.fullName('Foo Bar')); // will alert true
   ```

## Validations
### String
- email
- fullName
- password

### CL
- nationalId
- nationalIdLength
- phone
- plate

### CreditCard
- creditCard
- isAmericanExpress
- isDinersClub
- isMastercard
- isVisa

## Development
### Run tests
```
$ npm test
```

### Build dist browser-compatible js
```
$ npm run build
```
