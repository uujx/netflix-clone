const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8088,
    hot: true,
    open: true
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Netflix Clone',
      template: './dist/index.html'
    })
  ]
}