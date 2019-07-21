const Router =require('koa-router')
const posts = require('./posts')
const auth = require('./auth')

const api = new Router();
api.get('/test',(ctx)=>{
    ctx.body= `test성공`
})
api.use('/posts',posts.routes())
api.use('/auth',auth.routes())
module.exports= api;