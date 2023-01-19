const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                loader: "file-loader",
                test: /\.(png|jpg|gif|webp|svg)$/,
                options: {
                    outputPath: "outputImages/",
                    name:"[name].[ext]"
                }
            },
            {
                test: /\.css$/, 
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack project",
            chunks: ["main"]
        })
    ]
}