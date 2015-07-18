module.exports = {
  	context: __dirname + '/app',
  	entry: './index.js',
  	output: {
  		path: __dirname + '/app',
    	filename: 'bundle.js'
  	},
  	module: {
  		loaders: [
			{
		    	test: /\.scss$/,
		        loader: 'style!css!sass'
		    },
			{ 
		        test: /\.less$/, 
		        loader: 'style-loader!css-loader!less-loader' 
		    },
		    { 
		        test: /\.css$/,
		        loader: 'style-loader!css-loader'
		    },
		    {
		        test: /\.js$/,
		        loader: 'ng-annotate!babel!jshint',
		        exclude: /node_modules|bower_components/
		    },
		    {
		        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		        loader: 'file-loader?name=res/[name].[ext]?[hash]'
		    },
		    { 
		    	test: /\.(png|jpg|gif|otf|eot|svg|ttf|woff)$/,
		        loader: 'url-loader?limit=8192'
		    }, 	// inline base64 URLs for <=8k images, direct URLs for the rest
		    {
		        test: /\.html/,
		        loader: 'raw'
		    },
	      	{
		        test: /\.json/,
		        loader: 'json'
	      	}
	  	]
  	}
};
