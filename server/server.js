const router = require('koa-router')()
const Koa = require('koa');
const path = require('path');
const cors = require('koa-cors');
const serve = require('koa-static');
const app = new Koa();
let code = require('./routes/code')

//跨域设置
app.use(cors());
// 调用路由中间件
router.use('/code', code.routes(), code.allowedMethods());
app.use(router.routes());

//加载表态文件
app.use(serve(__dirname + '/public'));

app.listen(3000, function () {
    console.log('开启服务器成功')
});