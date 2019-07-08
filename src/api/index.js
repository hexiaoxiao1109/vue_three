//1.导入axios模块
import axios from 'axios'
import qs from 'qs'

//2.全局配置
axios.defaults.baseURL = '';

//3.定义接口 并 导出

export const goodsListApi = (apiParams) => {
    return axios({
        method: '',
        url: '',
        params: apiParams
    }).then(res => res.data)
}