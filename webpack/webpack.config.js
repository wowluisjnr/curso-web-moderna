const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', //development ou production
    entry:'./src/principal.js', //endereço do arquivo principal, que iniciara o webpack
    output: { //configurar saida
        filename: 'principal.js', //nome do arquivo gerado
        path: __dirname + '/public' //pasta
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

        }]
    }

}