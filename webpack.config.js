const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [require('autoprefixer')]
  }
}

const env = dotenv.config().parsed
const processEnv = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})


module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8088,
    hot: true,
    open: true,
    historyApiFallback: true
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.module\.(sc|sa|c)ss$/,
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
      },
      {
        test: /\.(sc|sa|c)ss$/,
        exclude: /\.module\.(sc|sa|c)ss$/,
        use: ['style-loader', 'css-loader', PostCSSLoader, 'sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-react-loader'
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin(processEnv),
    new HtmlWebpackPlugin({
      title: 'Netflix Clone',
      template: './src/index.html'
    }),
    new ReactRefreshWebpackPlugin()
  ]
}
