import { default as RcTour, TourProps as RcTourProps } from "@rc-component/tour";
import clsx from "clsx";
import { ReactNode, useContext, useMemo } from "react";
import { ConfigContext } from "../";
import { default as defaultLocale } from "../locale/default";
import { Locale } from "../locale/interface";
import TourPanel from "./TourPanel";
import { TourStepProps } from "./interface";
export type { TourStepProps } from "./interface";

export interface TourProps extends Omit<RcTourProps, "renderPanel" | "prefixCls"> {
  indicatorsRender?: (current: number, total: number) => ReactNode;
  indicatorType?: "number" | "dot";
  type?: "default" | "primary";
  steps?: TourStepProps[];
}

function Tour(props: TourProps) {
  const { type = "default", indicatorType = "number", steps, ...restProps } = props;
  const { locale = defaultLocale } = useContext(ConfigContext);
  const tourLocale = (locale as Locale).Tour;
  const prefixCls = "gio-tour";
  const mergedSteps = useMemo(
    () =>
      steps?.map((step) => ({
        ...step,
        className: clsx(step.className, {
          [`${prefixCls}-primary`]: (step.type ?? type) === "primary",
        }),
      })),
    [steps, type],
  );

  const renderPanel = (stepProps: TourStepProps, stepCurrent: number) => (
    <TourPanel
      locale={tourLocale}
      type={type}
      indicatorType={indicatorType}
      stepProps={stepProps}
      current={stepCurrent}
    />
  );

  return (
    <RcTour
      prefixCls={prefixCls}
      mask={{ color: "rgba(29, 33, 41, 0.60)" }}
      steps={mergedSteps}
      {...restProps}
      renderPanel={renderPanel}
    />
  );
}

export default Tour;
