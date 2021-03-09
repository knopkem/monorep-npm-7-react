const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    //our index file
    entry: path.resolve(__dirname, "src/index.jsx"),
    //Where we put the production code
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "ui.bundle.min.js",
        publicPath: "/",
        library: 'z-react-cmp',
        libraryTarget: 'umd'
    },
    // This says to webpack that we are in development mode and write the code in webpack file in different way
    mode: "development",
    module: {
        rules: [
            //Allows use javascript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, //don't test node_modules folder
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
        ],
    },
    plugins: [
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
    ],
    //Config for webpack-dev-server module
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        port: 8000,
    },
};