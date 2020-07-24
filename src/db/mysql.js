/*
 * @Date: 2020-07-24 16:39:57
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-24 16:48:06
 * @FilePath: \blog1\src\db\mysql.js
 * @Description: mysql封装工具
 */ 
const mysql = require('mysql');
const { MYSQL_CONF } = require('../conf/db');
//创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

//连接
con.connect()

//封装执行sql的函数
function exec (sql){
    const p = new Promise((reslove, reject)=>{
        con.query(sql, (err, result)=>{
            if(err){
                reject(err)
                return
            }
            reslove(result)
        })
    })
    return p
}

module.exports = {exec}