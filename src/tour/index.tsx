import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import {
  default as RcTour,
  TourProps as RcTourProps,
} from '@rc-component/tour';
export type { TourStepProps } from './interface';
import TourPanel from './TourPanel';
import { TourStepProps } from './interface';

export interface TourProps
  extends Omit<RcTourProps, 'renderPanel' | 'prefixCls'> {
  indicatorsRender?: (current: number, total: number) => ReactNode;
  indicatorType?: 'number' | 'dot';
  type?: 'default' | 'primary';
  steps?: TourStepProps[];
}

function Tour(props: TourProps) {
  const {
    type = 'default',
    indicatorType = 'number',
    steps,
    ...restProps
  } = props;
  const prefixCls = 'gio-tour';
  const mergedSteps = useMemo(
    () =>
      steps?.map((step) => ({
        ...step,
        className: clsx(step.className, {
          [`${prefixCls}-primary`]: (step.type ?? type) === 'primary',
        }),
      })),
    [steps, type],
  );

  const renderPanel = (stepProps: TourStepProps, stepCurrent: number) => (
    <TourPanel
      type={type}
      indicatorType={indicatorType}
      stepProps={stepProps}
      current={stepCurrent}
    />
  );

  return (
    <RcTour
      prefixCls={prefixCls}
      mask={{ color: 'rgba(29, 33, 41, 0.60)' }}
      steps={mergedSteps}
      {...restProps}
      renderPanel={renderPanel}
    />
  );
}

export default Tour;
