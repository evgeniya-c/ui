const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ["style-loader/useable", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
    ]
  }
};