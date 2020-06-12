const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./dist/bundle.js"
    },
    mode: "development",
    devtool: 'inline-source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html$/, use: 'raw-loader' },
            // Creates `style` nodes from JS strings
            // Translates CSS into CommonJS
            // Compiles Sass to CSS
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4200
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Karso',
        template: './src/index.html',
        favicon: "./src/favicon.ico"
    })]
};
