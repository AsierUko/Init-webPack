const path = require('path'); // modulo path - rutas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public_html/'), // ruta de conpilacion de salida dev pro
    filename: "index.js"
  },
  entry: {
    index: './src/index.js' // ruta donde empiza webpack
 },
 module: {
    rules: [
      {
        test: /\.scss$/,
        //exclude: /node_modules/,
        // options: { presets: [['@babel/preset-env']] }
        loader: [
          "babel-loader",
          MiniCSSExtractPlugin.loader,
          "css-loader",
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true,
      templateParameters: {
        titulo: 'Title',
        encabezamiento: 'Encabezamiento',
      }
    }),
    new ScriptExtHtmlWebpackPlugin({
      custom: [
        {
          test: /\.js$/,
          preload: /\.js$/
          // attribute: 'nomodule'
        },
      ]
    }),
    new MiniCSSExtractPlugin({ // Minimifica
      filename: "./css/estilos.css",
    })
  ],
  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, 'public_html')
  }
}
