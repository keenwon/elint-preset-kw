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
  extends: [require('elint-preset-kw').configs.eslint],
}

const tsconfigs = fs
  .readdirSync('./')
  .filter((file) => /^tsconfig(\..+)?\.json$/.test(file))

if (tsconfigs.length) {
  config.parserOptions = {
    project: tsconfigs,
  }
}

module.exports = config
