console.log('VIM SCHOOL STARTED');
console.log(__dirname);
var express      = require('express')
,   path         = require('path')
,   home         = require('./routes/home')
,   assets       = require('./toolbox/assets')
,   logger       = require('morgan')
,   bodyParser   = require('body-parser')
,   cookieParser = require('cookie-parser')
,   not_found    = require('./toolbox/not_found')
,   error_detail = require('./toolbox/error_detail')
,   error_basic  = require('./toolbox/error_basic')
,   app          = express();

app
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(cookieParser())
  .use(assets)
  .use('/', home)
  .use(not_found);
  
if(app.get('env') === 'development') {
  app.use(error_detail);
}
app.use(error_basic);
app
  .listen(3000, function(){
    console.log('School is listening on port 3000');
});
