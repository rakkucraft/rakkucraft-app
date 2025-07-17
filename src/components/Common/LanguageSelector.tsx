"use client";

import { useLanguage, useTranslation } from "@/lib/i18n/client";
import { availableLanguages } from "@/lib/i18n/settings";
import { ChevronDown, Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useTranslation as useTranslationOrigin } from "react-i18next";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const { i18n } = useTranslationOrigin();
  const [selectedLang, setSelectedLang] = React.useState(lang);

  const handleLanguageChange = async () => {
    await i18n.changeLanguage(selectedLang);
    const regex = new RegExp(
      `^/(${
        availableLanguages
          .map((lang) => {
            return lang.value;
          })
          .join("|") + "|"
      })/?(.*)?$`,
    );
    const replacedURL = pathname.replace(regex, (match, tmp, path) => {
      return `/${selectedLang}/${path || ""}`;
    });
    router.push(replacedURL);
  };

  return (
    <div className="flex items-center text-sm">
      <label className="mr-2 text-gray-800">
        <Languages />
      </label>
      <div className="relative grow mr-1">
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="appearance-none w-full px-3 py-2 border border-gray-500 rounded-sm focus:outline-none focus:text-sky-700 hover:text-sky-700 focus:ring-2 focus:ring-sky-700 focus:border-transparent transition bg-white"
        >
          {availableLanguages.map((language) => {
            return (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
          <ChevronDown size={20} />
        </div>
      </div>
      <button
        onClick={handleLanguageChange}
        className="border border-sky-700 bg-zinc-100 hover:bg-zinc-200 focus:ring-2 text-sky-700 cursor-pointer transition rounded-sm px-2 py-2"
      >
        {t("change")}
      </button>
    </div>
  );
}
