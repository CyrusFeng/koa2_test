const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-body')

const app = new Koa()

const router = new Router()

app.use(bodyParser())

const users = []

router
    .get('/user', async (ctx, next) => {
        ctx.response.body = {
            data: {
                users
            }
        }
    })
    .post('/user', async (ctx, next) => {
        let { name } = ctx.request.body

        console.log(ctx.request.body)
        users.push(name)
        ctx.response.body = `注册成功${name}`
    })
router
    .get('/user/:name', async (ctx, next) => {
        const name = ctx.params.name
        const user = users.find((user)=>{user === name})
        ctx.body = user
    })
app.use(router.routes())

app.listen(8848)