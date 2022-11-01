import fetch from '../server/index'
/**
 * @method 分类列表
 */
 export const GetBusinessTypeList = () => fetch({
    url: '/businesstypelist',
    method: 'POST',
 })
  
 /**
 * @method 分类列表
 * @param {String} data.place - banner位置
 */
  export const GetBanner = (data) => fetch({
    url: '/banner',
    method: 'POST',
    data
  })

  /**
 * @method 列表数据
 * @param {String} data.joininvestmenttype - 分类id
 * @param {String} data.page  - 页码
 */
   export const GetBusinessList = (data) => fetch({
    url: '/businesslist',
    method: 'POST',
    data
  })