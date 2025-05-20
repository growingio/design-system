import { Locale as ArcoLocale } from "@arco-design/web-react/es/locale/interface";
import { TourLocale } from "../tour/interface";

export interface Locale extends ArcoLocale {
  MultipleSelect: {
    selectAll: string;
    selected: string;
  };
  Tour: TourLocale;
  PastPeriodPicker: {
    shortcuts: string;
    custom: string;
    lastPeriod: string;
    infoText: string;
    okText: string;
    cancelText: string;
  };
}
