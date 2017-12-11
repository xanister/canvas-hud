const webpack = require('webpack');

module.exports = {
    entry: "./src/canvas-hud.ts",
    output: {
        filename: "./dist/index.js",
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