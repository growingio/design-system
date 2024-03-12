import React, { type ReactNode } from "react";
import { Button, Radio } from "..";

export interface PastTimeShortcutsProps {
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
  options: {
    label: ReactNode;
    value: string;
    disabled?: boolean;
  }[];
}

export default function PastTimeShortcuts(props: PastTimeShortcutsProps) {
  const { defaultValue, value, onChange, options } = props;

  return (
    <Radio.Group
      className="gio-past-time-shortcuts"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    >
      {options.map((o) => (
        <Radio key={o.value} value={o.value}>
          {({ checked }) => (
            <Button shape="round" type={checked ? "primary" : "default"}>
              {o.label}
            </Button>
          )}
        </Radio>
      ))}
    </Radio.Group>
  );
}
