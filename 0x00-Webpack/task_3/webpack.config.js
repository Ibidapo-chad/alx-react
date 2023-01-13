const path = require('path');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './js/dashboard_main.js'),
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
    mode: 'production',
	performance: {
		maxAssetSize: 1000000,
	},
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		  },
		  {
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
			use: [
				'file-loader',
				{
				  loader: 'image-webpack-loader',
				  options: {
					bypassOnDebug: true,
					disable: true,
				  },
				},
			  ],
		  },
		],
	  },
};