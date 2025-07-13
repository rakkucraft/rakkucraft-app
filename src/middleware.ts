import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { availableLanguages, defaultLanguage } from "./translations/settings";
import { updateSession } from "./lib/supabase/middleware";
import { hasEnvVars } from "./lib/utils";

const getNegotiatedLanguage = (
  headers: Negotiator.Headers,
): string | undefined => {
  return new Negotiator({ headers }).language([
    ...availableLanguages.map((lang) => {
      return lang.value;
    }),
  ]);
};

export async function middleware(request: NextRequest) {
  let user = null;
  let response = NextResponse.next();

  if (hasEnvVars) {
    const { supabaseResponse, user: authenticatedUser } =
      await updateSession(request);
    response = supabaseResponse;
    user = authenticatedUser;
  }

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

  // routing
  if (specifiedLanguage) {
    if (pathname.startsWith(`/${specifiedLanguage}/protected`) && !user) {
      return NextResponse.redirect(
        new URL(`/${specifiedLanguage}/login`, request.url),
      );
    }
  } else {
    if (pathname.startsWith(`/protected`) && !user) {
      return NextResponse.redirect(
        new URL(`/${preferredLanguage}/login`, request.url),
      );
    } else {
      const newPathname = `/${preferredLanguage}${pathname}`;
      if (preferredLanguage === defaultLanguage) {
        return NextResponse.rewrite(new URL(newPathname, request.url));
      } else {
        return NextResponse.redirect(new URL(newPathname, request.url));
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
