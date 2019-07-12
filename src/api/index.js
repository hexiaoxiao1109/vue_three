//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = 'http://47.103.77.150:8000/';

//3.定义接口 并 导出



// 订单地址模块
// 增
export const addListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/address/create',
        params: apiParams 
    }).then(res => res.data)
}
// 删
export const delListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/address/delete',
        params: apiParams 
    }).then(res => res.data)
}
// 改
export const updataListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/address/update',
        params: apiParams 
    }).then(res => res.data)
}
// 查
export const addressListApi = (apiParams) => {
    return axios({
        // method:'get',
        url: '/address',
        params: apiParams 
    }).then(res => res.data)
}



//订单模块
export const sListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/order',
        params:apiParams, 
    }).then(res => res.data)
}


// 登录模块
export const loginApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/login',
        params:apiParams, 
    }).then(res => res.data)
}


//商品模块
// 增
export const goodsListadd = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods/create',
        params:apiParams,
    }).then(res => res.data)
}
// 删
export const goodsListdel = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods/delete',
        params:apiParams,
    }).then(res => res.data)
}
// 改
export const goodsListchange = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods/update',
        params:apiParams,
    }).then(res => res.data)
}
// 查
export const goodsListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods/search',
        params:apiParams,
    }).then(res => res.data)
}



//用户模块
// 查
export const userListApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user',
        params: apiParams
    }).then(res => res.data)
}
//增
export const userAddApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/create',
        params: apiParams
    }).then(res => res.data)
}
//删
export const userDelApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/delete',
        params: apiParams
    }).then(res => res.data)
}
//改
export const userUpdateApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/update',
        params: apiParams
    }).then(res => res.data)
}





