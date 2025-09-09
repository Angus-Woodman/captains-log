const path = require("path")

module.exports = {
  entry: "./captains_log/frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "captains_log/frontend/static/frontend/"),
    filename: "main.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  watch: true,
}
