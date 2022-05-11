module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'commonjs': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-var-requires': 'off'
  }
}
