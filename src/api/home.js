import fetch from '../server/index'
/**
 * @method 分类列表
 */
export const GetHomeGame = () => fetch({
  url: '/app/game/getHomeGame',
  method: 'GET',
})

/**
* @method 埋点
* @param {String} data.source - 操作描述
*/
export const GetBehaviour = (data) => fetch({
  url: '/behaviour',
  method: 'POST',
  data
})