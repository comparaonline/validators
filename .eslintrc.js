module.exports = {
  'extends': 'airbnb',
  'env': {
    'mocha': true
  },
  'rules': {
    'arrow-parens': 0,
    'comma-dangle': ["error", "never"],
    'arrow-body-style' : [2, 'as-needed'],
    'arrow-parens' : 0,
    'quotes': [2, 'single'],
    'prefer-spread': 0,
    'prefer-rest-params': 0,
    'func-names': 0,
    'import/no-unresolved': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true, 'optionalDependencies': false, 'peerDependencies': false}]
  }
}
