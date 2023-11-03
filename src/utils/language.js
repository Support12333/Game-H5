/**
 * @method 获取浏览器的语言信息
 * @returns {String}
 */
export const getLanguage = () => {
    //语言判断
    let lang = 'en'
    let l = navigator.appName == 'Netscape' ? navigator.language : navigator.browserLanguage
    if (l.indexOf('hi') > -1) {// 印地语
      lang = 'hi'
    } else if (l.indexOf('pt') > -1) {// 葡萄牙语
      lang = 'pt'
    }else if (l.indexOf('en') > -1) {// 英语
      lang = 'en'
    }
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang')
    }
    return lang
  }