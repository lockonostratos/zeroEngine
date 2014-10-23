var app = require('koa')();

app.use(function* (next) {
    this.body = "Hello World !!!";
    yield next;

    this.body += " I'm Cloud le!";
});

app.listen(3000);