const fsPromises = require('node:fs/promises');
const path = require('node:path');

const esprima = require('esprima');

async function parseJsToTokens(inputFile, outputFile) {
  // read JS file
  const inputFilePath = path.join(__dirname, '..', '..', inputFile);
  const inputFileData = await fsPromises.readFile(inputFilePath, { encoding: 'utf8' });

  // tokenize JS file
  const tokens = esprima.tokenize(inputFileData);

  // write tokens file
  const outputFilePath = path.join(__dirname, '..', '..', outputFile);
  const outputFileData = JSON.stringify(tokens, null, 2) + '\n';

  await fsPromises.writeFile(outputFilePath, outputFileData);
}

module.exports = { parseJsToTokens };
