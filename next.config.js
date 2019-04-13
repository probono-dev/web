const withTypescript = require('@zeit/next-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

const config = withCSS({
  target: 'serverless',
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

module.exports = withFonts(withTypescript(config));
