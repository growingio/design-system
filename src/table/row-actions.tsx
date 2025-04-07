import IconMore from "./more-svg";
import { ReactNode } from "react";
import Button from "../button";
import Dropdown, { DropdownProps } from "../dropdown";
import Menu from "../menu";
import Space from "../space";
import Link from "../link";

const MenuItem = Menu.Item;

interface RowAction {
  key: string;
  label: ReactNode;
}

export interface RowActionsProps extends Pick<DropdownProps, "trigger"> {
  actions: RowAction[];
  onClick?: (key: string) => void;
}

export default function RowActions({ actions = [], onClick, trigger = "click" }: RowActionsProps) {
  const realActions = actions.slice(0, 2);
  if (actions.length === 3) {
    realActions.push(actions.at(2) as RowAction);
  }
  return (
    <Space>
      {realActions.map((a) => (
        <Link key={a.key} onClick={() => onClick?.(a.key)}>
          {a.label}
        </Link>
      ))}
      {actions.length > 3 && (
        <Dropdown
          trigger={trigger}
          droplist={
            <Menu>
              {actions.slice(2).map((a) => (
                <MenuItem key={a.key} onClick={() => onClick?.(a.key)}>
                  {a.label}
                </MenuItem>
              ))}
            </Menu>
          }
        >
          <Button key="more-action" type="text" size="small" icon={<IconMore />} />
        </Dropdown>
      )}
    </Space>
  );
}
