const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// For our css modules these will be locally scoped
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true
    // localIdentName: '[name]_[local]_[hash:base64:5]',
    // sourceMap: false, // turned off as causes delay
    // scss: true
  }
}

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [require('autoprefixer')]
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

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.(sc|sa|c)ss$/,
      //   exclude: /\.module\.(sc|sa|c)ss$/,
      //   use: ['style-loader', 'css-loader', PostCSSLoader, 'sass-loader']
      // },
      {
        // TODO: css modules + typescript
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:6]',
                exportLocalsConvention: 'camelCase'
              }
            }
          },
          PostCSSLoader,
          'sass-loader'
        ]
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
