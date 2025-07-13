import { NextRequest, NextResponse } from "next/server";
import { defaultLanguage } from "./lib/i18n/settings";
import { updateSession } from "./lib/supabase/middleware";
import { getCurrentLanguageSettings } from "./lib/i18n/middleware";

export async function middleware(request: NextRequest) {
  // Process of Supabase
  const { supabaseResponse: response, user: user } =
    await updateSession(request);

  // Process of i18n
  const {
    specifiedLanguage: specifiedLanguage,
    preferredLanguage: preferredLanguage,
    pathname: pathname,
  } = getCurrentLanguageSettings(request);

  // Routing
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
