const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development': 'production', //development ou production
    entry:'./src/principal.js', //endereço do arquivo principal, que iniciara o webpack
    output: { //configurar saida
        filename: 'principal.js', //nome do arquivo gerado
        path: __dirname + '/public' //pasta
    },
    devServer:{
        contentBase: "./public",
        port:9000
    },
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        //regras
        rules: [{
            test:/\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader'
            ]

        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }

}