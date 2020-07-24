/*
 * @Date: 2020-07-23 12:13:10
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-23 13:04:17
 * @FilePath: \blog1\src\controller\user.js
 * @Description: controller-user
 */ 
const loginCheck =(username, password)=>{
    //假数据
    console.log(username,password)
    if(username ==='wendy' && password === 111111){
        return true
    }else{
        return false
    }
}
module.exports = {
    loginCheck
}