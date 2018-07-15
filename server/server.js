const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const app = new Koa();


//加载表态文件
app.use(serve(__dirname + '/public'));
// const main = serve(path.join(__dirname+'/public'));
// app.use(main);

app.listen(3000,function(){
    console.log('开启服务器成功')
});