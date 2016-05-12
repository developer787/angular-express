console.log('VIM SCHOOL STARTED');
console.log(__dirname);
var express = require('express')
,   path    = require('path')
,   home    = require('./routes/home')
,   assets  = require('./toolbox/assets')
,   app     = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
console.log(assets);
app.use(assets);
app.use('/', home);

app.listen(3000, function(){
  console.log('School is listening on port 3000');
});
