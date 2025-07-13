export const defaultLanguage = "ja";
export const availableLanguages = [
  { label: "日本語", value: "ja" },
  { label: "English", value: "en" },
];
export const namespaces = ["common"];

export function getOptions(lng: string = defaultLanguage) {
  return {
    lng,
    defaultNS: defaultLanguage,
    fallbackLng: defaultLanguage,
    fallbackNS: namespaces[0],
    ns: namespaces,
    supportedLngs: availableLanguages.map((lang) => {
      return lang.value;
    }),
  };
}

export function getLanguageLabel(value: string) {
  return availableLanguages.find((lang) => lang.value === value)?.label;
}
