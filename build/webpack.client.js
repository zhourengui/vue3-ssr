const { merge } = require("webpack-merge")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const baseConfig = require("./webpack.base")

const clientConfig = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/client/entry-client.js"),
  output: {
    filename: "client.bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    port: 8080,
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/client/index.template.html"),
    }),
  ],
}

module.exports = merge(baseConfig, clientConfig)
