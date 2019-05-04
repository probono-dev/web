const withTypescript = require('@zeit/next-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

const { DEPLOYMENT_TARGET } = process.env;

const config = withCSS({
  target: DEPLOYMENT_TARGET,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });
    return config;
  },
});

module.exports = withImages(withFonts(withTypescript(config)));
