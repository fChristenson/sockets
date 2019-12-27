const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "public", "main.ts"),
  output: {
    path: path.resolve(__dirname, "src", "public"),
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loaders: "ts-loader"
      }
    ]
  }
};
