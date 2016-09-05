var webpack = require("webpack");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
	plugins:[
		new ExtractTextWebpackPlugin('all.css'),
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		})
		
	],
	entry:{
		main:"./main.js"
	},
	output:{
		path:"dist",
		filename:"all.js"
	},
	module:{
		loaders:[
			{
				test:/\.(css|less)/,
				loader:ExtractTextWebpackPlugin.extract("css!less")
			},
			{
				test : /\.(JPG|gif|png)/,
				loader : "file?name=images/[name].[ext]"
			},
			{
				test:/\.html/,
				loader:"html"
			}
		]
	}
}
