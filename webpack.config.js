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

var contentScriptConfig = Object.assign({}, config, {
    name: "contentScript",
    entry: "./src/content-scripts/content.ts",
    output: {
        path: __dirname+"/dist",
       filename: "content.js"
    },
});
var backGroundScriptConfig = Object.assign({}, config, {
    name: "backGroundScript",
    entry: "./src/background-scripts/background.ts",
    output: {
        path: __dirname+"/dist",
       filename: "background.js"
    },
});

var popUpScriptConfig = Object.assign({}, config,{
    name: "popUpScript",
    entry: "./src/popup-scripts/popup.ts",
    output: {
       path: __dirname+"/dist",
       filename: "popup.js"
    },
});

module.exports = [
    contentScriptConfig, popUpScriptConfig, backGroundScriptConfig       
];
