import type { Metadata } from "next";
import { inter, notoSansJp } from "@/lib/fonts";
import "./globals.css";
import { dir } from "i18next";
import { LanguageProvider } from "@/lib/i18n/client";
import { baseUrl } from "@/lib/metadata";

const title = "Rakkucraft - A Modern CMS Like WordPress";
const description = `
Rakkucraft reimagines the WordPress experience using a modern tech stack—empowering users to build, 
manage, and deploy websites with familiar workflows and vastly improved performance.
`;

export const metadata: Metadata = {
  title: title,
  description: description,
  robots: "noindex,nofollow", // TODO:本番稼働時に消す
  alternates: {
    canonical: baseUrl,
    languages: {
      ja: `${baseUrl}/ja`,
      en: `${baseUrl}/en`,
    },
  },
  openGraph: {
    title: title,
    description: description,
    url: baseUrl,
    siteName: title,
    type: "website",
    images: `${baseUrl}/images/ogp-image.webp`,
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={dir(lang)} prefix="og: https://ogp.me/ns#">
      <body className={lang === "ja" ? notoSansJp.className : inter.className}>
        <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
