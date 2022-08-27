// Imports

const path = require('path');
const webpack = require('webpack');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Set plugins

let pluginsConfig = [
  new MiniCssExtractPlugin(
    {
      filename: 'css/styles.css'
    }
  )
];

// Set variables by environment

let isProd = process.env.NODE_ENV === 'production';
let modeConfig = isProd ? 'production' : 'development';
let statsConfig = isProd ? 'normal' : 'normal';
let sourceMapConfig = isProd ? false : true;
let SourceMapDevToolPluginConfig = !isProd ? pluginsConfig.push(new webpack.SourceMapDevToolPlugin({})) : false;

//  Info flag

console.log('Running in ' + modeConfig + ' mode.');

// Module configuration

module.exports = {
  mode: modeConfig,
  stats: statsConfig,
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    filename: 'js/scripts.js',
    path: path.resolve(__dirname, 'assets'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: sourceMapConfig,
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: sourceMapConfig,
              sassOptions: {
                // @see: https://tinyurl.com/yzf754ed
                importer: globImporter()
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img',
          publicPath: '../img/',
        }
      },
      {
        test: /montserrat.*\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/montserrat',
          publicPath: '../fonts/montserrat/',
        }
      },
      // {
      //   test: /quentin.*\.(eot|ttf|woff|woff2)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     outputPath: 'fonts/quentin',
      //     publicPath: '../fonts/quentin/',
      //   }
      // },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'icons',
          publicPath: '../icons/',
        }
      },
      {
        test: /bootstrap-icons\.(woff|woff2)$/,
        include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'webfonts',
          publicPath: '../webfonts/',
        }
      }
    ],
  },
  plugins: pluginsConfig,
}
