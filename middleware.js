import createMiddleware from "next-intl/middleware";

export const AppLanguage = {
  English: "en",
  Indonasian: "id-ID",
};

export default createMiddleware({
   // A list of all locales that are supported
   locales: ["en", "id-ID"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: false,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // API, _next, static pages, and any pathnames with a dot (e.g. favicon.ico)
  matcher: [
    "/((?!api|_next|_vercel|lp-static|.*\\..*).*)"  // Exclude /static path
  ],
};