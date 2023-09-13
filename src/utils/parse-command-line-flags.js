var util = require('node:util');

/**
 * @returns {{ inputFile: string | null; outputFile: string | null; isJsToTokens: boolean; isJsToAst: boolean; }} The parsed command line flags.
 */
function parseCommandLineFlags() {
  var options = {
    'in': {
      type: 'string',
    },
    'out': {
      type: 'string',
    },
    'jsToTokens': {
      type: 'boolean',
    },
    'jsToAst': {
      type: 'boolean',
    },
  };

  var parsedArgs = util.parseArgs({
    args: process.argv,
    options,
    strict: false,
  });

  if (!parsedArgs.values['jsToTokens'] && !parsedArgs.values['jsToAst']) {
    throw new Error('Missing conversion option');
  }

  if (!parsedArgs.values['in']) {
    throw new Error('Missing input file');
  }

  if (!parsedArgs.values['out']) {
    throw new Error('Missing output file');
  }

  return {
    inputFile: parsedArgs.values['in'] ?? null,
    outputFile: parsedArgs.values['out'] ?? null,
    isJsToTokens: parsedArgs.values['jsToTokens'] ?? false,
    isJsToAst: parsedArgs.values['jsToAst'] ?? false,
  };
}

module.exports = { parseCommandLineFlags };
