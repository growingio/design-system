import React from "react";
import { GroupProps } from "./interface";

export default function Group({ children }: GroupProps) {
  const clsPrefix = "gio-past-time-trigger-group";
  return <div className={clsPrefix}>{children}</div>;
}
