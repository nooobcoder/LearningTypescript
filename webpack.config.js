const path = require('path');

const config = {
	entry: './src/main.ts',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'), // This should always be an absolute path
	},
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};

module.exports = config;
