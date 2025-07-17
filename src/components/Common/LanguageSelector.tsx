"use client";

import { useLanguage, useTranslation } from "@/lib/i18n/client";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  console.log(t("dummy"));
  return (
    <div className="flex items-center">
      <label className="mr-2">
        <Globe size={15} />
      </label>
      <button className="mr-2">test</button>
      <button className="border border-sky-700 bg-sky-50 text-sky-700 cursor-pointer rounded-sm text-sm px-2 py-1">
        Change
      </button>
    </div>
  );
}
