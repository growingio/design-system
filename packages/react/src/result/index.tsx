import * as React from 'react';
import {
  default as ArcoResult,
  ResultProps as ArcoResultProps,
} from '@arco-design/web-react/es/Result';
import { clsx } from 'clsx';
import Result200 from './Result200';
import Result401 from './Result401';
import Result402 from './Result402';
import Result403 from './Result403';
import Result404 from './Result404';
import Result500 from './Result500';
import ResultNoResource from './ResultNoResource';

type ArcoStatusType = 'success' | 'error' | 'info' | 'warning' | null;
export type ResultProps = Omit<ArcoResultProps, 'status'> & {
  status?:
    | ArcoStatusType
    | 'no-resource'
    | '200'
    | '401'
    | '402'
    | '403'
    | '404'
    | '500';
};

const isArcoStatus = (status: string) =>
  ['success', 'error', 'info', 'warning', null].includes(status);

const ResultFunction = (props: ResultProps, ref: React.Ref<unknown>) => {
  const prefixCls = 'arco-result';
  const { className, status, ...restProps } = props;
  const cls = clsx(
    {
      [`${prefixCls}-${status}`]: !!status,
    },
    className,
  );
  let icon = null;
  switch (status) {
    case '200':
      icon = <Result200 />;
      break;
    case '401':
      icon = <Result401 />;
      break;
    case '402':
      icon = <Result402 />;
      break;
    case '403':
      icon = <Result403 />;
      break;
    case '404':
      icon = <Result404 />;
      break;
    case '500':
      icon = <Result500 />;
      break;
    case 'no-resource':
      icon = <ResultNoResource />;
      break;
  }
  if (isArcoStatus(status)) {
    return (
      <ArcoResult
        ref={ref}
        {...restProps}
        className={cls}
        status={status as ArcoStatusType}
      />
    );
  }
  return (
    <ArcoResult
      ref={ref}
      {...restProps}
      className={cls}
      icon={icon}
      status={null}
    />
  );
};

const ForwardRefResult = React.forwardRef<HTMLDivElement, ResultProps>(
  ResultFunction,
);

const Result = ForwardRefResult as typeof ForwardRefResult;
Result.displayName = 'Result';

export default Result;
