/**
 * 服务端配置注意
 * target：node 在哪个环境使用
 * libraryTarget：“commonjs2”
 * webpack-node-externals 服务端不需要把第三方的库打入js文件，只需要从node_modules中那就可以
 * css处理：null-loader ignore-loader，服务端不认识css不需要处理
 */

const path = require("path")
const nodeExternals = require("webpack-node-externals")
const baseConfig = require("./webpack.base")
const { merge } = require("webpack-merge")

const serverConfig = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/client/entry-server.js"),
  output: {
    filename: "server.bundile.js",
    libraryTarget: "commonjs2",
  },
  target: "node",
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "ignore-loader",
      },
    ],
  },
}

module.exports = merge(baseConfig, serverConfig)
