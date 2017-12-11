const webpack = require('webpack');

module.exports = {
    entry: "./src/hud.ts",
    output: {
        filename: "./dist/hud.js",
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.ts?$/, use: "ts-loader", enforce: "pre" },
            { test: /\.json$/, use: "json-loader", enforce: "pre" }
        ]
    }
};