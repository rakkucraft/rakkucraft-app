import CustomLink from "@/components/Common/CustomLink";
import { rubik } from "@/lib/fonts";
import { getTranslation } from "@/lib/i18n/server";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await getTranslation(lang);
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-zinc-100">
      <div className="w-full max-w-xs">
        <div className="text-center mb-6">
          <CustomLink
            className={`${rubik.className} font-medium text-2xl text-stone-900 hover:opacity-75 transition`}
            href={`/${lang}`}
            aria-label="Top page"
          >
            {t("site-name")}
          </CustomLink>
        </div>
        {children}
      </div>
    </div>
  );
}
