// next-i18next.config.mjs
import path from "path";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "th"],
  fallbackLng: "en",
};

export const localePath = path.resolve("./public/locales");
