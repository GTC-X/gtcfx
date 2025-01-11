import createMiddleware from "next-intl/middleware";

export const AppLanguage = {
  English: "en",
  Arabic: "ar-AE",
  Chinese: "zh-hans",
  Malay: "ms-MY",
  Turkish:"tr-TR",
  Hindi: "hi-IN",
  Indonasian: "id-ID",
  French: "fr-FR",
  Spanish: "es-ES",
  Vitenam: "vi-VN",
  Russian: "ru_RU",
  Italian: "it-IT",
  korean: "ko-KR",
  Japanese: "ja-JP",
  Pashto: "ps-AF",
  Farsi: "fa-IR",
  Urdu:"ur-PK",
  Thailand:"th-TH",
  português:"pt-PT",
  Philippines:"tl-PH",
  Malayalam: "ml_IN",
  Chinese_Traditional:"zh-TW"
};

export default createMiddleware({
   // A list of all locales that are supported
   locales: ["en", "ar-AE", "zh-hans","zh-TW","ms-MY","tr-TR","ur-PK","hi-IN","id-ID","fr-FR","es-ES","pt-PT","vi-VN","fa-IR","tl-PH","th-TH","ru_RU","ja-JP","ko-KR","ps-AF","it-IT","ml_IN"],

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