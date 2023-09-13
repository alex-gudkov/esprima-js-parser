const fs = require('node:fs');
const path = require('node:path');
const esprima = require('esprima');

function parseJsToAst(inputFile, outputFile) {
  // read JS file
  const inputFilePath = path.join(__dirname, '..', '..', inputFile);
  const inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // parse JS file
  const abstractSyntaxTree = esprima.parse(inputFileData);

  // write AST file
  const outputFilePath = path.join(__dirname, '..', '..', outputFile);
  const outputFileData = JSON.stringify(abstractSyntaxTree, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

module.exports = { parseJsToAst };
