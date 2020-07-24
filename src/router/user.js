/*
 * @Date: 2020-07-20 13:57:40
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-23 13:04:10
 * @FilePath: \blog1\src\router\user.js
 * @Description: user
 */ 
const {loginCheck} = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const handleUserRouter = function(req, res){
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]


   
    if(method === 'POST' &&path === '/api/user/login'){
        const {username, password} = req.body
        const reslut = loginCheck(username, password)
        if(reslut){
            return new SuccessModel('登录成功')
        }else{
            return new ErrorModel('登录失败')
        }
        // return {
        //     msg: '登录接口'
        // }
    }
}
module.exports = handleUserRouter