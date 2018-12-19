const Koa = require('koa');
const app = new Koa();
const registerRouter = require('./controller')
const mongodb = require('./dao/mongo')

app.use(registerRouter());
mongodb()
app.listen(5300);