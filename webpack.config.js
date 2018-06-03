const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');//webpack 插件 ，作为项目的入口的 html
const isDev = process.env.NODE_ENV === 'development';//判断是否属于开发环境
const webpack = require('webpack')


const config=   {
   target:'web',//webpack 的编译目标是在 web 平台
   entry: path.join(__dirname,'src/index.js'),
   output: {
      filename:'bundle.js',
      path: path.join(__dirname,'dist')
   },
   module:{
      rules:[
         {
            test :/\.vue$/,
            loader:'vue-loader'
         },
         {
            test:/\.css$/,
            use: [
               'style-loader',
               'css-loader',
            ],
         },
         {
            test:/\.styl$/,
            use:[
               'style-loader',
               'css-loader',
               'stylus-loader',
            ]
         },
         {
            test:/\.(gif|jpg|jpeg|png|svg)$/,
            use:[
               {
                  loader:'url-loader',
                  options:{
                     limit:1024,
                     name:'[name].[ext]'
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new webpack.DefinePlugin({//判断开发者写的代码  进行打包处理
         'process-env': {
            NODE_ENV: isDev ? '"development"': '"production"'
         }
      }),
      new HTMLPlugin()
   ]
}

// 安装一个cross-env 包，判断 开发环境 和生产环境   在 package.josn 里面去配置； 
// "build": "cross-env NODE_ENV=production webpack --config webpack.config.js", 生产环境 
//"dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"  开发环境
if(isDev) {
   config.devServer = {
      port:'8000',
      host:'0.0.0.0',
      overlay: {
         errors: true,//显示webpack编译的错误
      }
   }
}

module.exports = config;