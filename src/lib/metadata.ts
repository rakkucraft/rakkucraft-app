import { getTranslation } from "./i18n/server";
import { baseUrl } from "./utils";

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
