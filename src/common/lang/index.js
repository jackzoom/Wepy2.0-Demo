import en from './en'
import zhCn from './zh-cn'

let T = {
  locale: null,
  langCode: {
    'en': en,
    'zh-cn': zhCn
  }
}

// T.registerLocale = function (locales) {
//   T.locales = T.langCode[locales];
// }

T.setLocale = function (code) {
  T.locale = code;
}

T.setLocaleByIndex = function (index) {
  T.setLocale(T.langCode[index]);
}

T.getLanguage = function () {  
  return T.locale;
}

export default T
