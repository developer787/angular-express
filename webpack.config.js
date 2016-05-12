var path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8888
  },
  entry: {
    app: './entry'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:3000',
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
