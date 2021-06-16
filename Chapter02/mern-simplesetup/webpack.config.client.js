const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd() //this just gets the root

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [ //entry tells it where to look for the file to bundle/compile
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js') //this creates a string that leads to root/client/main.js
    ],
    output: {//this just tells it where to output the output of the bundling
        path: path.join(CURRENT_WORKING_DIR , '/dist'), 
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },  
    plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
    }
}

module.exports = config
