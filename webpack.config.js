const path = require("path");

module.exports  = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ["", ".ts", ".js"]
  },
  entry: "./main.ts",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" },
          { test: /\.ts$/, loader: "ts-loader" }
      ]
  }
}