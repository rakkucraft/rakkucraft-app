import { Metadata } from "next";
import { setMetadata } from "@/lib/metadata";
import ResetPasswordForm from "./components/ResetPasswordForm";
import LanguageSelector from "@/components/Common/LanguageSelector";

const title = "auth:reset_password";
const url = "reset-password";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return setMetadata({ title, url, lang });
}

export default async function Page() {
  return (
    <>
      <div className="w-full bg-white border border-gray-300 shadow-xs p-6 mb-6">
        <ResetPasswordForm />
      </div>
      <div className="mx-6 mb-6">
        <LanguageSelector />
      </div>
    </>
  );
}
