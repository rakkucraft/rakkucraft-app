import { Metadata } from "next";
import { setMetadata } from "@/lib/metadata";
import CustomLink from "@/components/Common/CustomLink";
import { getTranslation } from "@/lib/i18n/server";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const title = "auth:forgot_password";
const url = "forgot-password";

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
      <div className="bg-white border border-gray-300 border-l-sky-400 border-l-4 shadow-xs text-sm text-zinc-500 p-3 mb-6">
        {t("auth:forgot_password_description")}
      </div>
      <div className="w-full bg-white border border-gray-300 shadow-xs p-6 mb-6">
        <ForgotPasswordForm />
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
