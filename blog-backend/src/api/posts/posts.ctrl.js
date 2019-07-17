const Post = require('models/post')
const {
    ObjectId
} = require('mongoose').Types
const Joi = require('joi')

exports.checkObjectId = (ctx, next) => {
    const {
        id
    } = ctx.params;
    if (!ObjectId.isValid(id)) {
        ctx.status = 400
        return null;
    }
    return next();
}
exports.write = async (ctx) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().item(Joi.string()).required(),
    })
    const result = Joi.validate(ctx.request.body, schema)
    if (result.error) {
        ctx.status = 400
        ctx.body = result.error
        return;
    }
    const {
        title,
        body,
        tags
    } = ctx.request.body
    const post = new Post({
        title,
        body,
        tags,
    })
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500)
    }
}
exports.list = async (ctx) => {
    const page = parseInt(ctx.query.page || 1,10);
    console.log('list');
    
    if(page < 1){
        ctx.status = 400
        return;
    }
    try {
        const posts = await Post.find()
        .sort({
            _id: -1
        })
        .limit(10)
        .lean()
        .skip((page-1)*10)
        .exec();
        const postCount = await Post.countDocuments().exec();
        const limitBodyLength = post =>({
            ...post,
            body: post.body.length < 200 ? post.body: `${post.body.slice(0,200)}...`
        })
        
        ctx.body = posts.map(limitBodyLength)
        ctx.set('Last-page',Math.ceil(postCount/10));
    } catch (e) {
        ctx.throw(e, 500)
    }
}

exports.read = async (ctx) => {
    const {
        id
    } = ctx.params;
    try {
        const post = await Post.findById(id).exec()
        if (!post) {
            ctx.status = 404
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500)
    }
}

exports.remove = async (ctx) => {
    const {
        id
    } = ctx.params;
    try {
        await Post.findOneAndRemove({
            "_id": id
        }).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(e, 500)
    }
}

exports.update = async (ctx) => {
    const {
        id
    } = ctx.params
    try {
        const post = await Post.findOneAndUpdate({
            "_id": id
        }, ctx.request.body, {
            new: true
        }).exec();
        if (!post) {
            ctx.status = 404
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(e, 500)
    }
}