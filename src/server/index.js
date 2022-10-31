import axios from 'axios'

const fetch = axios.create({
    baseURL: '/webapi',
    timeout: 8000
})

// 请求拦截器
fetch.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(new Error(error))
    }
)

// 响应拦截器
fetch.interceptors.response.use(
    response => {
        const { code, msg, data } = response.data
        if (code === 200) {
            return data
        } else if (code === 401) {
            return Promise.reject(new Error(msg))
        }
        return Promise.reject(new Error(msg))
    },
    error => {
        return Promise.reject(error)
    }
)

export default fetch
