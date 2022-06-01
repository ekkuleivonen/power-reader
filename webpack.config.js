module.exports = {
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
