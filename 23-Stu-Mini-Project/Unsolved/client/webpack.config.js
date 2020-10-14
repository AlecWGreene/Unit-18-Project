const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Add webpack configuration code here
  mode: "development",
  entry: {
    app: "./client/assets/js/index.js",
    topic: "./client/assets/js/topic.js",
    favorites: "./client/assets/js/favorites.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Newsy",
      short_name: "Newsy",
      description: "News aggregator",
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // files must end in ".js" to be transpiled
        exclude: /node_modules/, // don't transpile code from "node_modules"
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
