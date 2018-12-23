/**
 * Created by xzl on 2018/12/20.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');





module.exports = {
    mode:'development',
    entry:  __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    optimization:{
        minimize:false,
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            //modules: true, // 指定启用css modules
                            //localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            },
            {
                test:/\.(woff2?|eot|ttf|otf|jpg|png|svg)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        'less':[
                            'vue-style-loader','css-loader','less-loader'
                        ]
                    }
                }
            },
            {
                test:/\.less$/,
                use:[
                    'vue-style-loader','css-loader','less-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname,'./src')
        }
    },
    plugins:[
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new CleanWebpackPlugin('dist/*.*', {        //自动清除多余js文件
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new VueLoaderPlugin()
    ]
}

