const path = require('path'); // modulo path - rutas
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public_html'),
    filename: 'main-es6.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './public_html/app.html',
      hash: true
    }),
    new ScriptExtHtmlWebpackPlugin({
      module: 'js'
    })
  ]
}
