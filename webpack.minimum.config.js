const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'minimum', 'index.js'),

  output: {
    path: path.join(__dirname, 'lib'),
    filename: `minimum-${process.env.NAME}.js`,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new BabiliPlugin({
      deadcode: process.env.DISABLE_DCE_PLUGIN !== '1',
      simplify: process.env.DISABLE_SIMPLIFY_PLUGIN !== '1',

      // Disable the others
      evaluate: false,
      infinity: false,
      numericLiterals: false,
      mangle: false,
      replace: false,
      mergeVars: false,
      booleans: false,
      regexpConstructors: false,
      removeConsole: false,
      removeDebugger: false,
      removeUndefined: false,
      undefinedToVoid: false,
    }),
  ],
};
