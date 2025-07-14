export const defaultLanguage = "en";
export const availableLanguages = [
  { label: "English", value: "en" },
  { label: "日本語", value: "ja" },
];
export const namespaces = ["common", "auth", "error"];

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
