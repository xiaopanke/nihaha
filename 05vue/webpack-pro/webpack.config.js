let path=require('path')
let HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    //解析es6语法，需要提供规则
    module:{
        rules:[//设置对应的规则，js用babel-loader进行翻译，node_modules文件夹不需要翻译
            {test:/.js$/,use:'babel-loader',exclude:/node_modules/},
            //style-loader将转化好的css插入到style标签内
            //css-loader 用来解析css模块
            {test:/.css$/,use:['style-loader','css-loader']},
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            //一般情况下8k以下的图片，我们会转化成base64
            //limit可以限制图片超过此值时不进行转化
            {test:/.(jpg|png|gif)$/,use:'url-loader?limit=10192'}
        ]
    },
    plugins:[//配置插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}
