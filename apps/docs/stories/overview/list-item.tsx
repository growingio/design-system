import { ReactNode } from "react";
import { IconRight } from "@arco-iconbox/react-growingio";

import styles from "./list-item.module.css";

export interface ListItemProps {
  svg: ReactNode;
  name: string;
  group?: string;
  title: ReactNode;
}

export default function ListItem({ svg, name, group, title }: ListItemProps) {
  return (
    <a
      href={`/?path=/docs/components-${group}-${name}--docs`}
      className={styles.listItem}
    >
      <div className={styles.listItemLogo}>{svg}</div>
      <div className={styles.listItemTitle}>
        {title}
        <IconRight />
      </div>
    </a>
  );
}
