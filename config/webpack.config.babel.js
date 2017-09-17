import path from 'path';

console.log(path.resolve(__dirname, "../public"));

module.exports = {
    entry: "./app/index.js",

    output: {
        path: path.resolve(__dirname, "../public"),
        filename: "index.js",
        publicPath: "/public/"
    },

    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                // {
                //     loader: 'sass-resources-loader',
                //     options: {
                //         resources: [
                //             './src/style/desktop/resources/resources.scss',
                //             './src/style/desktop/resources/colors.scss',
                //             './src/style/desktop/resources/dimensions.scss',
                //             './src/style/desktop/resources/mixins/index.scss'
                //         ]
                //     },
                // }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'ng-annotate-loader',
                'babel-loader'
            ]
        }, {
            test: /.html$/,
            use: 'html-loader'

        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
            use: 'file-loader'
        }]
    },
    devtool: "source-map",

    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:8000'
        },
        watchContentBase: true,
        contentBase: path.join(__dirname, '../public'),
        publicPath: '/public/bundle',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
    },

    plugins: [],
};