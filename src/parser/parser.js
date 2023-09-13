const { parseJsToTokens } = require('./parse-js-to-tokens');
const { parseJsToAst } = require('./parse-js-to-ast');

const parser = {
  parseJsToTokens,
  parseJsToAst,
};

module.exports = parser;
