const withTypescript = require('@zeit/next-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withOffline = require('next-offline');
const {
  resolve
} = require('path');

const workboxOpts = require('./config/workbox');
const withLinaria = require('./config/withLinaria');
const withFileLoader = require('./config/withFileLoader');

const config = {
  target: 'serverless',
  distDir: '../.next',
  workboxOpts,
};

const combine = (defaultConfig, ...plugins) => {
  return plugins.reduce((currentConfig, plugin) => plugin(currentConfig), defaultConfig);
}

module.exports = combine(
  config,
  withOffline,
  withImages,
  withFonts,
  withTypescript,
  withCSS,
  withLinaria,
  withFileLoader(/\.(webmanifest)$/),
);