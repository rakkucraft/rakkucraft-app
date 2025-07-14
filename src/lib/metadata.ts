import { getTranslation } from "./i18n/server";

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function setMetadata({
  title,
  url,
  lang,
}: {
  title: string;
  url: string;
  lang: string;
}) {
  const { t } = await getTranslation(lang);
  return {
    title: `${t(title)} - ${t("site-name")}`,
    alternates: {
      canonical: `${baseUrl}/${url}`,
      languages: {
        ja: `${baseUrl}/ja/${url}`,
        en: `${baseUrl}/en/${url}`,
      },
    },
    openGraph: {
      title: `${t(title)} - ${t("site-name")}`,
      url: `${baseUrl}/${url}`,
    },
  };
}
