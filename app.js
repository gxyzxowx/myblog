/*
 * @Author: your name
 * @Date: 2020-07-20 12:35:38
 * @LastEditTime: 2020-07-23 15:15:00
 * @LastEditors: 曾迪
 * @Description: In User Settings Edit
 * @FilePath: \blog1\app.js
 */
const querystring = require('querystring')
const BlogRouter = require('./src/router/blog')
const userRouter = require('./src/router/user')

//处理postData
const handlePostData = (req, res) => {
    const p = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
        }
        let postData = ''
        req.on('data', (chunk) => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
    return p
}
//req 请求
//res 返回
const serverHandle = function (req, res) {
    //设置返回格式
    res.setHeader('Content-type', 'application/json') // preview就会自动json


    // 解析query, 给req添加query参数
    const url = req.url
    req.query = querystring.parse(url.split('?')[1])
   
    handlePostData(req).then((postData) => {
        //下面所有的路由都可以通过req.body获取postData数据了
        req.body = postData

        // 是否进入了博客接口，且有返回值
        const blogData = BlogRouter(req, res)
        if (blogData) {
            res.end(JSON.stringify(blogData))
            return
        }

        // 是否进入了用户接口
        const userData = userRouter(req, res)
        if (userData) {
            res.end(JSON.stringify(userData))
            return
        }


        //路由错了
        res.writeHead(404, {
            "Content-type": 'text/plain'
        })
        res.write(" 404 not found!")
        res.end()

    })



}
module.exports = serverHandle