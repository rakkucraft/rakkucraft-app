"use client";

import React from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrigin,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (lang: string, namespace: string) =>
        import(`./languages/${lang}/${namespace}.json`),
    ),
  )
  .init(getOptions());

export function useTranslation(lang: string) {
  const { t, i18n } = useTranslationOrigin();

  React.useEffect(() => {
    const shouldChangeLanguage = lang && lang !== i18n.resolvedLanguage;
    if (shouldChangeLanguage) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return { t, i18n };
}

interface LanguageContextType {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined,
);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage: string;
}

export const LanguageProvider = ({
  children,
  initialLanguage,
}: LanguageProviderProps) => {
  const [lang, setLang] = React.useState<string>(initialLanguage);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
