import { IconClose } from "@arco-iconbox/react-growingio/src";
import classNames from "clsx";
import { type ReactNode, FC } from "react";
import type { ButtonProps } from "../button";
import Button from "../button";
import type { TourLocale, TourStepProps } from "./interface";

function isValidNode(node: ReactNode): boolean {
  return node !== undefined && node !== null;
}

interface TourPanelProps {
  stepProps: TourStepProps;
  current: number;
  type: TourStepProps["type"];
  indicatorType?: "number" | "dot";
  closeIcon?: ReactNode;
  locale: TourLocale;
}

const TourPanel: FC<TourPanelProps> = ({
  stepProps,
  current,
  type,
  indicatorType,
  closeIcon,
  locale,
}) => {
  const {
    prefixCls,
    total = 1,
    title,
    onClose,
    onPrev,
    onNext,
    onFinish,
    cover,
    description,
    nextButtonProps,
    prevButtonProps,
    type: stepType,
    closeIcon: stepCloseIcon,
    indicatorType: stepIndicatorType,
  } = stepProps;

  const mergedType = stepType ?? type;
  const mergedIndicatorType = stepIndicatorType ?? indicatorType;
  const mergedCloseIcon = stepCloseIcon ?? closeIcon;
  const mergedClosable = mergedCloseIcon !== false && mergedCloseIcon !== null;
  const isLastStep = current === total - 1;

  const prevBtnClick = () => {
    onPrev?.();
    prevButtonProps?.onClick?.();
  };

  const nextBtnClick = () => {
    if (isLastStep) {
      onFinish?.();
    } else {
      onNext?.();
    }
    nextButtonProps?.onClick?.();
  };

  const headerNode = isValidNode(title) ? (
    <div className={`${prefixCls}-header`}>
      <div className={`${prefixCls}-title`}>{title}</div>
    </div>
  ) : null;

  const descriptionNode = isValidNode(description) ? (
    <div className={`${prefixCls}-description`}>{description}</div>
  ) : null;

  const coverNode = isValidNode(cover) ? <div className={`${prefixCls}-cover`}>{cover}</div> : null;

  let mergeIndicatorNode: ReactNode;

  if (mergedIndicatorType === "dot") {
    mergeIndicatorNode = [...Array.from({ length: total }).keys()].map<ReactNode>(
      (stepItem, index) => (
        <span
          key={stepItem}
          className={classNames(
            index === current && `${prefixCls}-indicator-active`,
            `${prefixCls}-indicator`,
          )}
        />
      ),
    );
  } else {
    mergeIndicatorNode = (
      <span className={`${prefixCls}-indicator-number`}>{`${current + 1}/${total}`}</span>
    );
  }

  const mainBtnType = mergedType === "primary" ? "default" : "primary";

  const secondaryBtnProps: ButtonProps = {
    type: mergedType === "primary" ? "outline" : "default",
  };

  return (
    <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-inner`}>
        {mergedClosable && (
          <span onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
            <IconClose className={`${prefixCls}-close-icon`} />
          </span>
        )}
        {coverNode}
        {headerNode}
        {descriptionNode}
        <div className={`${prefixCls}-footer`}>
          {total > 1 && <div className={`${prefixCls}-indicators`}>{mergeIndicatorNode}</div>}
          <div className={`${prefixCls}-buttons`}>
            {current !== 0 ? (
              <Button
                {...secondaryBtnProps}
                {...prevButtonProps}
                onClick={prevBtnClick}
                size="mini"
                className={classNames(`${prefixCls}-prev-btn`, prevButtonProps?.className)}
              >
                {prevButtonProps?.children ?? locale?.previous}
              </Button>
            ) : null}
            <Button
              type={mainBtnType}
              {...nextButtonProps}
              onClick={nextBtnClick}
              size="mini"
              className={classNames(`${prefixCls}-next-btn`, nextButtonProps?.className)}
            >
              {nextButtonProps?.children ?? (isLastStep ? locale?.finish : locale?.next)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPanel;
