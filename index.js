var esprima = require('esprima');

var program = 'var x = 1, y = x + 2';

var tokens = esprima.tokenize(program);

console.dir(tokens, { depth: Infinity });

var abstractSyntaxTree = esprima.parseScript(program);

console.dir(abstractSyntaxTree, { depth: Infinity });
