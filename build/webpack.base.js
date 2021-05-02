const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],
}
