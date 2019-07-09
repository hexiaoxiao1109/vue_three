//1.导入axios模块
import axios from 'axios'
import qs from 'qs'


//2.全局配置
axios.defaults.baseURL = 'http://118.31.9.103:8000';

//添加响应式拦截器
axios.interceptors.response.use(function(response){
    //对响应数据做点什么
    return response;
},function(error){
    //对响应错误做点什么
    return Promise.reject(error);
});
 
// 3.定义接口 并 导出
export const goodsListApi = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods',
        params:apiParams,
    }).then(res => res.data)
}

export const goodsListadd = (apiParams) => {
    return axios({
        method:'get',
        url: '/goods/create',
        params:apiParams,
    }).then(res => res.data)
}


