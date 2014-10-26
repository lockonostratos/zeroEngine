var koa = require('koa');
var app = koa();

var path = require('path');
var livereload = require('koa-livereload');
var router = require('koa-router');
var views = require('co-views');
var serve = require('koa-static');
var stylus = require('koa-stylus');

var render = views(__dirname + "/views", {ext: 'jade'});
app.use(stylus(path.join(__dirname, 'public')));
app.use(serve(__dirname + '/public'));
app.use(router(app));
app.use(livereload());

app.get('/users/:id', users);

function *users(next) {
    this.body = yield render('user', {userId: this.params.id});
}

//app.use(function* (next) {
//    this.body = "Hello World !!!";
//    yield next;
//
//    this.body += " I'm Cloud le!";
//});

app.listen(3000);