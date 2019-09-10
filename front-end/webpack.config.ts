import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from "webpack"
const config:webpack.Configuration = {
	entry: './src/App.tsx',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath:"/"
	},

	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			filename:"index.html",
			template:"./src/App.html",
			hash:true,
			xhtml:true,
		}),
	],
	module: {
		rules: [
			{ test: /\.ts(x?)$/, use: 'ts-loader' },
			{ test: /\.css$/, use: [
				{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}
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
		port:24303,
		host:"0.0.0.0",
		historyApiFallback:true
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
};

export default config;