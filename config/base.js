const { pathResolve } = require('../common/utils')
const {VueLoaderPlugin} = require('vue-loader')
const config = {    
    resolve:{
        extensions:['.js','.vue'],
        alias:{
            'src': pathResolve('../src'),
            'vue': 'vue/dist/vue.esm.js'              
        }
    },    
    module:{
        rules:[
            {
                test:/\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test:/\.(jpg|gif|png|ttf|wof)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
module.exports = config