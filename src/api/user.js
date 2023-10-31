import fetch from '../server/index'
/**
* @method 获取验证码
*/
export const SendInfo = (data) => fetch({
    url: '/app/user/sendInfo',
    method: 'POST',
    data
})
/**
* @method 注册
*/
export const RegisterUser = (data) => fetch({
    url: '/app/user/registerUser',
    method: 'POST',
    data
})
/**
* @method 登录
*/
export const LoginUser = (data) => fetch({
    url: '/app/user/loginUser',
    method: 'POST',
    data
})