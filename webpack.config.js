let mode = "development"; 

if(process.env.NODE_ENV == "production") {
    mode = "production";
}

module.exports = {
    mode: mode,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    devServer: {
        contentBase: "./dist"
    }
}