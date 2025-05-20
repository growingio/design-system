import locale from "@arco-design/web-react/es/locale/zh-TW";
import { Locale } from "./interface";

export default {
  ...locale,
  MultipleSelect: {
    selectAll: "全部",
    selected: "已選",
  },
  Tour: {
    previous: "上一步",
    next: "下一步",
    finish: "結束導覽",
  },
  PastPeriodPicker: {
    shortcuts: "常用時間",
    custom: "自定義",
    lastPeriod: "上一週期",
    infoText: "自定任意週期與已選週期相比較",
    okText: "確定",
    cancelText: "取消",
  },
} as Locale;
