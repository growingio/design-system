import { SelectProps } from "../select";

export interface MultipleSelectProps
  extends Omit<SelectProps, "mode" | "dropdownRender" | "value" | "defaultValue" | "options"> {
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  options: {
    label: string;
    value: string | number;
    disabled?: boolean;
    extra?: any;
  }[];
}
