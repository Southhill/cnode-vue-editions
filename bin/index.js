const Koa = require('koa')

const app = new Koa()

// x-response-time
app.use(async (ctx, next) => {
    let start = new Date()
    await next()

    let ms = new Date() - start
    ctx.set('x-response-time', `${ms}ms`)
})

// logger
app.use(async (ctx, next) => {
    let start = new Date()
    await next()

    let ms = new Date() - start
    console.log('%s %s - %s', ctx.method, ctx.url, `${ms}ms`)
})

// response
app.use(ctx => {
    ctx.body = 'Hello, World2'
})

app.listen(3000)
console.log('app started, listen port:3000');
