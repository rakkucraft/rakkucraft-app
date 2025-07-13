import Negotiator from "negotiator";
import { NextRequest } from "next/server";
import { availableLanguages, defaultLanguage } from "./settings";

const getNegotiatedLanguage = (
  headers: Negotiator.Headers,
): string | undefined => {
  return new Negotiator({ headers }).language([
    ...availableLanguages.map((lang) => {
      return lang.value;
    }),
  ]);
};

export function getCurrentLanguageSettings(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const preferredLanguage = getNegotiatedLanguage(headers) || defaultLanguage;
  const pathname = request.nextUrl.pathname;

  let specifiedLanguage;
  availableLanguages.forEach((lang) => {
    if (
      pathname.startsWith(`/${lang.value}/`) ||
      pathname === `/${lang.value}`
    ) {
      specifiedLanguage = lang.value;
    }
  });

  return {
    specifiedLanguage: specifiedLanguage,
    preferredLanguage: preferredLanguage,
    pathname: pathname,
  };
}
