require('dotenv').config();
const session = require('koa-session')

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY : signkey
} = process.env;

const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const api = require('./api')
const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(
    console.log('connect DB')
).catch(e => {
    console.error(e);
})

router.use('/api', api.routes())
app.use(bodyParser())
const sessionConfig = {
    masAge : 86400000
}
app.use(session(sessionConfig,app))
app.keys= [signkey]
app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
    console.log('port : ', port);

})