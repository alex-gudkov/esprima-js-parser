const fsPromises = require('node:fs/promises');
const path = require('node:path');

const esprima = require('esprima');

async function parseJsToAst(inputFile, outputFile) {
  // read JS file
  const inputFilePath = path.join(__dirname, '..', '..', inputFile);
  const inputFileData = await fsPromises.readFile(inputFilePath, { encoding: 'utf8' });

  // parse JS file
  const abstractSyntaxTree = esprima.parse(inputFileData);

  // write AST file
  const outputFilePath = path.join(__dirname, '..', '..', outputFile);
  const outputFileData = JSON.stringify(abstractSyntaxTree, null, 2) + '\n';

  await fsPromises.writeFile(outputFilePath, outputFileData);
}

module.exports = { parseJsToAst };
