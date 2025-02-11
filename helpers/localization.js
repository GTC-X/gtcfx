import { AppLanguage } from "../middleware";

export const supportedLanguages = {
  [AppLanguage.English]: {
    code: AppLanguage.English,
    name: "English",
    shortName: "EN",
    direction: "ltr",
    isLeftDirection: true,
  },
  [AppLanguage.Indonasian]: {
    code: AppLanguage.Indonasian,
    name: "Bahasa Indonesia",
    shortName: "ID",
    direction: "ltr",
    isLeftDirection: true,
  }
};
