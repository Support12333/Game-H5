import axios from 'axios'
import { showToast } from 'vant'
import "vant/lib/toast/style/index"

const fetch = axios.create({
    baseURL: '/apis',
    timeout: 10000
})
// 响应拦截器
fetch.interceptors.response.use(
    response => {
        const { code, msg, data } = response.data
        if (code === 1000) {
            return data
        }
        // Toast.fail(msg)
        return Promise.reject(new Error(msg))
    },
    error => {
        showToast.fail(error.data)
        return Promise.reject(error)
    }
)

export default fetch
