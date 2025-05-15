import { Locale as ArcoLocale } from "@arco-design/web-react/es/locale/interface";

export interface Locale extends ArcoLocale {
  MultipleSelect: {
    selectAll: string;
    selected: string;
  };
  Tour: Record<string, string>;
  PastPeriodPicker: {
    shortcuts: string;
    custom: string;
    lastPeriod: string;
    infoText: string;
    okText: string;
    cancelText: string;
  };
}
