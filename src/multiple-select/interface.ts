import { SelectProps } from "../select";

export interface MultipleSelectProps
  extends Omit<SelectProps, "mode" | "dropdownRender" | "value" | "defaultValue"> {
  defaultValue?: string[] | number[];
  value?: string[] | number[];
}
