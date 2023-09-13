var fs = require('node:fs');
var path = require('node:path');
var esprima = require('esprima');
var utils = require('./utils/utils');

function jsToTokens(inputFile, outputFile) {
  // read JS file
  var inputFilePath = path.join(__dirname, '..', inputFile);
  var inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // tokenize JS file
  var tokens = esprima.tokenize(inputFileData);

  // write tokens file
  var outputFilePath = path.join(__dirname, '..', outputFile);
  var outputFileData = JSON.stringify(tokens, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

function jsToAst(inputFile, outputFile) {
  // read JS file
  var inputFilePath = path.join(__dirname, '..', inputFile);
  var inputFileData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });

  // parse JS file
  var abstractSyntaxTree = esprima.parse(inputFileData);

  // write AST file
  var outputFilePath = path.join(__dirname, '..', outputFile);
  var outputFileData = JSON.stringify(abstractSyntaxTree, null, 2) + '\n';

  fs.writeFileSync(outputFilePath, outputFileData);
}

var parser = {
  jsToTokens,
  jsToAst,
};

function main() {
  try {
    var flags = utils.parseCommandLineFlags();

    if (flags.isJsToTokens) {
      parser.jsToTokens(flags.inputFile, flags.outputFile);
    }

    if (flags.isJsToAst) {
      parser.jsToAst(flags.inputFile, flags.outputFile);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
