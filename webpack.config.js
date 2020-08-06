const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// For our css modules these will be locally scoped
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    sourceMap: false // turned off as causes delay
  }
}

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
    hot: true
    // open: true
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
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // TODO: css modules + typescript
        test: /\.module\.css$/,
        use: ['style-loader', CSSModuleLoader]
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
