import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import OfflinePlugin from 'offline-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import webpack from "webpack"
let now = new Date();
const config:webpack.Configuration = {
	entry: './src/App.tsx',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath:"/"
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new webpack.DefinePlugin({
			"isDev":process.env.NODE_ENV == "development" ? true: false,
			COMPILED_TIME:JSON.stringify(now.toLocaleString())
		}),
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:"./src/AppPage.tsx",
			hash:true,
			xhtml:true
		}),
		new CopyWebpackPlugin([
			{from:path.resolve(__dirname,"./src/assets/copy-to-root") ,to:path.resolve(__dirname,"./dist")}
		]),
		new OfflinePlugin({
			"Caches":"all"
		}),
	],
	module: {
		rules: [
			{ test: /\.ts(x?)$/, use: 'ts-loader' },
			{ test: /\.(css)$/, use: [
				{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}
				] 
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // 将 JS 字符串生成为 style 节点
					"css-loader", // 将 CSS 转化成 CommonJS 模块
					"sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
				]
			},
			{ test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/, 
				use: {
					loader:'url-loader?limit=100000&name=images/[name]_[hash:8].[ext]'
				}
			},
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},
	//@ts-ignore
	devServer: {
		open: true,
		port: 24303,
		host:"0.0.0.0",
		historyApiFallback:true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};

export default config;