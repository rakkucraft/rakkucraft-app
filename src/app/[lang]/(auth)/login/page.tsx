import { rubik } from "@/lib/fonts";
import LoginForm from "./components/LoginForm";
import { Metadata } from "next";
import { setMetadata } from "@/lib/metadata";

const title = "auth:login";
const url = "login";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return setMetadata({ title, url, lang });
}

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-zinc-100">
      <div>
        <div
          className={`${rubik.className} font-medium text-stone-900 text-center text-2xl mb-6`}
        >
          Rakkucraft
        </div>
        <div className="w-full max-w-xs bg-white border-1 border-gray-300 shadow-xs p-6 mb-16">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
