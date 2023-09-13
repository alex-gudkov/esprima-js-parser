var { parseJsToTokens } = require('./parse-js-to-tokens');
var { parseJsToAst } = require('./parse-js-to-ast');

var parser = {
  parseJsToTokens,
  parseJsToAst,
};

module.exports = parser;
