import type { ReactNode } from "react";
import { CommonProps } from "../_core/types";

export interface PastTimeTriggerProps extends CommonProps {
  value?: string;
  placeholder?: string;
  shortcut?: string;
  startDate?: string;
  endDate?: string;
  focused?: boolean;
}

export interface GroupProps {
  children: ReactNode;
}
