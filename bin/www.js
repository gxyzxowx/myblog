/*
 * @Author: your name
 * @Date: 2020-07-20 12:13:59
 * @LastEditTime: 2020-07-20 12:42:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog1\bin\www.js
 */ 
const http = require('http');
const PORT = 8000
const serverHandle = require('../app.js')
const server = http.createServer(serverHandle)
server.listen(PORT)  