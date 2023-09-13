const parser = require('./parser/parser');
const utils = require('./utils/utils');

function main() {
  try {
    const flags = utils.parseCommandLineFlags();

    if (flags.isJsToTokens) {
      parser.parseJsToTokens(flags.inputFile, flags.outputFile);
    }

    if (flags.isJsToAst) {
      parser.parseJsToAst(flags.inputFile, flags.outputFile);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
