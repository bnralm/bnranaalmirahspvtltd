const path = require('path');
const imageUrlPath = path.join(__dirname, 'public')

module.exports = {
    entry: {
        app: './app.js',
        appCss: './appCss.js'
    },
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: '[name].bundle.js' 
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
            port: 4000,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
              },
            historyApiFallback: true,
          },
          node: {
            fs: "empty"
         }
    }