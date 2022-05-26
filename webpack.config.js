const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const { production } = env

  return {
    mode: production ? 'production' : 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '',
      }),
    ],
    output: {
      filename: 'main.js',
      path: __dirname + '/dist',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
      minimizer: [
        `...`, // webpack@5: extend existing minimizers
        new CssMinimizerPlugin(),
      ],
    },
  }
}
