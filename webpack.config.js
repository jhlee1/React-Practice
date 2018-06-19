const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

     output: {
         path: __dirname + '/public/',
         filename: 'bundle.js'
     },

     devServer: {
         hot: true,
         inline: true,
         host: '0.0.0.0',
         port: 4000,
         contentBase: __dirname + '/public/',
     },

     module: {
         rules: [
           {   // 확장자가 .js 경우 규칙
           				test: /\.js$/,
           				use: [
           					{	// Babel 로더 이용
           						loader: 'babel-loader',
           						options: { // Babel 옵션 지정
           						  presets: ['es2015','stage-0', 'react'],
           							cacheDirectory: true,
           							plugins : ['react-hot-loader/babel']
           						}
           					}
           				],
           				exclude: /node_modules/,
           	}
         ]
     },

     plugins: [
         new webpack.HotModuleReplacementPlugin()
     ]
};
