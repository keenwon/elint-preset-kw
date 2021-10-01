/**
 * elint-preset-kw
 *
 * npm：https://www.npmjs.com/package/elint-preset-kw
 * github：https://github.com/keenwon/elint-preset-kw
 *
 * 此文件自动生成，禁止修改！
 * 此文件自动生成，禁止修改！
 * 此文件自动生成，禁止修改！
 */

const fs = require('fs')

const config = {
  extends: [require('elint-preset-kw').eslint],
}

if (fs.existsSync('./tsconfig.json')) {
  config.parserOptions = {
    project: './tsconfig.json',
  }
}

module.exports = config
