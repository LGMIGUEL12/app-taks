const path = require("path");

module.exports = {
  entry: "./src/styles.js",
  output: {
    filename: "main.js",
    path: path.resolve("./public"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_module/,
      },
    ],
  },
};
