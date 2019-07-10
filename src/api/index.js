//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = 'http://10.31.164.10:8000/';

//3.定义接口 并 导出

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


