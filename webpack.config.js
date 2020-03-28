const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/javascript/script.js",
        analyics: "./src/javascript/analytics.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    }
}
