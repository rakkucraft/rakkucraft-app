import { Metadata } from "next";
import { setMetadata } from "@/lib/metadata";
import CustomLink from "@/components/Common/CustomLink";
import { getTranslation } from "@/lib/i18n/server";

const title = "auth:sign_up";
const url = "sign-up";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return setMetadata({ title, url, lang });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { t } = await getTranslation(lang);
  return (
    <>
      <div className="w-full bg-white border border-gray-300 shadow-xs p-6 mb-6">
        {/*<LoginForm />*/}
      </div>
      <div className="ml-6 mb-12 text-sm">
        <CustomLink
          className="text-zinc-500 hover:text-sky-700 transition"
          href={`/${lang}/login`}
          aria-label="Login"
        >
          {t("auth:login")}
        </CustomLink>
      </div>
    </>
  );
}
