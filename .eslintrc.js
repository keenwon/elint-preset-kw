"use strict"

module.exports = {
  extends: "standard",
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
    jest: true
  },
  rules: {
    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }]
  }
}
