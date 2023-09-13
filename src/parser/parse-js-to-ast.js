var fs = require('node:fs');
var path = require('node:path');
var esprima = require('esprima');

function parseJsToAst(inputFile, outputFile) {
  // read JS file
  var inputFilePath = path.join(__dirname, '..', '..', inputFile);
  var inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // parse JS file
  var abstractSyntaxTree = esprima.parse(inputFileData);

  // write AST file
  var outputFilePath = path.join(__dirname, '..', '..', outputFile);
  var outputFileData = JSON.stringify(abstractSyntaxTree, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

module.exports = { parseJsToAst };
