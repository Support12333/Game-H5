/**
 * @method 分类列表
 */
 export const GetBusinessTypeList = () => fetch({
    url: '/businesstypelist',
    method: 'POST',
  })