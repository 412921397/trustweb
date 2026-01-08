import { useI18n } from "vue-i18n";
import { useSystem } from "@/store";

function useLanguage() {
  const { locale } = useI18n();
  const { setLangAction } = useSystem();

  const setLang = (lang) => {
    locale.value = lang;
    localStorage.setItem("lang", lang);
    setLangAction(lang);
  };

  return { locale, setLang };
}

export default useLanguage;
