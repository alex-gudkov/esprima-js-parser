const fs = require('node:fs');
const path = require('node:path');
const esprima = require('esprima');

function parseJsToTokens(inputFile, outputFile) {
  // read JS file
  const inputFilePath = path.join(__dirname, '..', '..', inputFile);
  const inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // tokenize JS file
  const tokens = esprima.tokenize(inputFileData);

  // write tokens file
  const outputFilePath = path.join(__dirname, '..', '..', outputFile);
  const outputFileData = JSON.stringify(tokens, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

module.exports = { parseJsToTokens };
