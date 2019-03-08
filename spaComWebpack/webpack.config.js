const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./src/assets/js/navegacao.js',
    output:{
        filename:'app.min.js',
        path: __dirname + '/buildWebpack/assets'
    },
    devServer:{
        contentBase: "./buildWebpack",
        port:9000
    },
    optimization:{
        minimizer:[
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.min.css"            
        })
    ],
    module:{
        rules:[{
            test:/\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}



// {
//     test: /\.html$/,
//     use: [ {
//       loader: 'html-loader',
//       options: {
//         minimize: true
//       }
//     }