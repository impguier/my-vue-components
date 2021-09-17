const baseConfig = require('./base') 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge').merge
const { pathResolve } = require('../common/utils')
const dev = {
    mode: 'development',
    entry:{
        index:pathResolve('../example/index.js')
    },
    devServer:{        
        compress: true,
        port: 9000
    },    
    plugins:[
        new HtmlWebpackPlugin({
            template:pathResolve('../example/index.html'),
            title:'development',
            inject: true
        })
    ]
}
console.log(pathResolve('../example/index.html'))
const config = merge(
    baseConfig, dev
)
console.log(config.plugins[1].userOptions)
module.exports = config