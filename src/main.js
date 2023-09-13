const parser = require('./parser/parser');
const utils = require('./utils/utils');

async function main() {
  try {
    const flags = utils.parseCommandLineFlags();

    if (flags.isJsToTokens) {
      await parser.parseJsToTokens(flags.inputFile, flags.outputFile);
    }

    if (flags.isJsToAst) {
      await parser.parseJsToAst(flags.inputFile, flags.outputFile);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
