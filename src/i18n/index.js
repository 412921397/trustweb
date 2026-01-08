import { createI18n } from "vue-i18n";

import { getStorage } from "@/utils";
import enLocale from "./modules/en";
import zhcnLocale from "./modules/zh_CN.js";
import korcnLocale from "./modules/ko.js";
import jp from "./modules/ja.js";
import vi from "./modules/vi.js";
import idn from "./modules/idn";
import pt from "./modules/pt";
import es from "./modules/es";
import fr from "./modules/fr";
import ru from "./modules/ru";
import de from "./modules/de";
import tr from "./modules/tr";
import uk from "./modules/uk";

const lang = getStorage("system")?.lang || "zh_CN";

export const langOptions = [
  {
    value: "zh_CN",
    label: "简体中文"
  },
  {
    value: "zh_TW",
    label: "繁体中文"
  },
  {
    value: "en",
    label: "English"
  },
  {
    value: "ko",
    label: "한국 사람"
  },
  {
    value: "ja",
    label: "日本語"
  },
  {
    value: "th",
    label: "ภาษาไทย" // 泰语
  },
  {
    value: "vi",
    label: "Tiếng Việt" // 越南语
  },
  {
    value: "idn",
    label: "bahasa Indonesia" // 印尼语
  },
  {
    value: "tl-PH",
    label: "Filipino" // 菲律宾语
  },
  {
    value: "pt",
    label: "Português" // 葡萄牙语
  },
  {
    value: "es",
    label: "español" // 西班牙语
  },
  {
    value: "hi",
    label: "हिंदी" // 印地文
  }
];

const messages = {
  en: { ...enLocale }, // 英文
  zh_CN: { ...zhcnLocale }, // 简体中文
  ko: { ...korcnLocale }, // 韩文
  ja: { ...jp }, // 日文
  de: { ...de }, // 德文
  vn: { ...vi }, // 越南文
  idn: { ...idn }, // 印尼文
  pt: { ...pt }, // 葡萄牙文
  es: { ...es }, // 西班牙文
  fr: { ...fr }, // 法文
  ru: { ...ru }, // 俄文
  tr: { ...tr }, // 土耳其
  uk: { ...uk } // 乌克兰
};

const i18n = createI18n({
  legacy: false,
  locale: lang, // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: "zh_CN", // 设置备用语言
  messages
});

export default i18n;
