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
app.use(serve('./public'));
app.use(router(app));
app.use(livereload());

// This must come after last app.use()
var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

app.get('/users/:id', users);
app.get('/messenger', messenger);

function *users(next) {
    this.body = yield render('user', {userId: this.params.id});
}

function *messenger(next) {
    this.body = yield render('messenger');
}

io.on('connection', function(socket){
    socket.on('send message', function(data){
        io.sockets.emit("new message", data);
    });
});

server.listen(3000);