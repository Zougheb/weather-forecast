module.exports = {
    mode: 'production',
    entry: ["./src/index.js"],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ["..", ".js", ".jsx"]
    },
    devServer: {
        contentBase: "./"
    }
};
