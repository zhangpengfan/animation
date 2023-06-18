// 导入模块
// const { log } = require('console')
const express = require('express')//服务器模块
const mongoose = require('mongoose')//数据库模块
const path = require('path')//文件路径模块
let{log}=console;
// 创建服务器
const app = express()

// 解析post请求的参数的，所有的post请求都会走着两个中间件
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 设置允许跨域访问该服务---解决list访问时跨域报错的问题
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    next();
})

// 连接数据库
mongoose.connect('mongodb://localhost:27017/xixi').then(() => { console.log("数据库连接成功") })

// 设置集合规则，用new调用构造函数mongoose.Schema()，函数内传一个对象为实参，对象里放各种这段及其数据类型
const registrationRules = new mongoose.Schema({
    "accountNumber": String,
    "password": String,
    "cellPhoneNumber": String,
    "userAgreement": String,
});

// 使用规则创建集合 用model方法，参数1是集合的名字首字母大写，参数2是规则名称
const user = mongoose.model('User', registrationRules)

// 设置静态资源文件夹
app.use(express.static('public'))

// 注册页post请求
app.post('/register', (req, res) => {
    const { accountNumber, password, cellPhoneNumber, userAgreement } = req.body;

    // 查询数据库中是否有该数据
    user.find({ accountNumber: accountNumber }).then(result => {
        if (result.length === 0) {
            // 返回状态码
            // 创建一个包含状态和消息的响应对象
            const response = { status: 'ok', message: '注册成功' };
            // 设置响应头的Content-Type为application/json
            res.writeHead(200, { 'Content-Type': 'application/json' });
            // 将响应对象转换为JSON字符串并发送到客户端
            res.write(JSON.stringify(response));
            // 结束响应
            res.end();

            //添加到数据库
            user.create(
                {
                    "accountNumber": accountNumber,
                    "password": password,
                    "cellPhoneNumber": cellPhoneNumber,
                    "userAgreement": userAgreement,
                },
            )
                .then(() => {
                    console.log("数据添加成功");
                })
                .catch((err) => {
                    console.log(err);
                    console.log("数据添加失败");
                })
        } else {
            // 有该数据返回的状态码
            // 设置响应头的状态码为404，Content-Type为text/plain
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            // 在响应体中写入404
            res.write('404');
            // 结束响应
            res.end();
        }
    })
})

// 登录页post请求
app.post('/signIn', (req, res) => {
    const { accountNumber, password } = req.body;

    // 查询数据库中是否有该数据
    user.find({ accountNumber: accountNumber, }).then((result) => {
        if (result.length > 0) {
            user.find({ accountNumber: accountNumber, password: password, }).then((result) => {
                if (result.length > 0) {
                    // 有该数据返回的状态码
                    const response = { status: 'ok', message: '登录成功' };
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify(response));
                    res.end();
                } else {
                    // 没有密码返回的状态码
                    const error = { status: 'no', message: '密码错误' };
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify(error));
                    res.end();
                }
            })
        } else {
            // 没有账号返回的状态码
            const error = { status: 'no', message: '账号不存在' };
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(error));
            res.end();
        }
    })
})

// 设置默认页面 新番时间表
app.get('/',
    (req, res) => {
        res.sendFile('register.html', { root: __dirname + '/public' });
    }
)
const infotimerSchema = new mongoose.Schema({
    src: String,
    text: String,
    hua: String,
    day: String
})
const Infotimer = mongoose.model('Infotimer', infotimerSchema)



app.get('/clock', (req, res) => {
    Infotimer.find().then(result => {
        log(result)
        res.send(result)
    })
})

// 监听端口启动服务器
app.listen(3000, () => {
    console.log('服务器已启动,端口号3000');
})