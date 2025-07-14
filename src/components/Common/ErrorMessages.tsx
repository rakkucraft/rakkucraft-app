"use client";

import { useLanguage, useTranslation } from "@/lib/i18n/client";

export function ErrorMessages({ errors }: { errors?: string[] }) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  if (!errors || errors.length === 0) return null;
  return (
    <div className="mb-4 text-sm text-red-600">
      {errors.map((error, index) => (
        <p key={index}>{t(error)}</p>
      ))}
    </div>
  );
}
