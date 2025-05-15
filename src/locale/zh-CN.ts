import locale from "@arco-design/web-react/es/locale/zh-CN";
import { Locale } from "./interface";

export default {
  ...locale,
  MultipleSelect: {
    selectAll: "全部",
    selected: "已选",
  },
  Tour: {
    previous: "上一步",
    next: "下一步",
  },
  PastPeriodPicker: {
    shortcuts: "常用时间",
    custom: "自定义",
    lastPeriod: "上一周期",
    infoText: "自定任意周期与已选周期相比较",
    okText: "确定",
    cancelText: "取消",
  },
} as Locale;
