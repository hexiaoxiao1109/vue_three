//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = 'http://118.31.9.103:8000';

//添加相应拦截器
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});

//3.定义接口 并 导出

export const userListApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user',
        params: apiParams
    }).then(res => res.data)
}

export const userAddApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/create',
        params: apiParams
    }).then(res => res.data)
}

export const userDelApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/delete',
        params: apiParams
    }).then(res => res.data)
}
export const userUpdateApi = (apiParams) => {
    return axios({
        method: 'get',
        url: '/user/update',
        params: apiParams
    }).then(res => res.data)
}

