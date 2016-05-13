console.log('VIM SCHOOL STARTED');
console.log(__dirname);
var express      = require('express')
,   path         = require('path')
,   home         = require('./routes/home')
,   assets       = require('./toolbox/assets')
,   logger       = require('morgan')
,   bodyParser   = require('body-parser')
,   cookieParser = require('cookie-parser')
,   webpackDev   = require('webpack-dev-middleware')
,   webpack      = require('webpack')
,   not_found    = require('./toolbox/not_found')
,   error_detail = require('./toolbox/error_detail')
,   error_basic  = require('./toolbox/error_basic')
,   config       = require('./toolbox/config')
,   wpConfig     = require('./webpack.dev.config')
,   wpOptions    = require('./webpack.options')
,   app          = express();

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(cookieParser());
if(app.get('env') === 'development') {
  var compiler = webpack(wpConfig);
  app.use(webpackDev(compiler, wpOptions));
}
app
  .use(assets)
  .use('/', home)
  .use(not_found);
  
if(app.get('env') === 'development') {
  app.use(error_detail);
}
app
  .use(error_basic)
  .listen(config.port, function(){
    console.log('School is listening on port 3000');
});
