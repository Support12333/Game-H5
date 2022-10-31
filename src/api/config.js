/**
 * @method 数据埋点
 * @param {Object} params
 * @param {String} params.location - 点击位置
 */
 export const EventTracking = params => axios({
    // baseURL: 'https://admin.boxgogogo.com/api',
    url: 'event/tracking/click',
    headers: {
      Authorization: store.getters.getUser('access_token')
    },
    method: 'GET',
    params
  })