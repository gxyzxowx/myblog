/*
 * @Date: 2020-07-21 13:13:08
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-24 17:47:04
 * @FilePath: \blog1\src\controller\blog.js
 * @Description: blog.js controller数据逻辑
 */ 
//查询数据后返回列表
const { exec } = require('../db/mysql')
const getList = (author, keyword)=>{ 
    const sql = `select * from blogs where 1=1 `;
    if(author) {
        sql += `and author='${author}' `
    }
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += 'order by createtime desc;'
    return exec(sql) //返回的是一个promise
    // 返假数据
    // return [{
    //     id: 1,
    //     title: '博客的标题1',
    //     author: 'wendy',
    //     createTime: 1595398562445
    // },{
    //     id: 2,
    //     title: 'title2',
    //     author: 'wendy2',
    //     createTime: 1595398562447
    // }]
}

//得到博客详情
const getDetail = (blogId)=>{
    return {
        id: blogId  ,
        title: '这是博客的标题',
        author: '曾迪',
        createTime: 1595308562447,
        content: '这是博客的内容'
    }
}

//新建一篇博客
const newBlog = (postData)=>{
    //存入数据库
    return {
        postvalue: postData
    }
}

//修改一篇博客
const updataBlog = (postData)=>{
    // 修改数据库的值
    return{
        updata: postData
    }
}

//删除一篇博客
const delectBlog =(postData)=>{
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delectBlog
}
