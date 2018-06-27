import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages } from "./locales";

const calendarFormats: any = {
  calendarHeader: {
    month: "long",
    weekday: "long",
    day: "numeric"
  },
  calendarNav: {
    month: "long",
    year: "numeric"
  },
  datePicker: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }
};
const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: calendarFormats,
  de: calendarFormats
};

Vue.use(VueI18n);
export const i18n = new VueI18n({
  //   dateTimeFormats
  locale: "ru",
  messages
});
