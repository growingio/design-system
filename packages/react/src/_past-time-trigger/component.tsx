import React from "react";
import { IconCalendar } from "@arco-iconbox/react-growingio";
import { Tag } from "..";
import SeparatorSvg from "./separator-svg";
import { PastTimeTriggerProps } from "./interface";

export default function PastTimeTrigger(props: PastTimeTriggerProps) {
  const { value, placeholder, shortcut, startDate, endDate } = props;
  const clsPrefix = "gio-past-time-trigger";

  let displayContent = (
    <span className={`${clsPrefix}-placeholder`}>{placeholder}</span>
  );
  if (value) {
    displayContent = (
      <>
        {shortcut && (
          <Tag size="mini" color="primary" className={`${clsPrefix}-shortcut`}>
            {shortcut}
          </Tag>
        )}
        {(startDate || endDate) && (
          <div className={`${clsPrefix}-date-range`}>
            <span className={`${clsPrefix}-start-date`}>{startDate}</span>
            {endDate && startDate !== endDate && (
              <>
                <span className={`${clsPrefix}-separator`}>
                  <SeparatorSvg />
                </span>
                <span className={`${clsPrefix}-end-date`}>{endDate}</span>
              </>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className={clsPrefix}>
      {displayContent}
      <IconCalendar />
    </div>
  );
}
