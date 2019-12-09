const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  entry: './out-tsc/i10/app/projects/one/src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new TerserPlugin({
      // Always process source maps.
      sourceMap: true,
      // Don't cache results as that will invalidate the benchmark results.
      cache: false,
      // Use the minimum parallelism of 2 to force reuse of the same workers.
      parallel: 2,
    })],
  }
};
