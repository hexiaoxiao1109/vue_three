//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = 'http://118.31.9.103:8000/login';

//3.定义接口 并 导出

export const sListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/order',
        params:apiParams, 
    }).then(res => res.data)
}
export const loginApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/login',
        params:apiParams, 
    }).then(res => res.data)
}


