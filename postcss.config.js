module.exports = {
    plugins:[
        require('postcss-pxtorem')({
            rootValue:75,
            propList: ['*']
        }),        
        require('autoprefixer') 
    ]
}