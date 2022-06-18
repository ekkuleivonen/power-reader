// module.exports = {
//     mode: process.env.NODE_ENV || "production",
//     devtool: false,
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 exclude: /node_modules/,
//                 use: { loader: "ts-loader" },
//             },
//         ],
//     },
//     resolve: {
//         extensions: [".ts", ".js"],
//     },
// };

////////////////////

var config = {
  mode: process.env.NODE_ENV || "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: { loader: "ts-loader" },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

var highlightConfig = Object.assign({}, config, {
  name: "highlight",
  entry: "./src/plugins/highlight/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "highlight.js",
  },
});
var backGroundScriptConfig = Object.assign({}, config, {
  name: "backGroundScript",
  entry: "./src/background-scripts/background.ts",
  output: {
    path: __dirname + "/dist",
    filename: "background.js",
  },
});

var popUpScriptConfig = Object.assign({}, config, {
  name: "popUpScript",
  entry: "./src/popup-scripts/popup.ts",
  output: {
    path: __dirname + "/dist",
    filename: "popup.js",
  },
});

var readerModeConfig = Object.assign({}, config, {
  name: "readerMode",
  entry: "./src/plugins/reader-mode/index.ts",
  output: {
    path: __dirname + "/dist",
    filename: "reader-mode.js",
  },
});

module.exports = [
  highlightConfig,
  popUpScriptConfig,
  backGroundScriptConfig,
  readerModeConfig,
];
