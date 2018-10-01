const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: 'bundle.js' 
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
                                outputPath: "images",
                                publicPath: ""
                            }
                        },

                    ]
                }
           ]
        },
        //setting the source map file
        devtool: 'cheap-module-eval-source-map',
        //setting the development server
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 3000,
            historyApiFallback: true
          },
          node: {
            fs: "empty"
         }
    }