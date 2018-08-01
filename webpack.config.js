const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "src", "public"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "index.html"
    })
  ]
};

module.exports = config;
