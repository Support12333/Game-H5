import { createI18n } from 'vue-i18n'
import { getLanguage } from '@utils/language'

// 获取语言信息
const lang = getLanguage()

// 创建i18n实例
const i18n = createI18n({
  // 设置语言环境
  locale: lang,
  fallbackLocale: lang,
  legacy:false,

  // 设置语言环境信息
  messages: {
    [lang]: require(`./${lang}.js`).default
  }
})

// 我们的预装默认语言
const loadedLanguages = [lang]

/**
 * @method 修改语言环境
 * @param {String} lang - 语言
 * @returns {String}
 */
const setI18nLanguage = lang => {
  // 修改i18n当前语言环境
  i18n.locale = lang
  localStorage.setItem('lang', lang)
  return lang
}

/**
 * @method 懒加载语言环境
 * @param {String} lang - 需要加载的语言环境
 */
export const loadLanguageAsync = async lang => {
  // 如果语言相同
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果语言已经加载
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  // 如果尚未加载语言
  const messages = await import(`@i18n/${lang}.js`)
  console.log(messages)
  i18n.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

export default i18n