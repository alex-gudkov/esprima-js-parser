var fs = require('node:fs');
var path = require('node:path');
var esprima = require('esprima');

function parseJsToTokens(inputFile, outputFile) {
  // read JS file
  var inputFilePath = path.join(__dirname, '..', '..', inputFile);
  var inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // tokenize JS file
  var tokens = esprima.tokenize(inputFileData);

  // write tokens file
  var outputFilePath = path.join(__dirname, '..', '..', outputFile);
  var outputFileData = JSON.stringify(tokens, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

module.exports = { parseJsToTokens };
