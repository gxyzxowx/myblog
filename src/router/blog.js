/*
 * @Date: 2020-07-20 13:50:12
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-24 17:50:33
 * @FilePath: \blog1\src\router\blog.js
 * @Description: blog
 */ 

 const {getList, getDetail, newBlog, updataBlog, delectBlog} = require('../controller/blog')
 const { SuccessModel, ErrorModel} = require('../model/resModel')
 const handleBlogRouter = function(req, res){
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]  //把 url字符串按'?'拆分割成字符串数组（取'?'前面的）

    //get
    if(method === 'GET' &&path === '/api/blog/list'){
        const author = req.query.author || ''
        const keyword = req.query.keyword || '' 
        const result = getList(author, keyword) //控制器挖取数据库数据(promise)
        return result.then((listData)=>{
            return new SuccessModel(listData, '成功获取到了列表') //返回建模后的数据
        })
        
        // 返回一个对象实例
        // return {
        //     code: 200,
        //     msg: '获取博客列表'
        // }
    }
    if(method === 'GET' &&path === '/api/blog/detail'){
        const id = req.query.id || 1
        const detailData = getDetail(id) 
        return new SuccessModel(detailData, '得到了博客的详情哦')
        // return {
        //     msg: '获取博客详情'
        // }
    }

    //post
    if(method === 'POST' &&path === '/api/blog/new'){
        const newData = newBlog(req.body)
        return new SuccessModel(newData, '你新建了一篇博客')
        // return {
        //     msg: '新建博客',
        //     look: req.body
        // }
    }
    if(method === 'POST' &&path === '/api/blog/updata'){
        const updataData = updataBlog(req.body)
        return  new SuccessModel(updataData, '你修改了一篇博客')
        // return {
        //     msg: '更新博客'
        // }
    }
    if(method === 'POST' &&path === '/api/blog/delect'){
        const reslut = delectBlog(req.body)
        if(reslut){
            return new SuccessModel('你删除了一篇博客')
        }else{
            return new ErrorModel( '你没有删除了一篇博客')
        }
        
        // return {
        //     msg: '删除博客'
        // }
    }
}
module.exports = handleBlogRouter