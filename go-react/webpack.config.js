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
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};
