//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = 'http://10.31.164.10:8000/';

//3.定义接口 并 导出

export const sListApi = (apiParams) => {
    return axios({
        method:'post',
        url: '/order',
        data: qs.stringify(apiParams) 
    }).then(res => res.data)
}


