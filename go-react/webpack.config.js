module.exports = {
    mode: "development",
    entry: {
        bundle: ["babel-polyfill", './src/index.js']
    },
    output: {
        path: __dirname + '/static',
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            },
            {
                enforce: "pre",
                test: /\.jsx$/,
                loader: "source-map-loader"
            }
        ]
    }
};
