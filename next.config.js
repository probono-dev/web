const withTypescript = require('@zeit/next-typescript');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const {
  readFileSync
} = require('fs');

const getCommitHash = () => {
  const rev = readFileSync('.git/HEAD').toString();
  if (rev.indexOf(':') === -1) {
    return rev;
  } else {
    return readFileSync('.git/' + rev.substring(5)).toString();
  }
}

const config = {
  target: 'serverless',
  generateBuildId: async () => {
    return getCommitHash();
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [{
        loader: 'linaria/loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      }, ],
    });
    return config;
  },
}

module.exports = withImages(withFonts(withTypescript(withCSS(config))));