const path = require('path');

// const CleanWebpackPlugin = require('clean-webpack-plugin')

// const HtmlWebpackPlugin  = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageUrlPath = path.join(__dirname, 'public')
console.log(imageUrlPath, '==>s');

module.exports = {
    entry: {
        app: './app.js',
        appCss: './appCss.js'
    },
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: '[name].[chunkhash:6].js' 
    },
    optimization: {
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
          }
    },
    mode: 'production',
    module : {
        rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_module/
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: '[path][name].[ext]',
                                outputPath: imageUrlPath,
                                publicPath: "",
                                limit: 10000
                            }
                        },

                    ]
                }
           ]
        },
        

        //setting the source map file
        devtool: 'source-map',
        //setting the development server
        node: {
            fs: "empty"
        },
        performance: {
            hints: 'warning'
        }
    }