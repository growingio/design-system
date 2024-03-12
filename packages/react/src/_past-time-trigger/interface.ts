import type { ReactNode } from "react";

export interface PastTimeTriggerProps {
  value?: string;
  placeholder?: string;
  shortcut?: string;
  startDate?: string;
  endDate?: string;
}

export interface GroupProps {
  children: ReactNode;
}
