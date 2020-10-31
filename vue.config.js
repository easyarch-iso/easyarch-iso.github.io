const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// vue.config.js
module.exports = {
  outputDir: "docs",
  pages: {
    index: {
      // entry for the page, mandatory
      entry: "src/main.js",
      // the source template
      template: "html/index.html",
    },
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {from: path.resolve("./html"), to: path.resolve("./docs")},
      ]),
    ],
  },
};
