var path = require('path');
var config = require('./toolbox/config')

module.exports = {
  devServer: {
    contentBase: "./public",
    host: config.ip, 
    port: config.devport
  },
  entry: {
    app: './entry'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: config.ip + ':' + config.port,
    filename: '[name].js'
  },
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
