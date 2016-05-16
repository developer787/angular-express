var webpack = require('webpack');
var path = require('path');
var config = require('./toolbox/config');
var publicPath;

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8082/public/',
      'webpack/hot/only-dev-server',
      './entry.js'
    ]
  },
  output: {
    path: '/',
    publicPath: 'http://localhost:8082/public' 
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [{ test: /\.js$/, 
      loader: 'babel', 
      exclude: /node_modules/, 
      query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy']  }  },
    { test: /\.css?$/, loader: 'style!css'  },
    { test: /\.less?$/, loader: 'style!css!less'  },
    { test: /\.html$/, loader: 'html'  },
    { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192'  },
    { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff2'  },
    { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'  },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file'  }
    ]
  }
}
