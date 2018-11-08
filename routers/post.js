const Router = require('koa-router')

const bodyParser = require('koa-body')

const Post = require('../models/post')

const router = new Router();

router.get('/post', async (ctx) => {
  const posts = await Post.list({ limit: 10 });
  ctx.body = {
    posts,
  };
})

router.post('/post', async (ctx) => {
  const {post} = ctx.request.body
  const posts = await Post.list({ limit: 10 });
  ctx.body = {
    posts,
  };
})

module.exports = router;
