/*
 * @Date: 2020-07-21 10:12:29
 * @LastEditors: 曾迪
 * @LastEditTime: 2020-07-22 10:00:01
 * @FilePath: \blog1\src\model\resModel.js
 * @Description: 
 */ 
class BaseModel{
    constructor(data, message){
        if (typeof data === 'string'){
            this.message = data
            data = null
            message = null
        }
        if(data){
            this.data = data
        }
        if(message){
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message){
        super(data, message) //执行父类的构造函数
        this.errno = 0
    }
}

class ErrorModel extends BaseModel{
    constructor(data, message){
        super(data, message)
        this.erron = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}