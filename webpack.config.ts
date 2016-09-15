var webpack = require('webpack');
var path = require('path');
var resolveNgRoute = require('@angularclass/resolve-angular-routes');
var extractTextPlugin = require ('extract-text-webpack-plugin');


var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json','.scss']
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      resolveNgRoute(root('./src'))
    )
  ]

};


var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};


//Styles config
var stylesConfig = {
  target:"web",
  entry: {'global':'./src/theme/main.scss'},
  module: {
    loaders: [
      {test: /\.(sass|scss)$/,  loader:extractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: ['css', 'sass']
      }) },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.png$/, loader: 'url-loader?limit=100000'},
      {test: /\.jpg$/, loader: 'file-loader'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg|woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=[path][name].[ext]" },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['global']
    }),
    new extractTextPlugin({
      filename: './dist/client/[name].css',
      allChunks: true
    })
  ]
};

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
}



var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  //Styles
  webpackMerge({}, defaultConfig, commonConfig, stylesConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
]

// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
