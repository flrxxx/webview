/**
 * Created by Administrator on 2018/12/21.
 */
const path = require('path');
const dfPath = require('./path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge =require('webpack-merge');

const RS = (...arg)=>path.resolve( __dirname , ...arg )
console.log(RS)

// 合并方式配置
let strategyMerge = merge.strategy({
    entry: 'prepend'
});

let config = {
    entry:  __dirname + "/src/main.js",//入口文件
    output: {
        path: dfPath.dist,
        filename: '[name].bundle.js',
        publicPath: '/',
        chunkFilename: '[name].sepChunk.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude: [
                    dfPath.node_modules
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            // css模块化，方便多人开发
                            module:true,
                            // 定义模块化css后的类名（默认为hash值，可读性差）path:路劲； name：文件名； local：本地定义的className
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    }
                ],
                // 排除的文件，遇到这些文件不会用当前 loader 处理，也就不会模块化
                exclude:[
                    RS('./src/common'),
                    RS('node_modules')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    RS('./src/common'),
                    RS('node_modules')
                ]

            },

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['url-loader?limit=8192'],
            }
        ]
    },
    plugins:[
        // 模块热替换功能
        new webpack.HotModuleReplacementPlugin()
    ],

    // 代码映射，方便报错时，找到对应的源代码
    devtool: 'cheap-module-eval-source-map',

    devServer:{
        // 服务器打包后，输出的资源路劲
        publicPath:'/',
        open:true
    }
};

// 导出合并后的webpack配置
module.exports = strategyMerge( base , config );