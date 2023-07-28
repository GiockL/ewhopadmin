// 1.引入axios
import axios, {AxiosRequestConfig} from "axios";

// 2.创建axios对象
const request = axios.create({
    baseURL:'http://api.shop.eduwork.cn/', //管理后台要使用的接口的基地址
    timeout:8000// 设置超时时间
})

// 3.定义前置拦截器，请求拦截器，请求发出去之前触发的
request.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})


export default request