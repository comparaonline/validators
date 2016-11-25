# Validators
A collection of general purpose validations. Currently it only holds **javascript** validations supporting both NPM/CommonJS and the browser.

## Getting Started

### Node
#### Install
```
npm install comparaonline/validators
```

#### Use
```js
const Validators = require('validators');
console.log(Validators.string.fullName('Foo Bar')); // will log true
```

### Browser
1. Download either `dist/validators.js` or `dist/validators.min.js`
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
- fullName
- email

### CL
- nationalId
- phone


## Development
### Run tests
```
npm test
```

### Build dist browser-compatible js
```
npm run build
```
