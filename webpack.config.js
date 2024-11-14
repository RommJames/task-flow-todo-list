const { watchFile } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    mode : "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        new FaviconsWebpackPlugin({
            logo: "./src/favicon.png",
            prefix: "icons/",
            emitStats: false,
            statsFilename: "iconstats.json",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
};