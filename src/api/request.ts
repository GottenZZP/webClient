// 创建新的axios对象
import axios from 'axios';

// 设置请求的baseURL，从而在发送请求时省略部分URL
// 例如，如果baseURL是"https://api.example.com"，则发送请求时，URL应该是"/users"而不是"https://api.example.com/users"
const _axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL // 设置请求的基础URL
})

// 添加请求拦截器
_axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 例如，可以在这里设置请求头中的Authorization字段
        config.headers = {
            Authorization: 'aaa.bbb.ccc' // 设置请求头中的Authorization字段
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);   
    }
)
// 添加响应拦截器
_axios.interceptors.response.use(
    // 如果响应状态码为200，则返回响应数据
    (response) => {
        // 对响应数据做些什么
        return response;    
    },
    // 如果响应状态码不是200，则抛出错误
    (error) => {
        // 对响应错误做些什么
        if (error.response.status === 401) {
            // 处理未授权的错误
            // 例如，可以跳转到登录页面
        } else if (error.response.status === 403) {
            // 处理禁止访问的错误
            // 例如，可以跳转到403页面
        }
        return Promise.reject(error);
    }
)

export default _axios;