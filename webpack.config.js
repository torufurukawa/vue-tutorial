module.exports  = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  entry: "./main.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ]
  }
}