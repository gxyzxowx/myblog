/*
 * @Date: 2020-07-24 16:17:53
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-24 16:39:44
 * @FilePath: \blog1\src\conf\db.js
 * @Description: 数据库配置
 */ 
const env = process.env.NODE_ENV //环境参数

let MYSQL_CONF

if(env === 'dev'){
    MYSQL_CONF= {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'myblog' //链接数据库 （use myblog）
    }
} 
if(env === 'production'){
    MYSQL_CONF= {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'myblog' //链接数据库 （use myblog）
    }
}

module.exports ={
    MYSQL_CONF
}