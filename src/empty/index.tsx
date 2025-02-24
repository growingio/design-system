import * as React from 'react';
import clsx from 'clsx';
import {
  default as ArcoEmpty,
  EmptyProps as ArcoEmptyProps,
} from '@arco-design/web-react/es/Empty';
import EmptyBoard from './Board';
import EmptyForbidden from './Forbidden';
import EmptyNoContent from './NoContent';
import EmptyNoFile from './NoFile';
import EmptyNoResource from './NoResource';
import EmptyNotFound from './NotFound';
import EmptyNotSearched from './NotSearched';

export type EmptyProps = ArcoEmptyProps & {
  size?: 'small' | 'large';
};

const EmptyFunction = (props: EmptyProps, ref: React.Ref<unknown>) => {
  const { size, className, ...restProps } = props;
  const cls = clsx({ [`arco-empty-${size}`]: !!size }, className);
  return <ArcoEmpty ref={ref} {...restProps} className={cls} />;
};

const ForwardRefEmpty = React.forwardRef<HTMLDivElement, EmptyProps>(
  EmptyFunction,
);

const Empty = ForwardRefEmpty as typeof ForwardRefEmpty & {
  Board: typeof EmptyBoard;
  Forbidden: typeof EmptyForbidden;
  NoContent: typeof EmptyNoContent;
  NoFile: typeof EmptyNoFile;
  NoResource: typeof EmptyNoResource;
  NotFound: typeof EmptyNotFound;
  NotSearched: typeof EmptyNotSearched;
};
Empty.displayName = 'Empty';
Empty.Board = EmptyBoard;
Empty.Forbidden = EmptyForbidden;
Empty.NoContent = EmptyNoContent;
Empty.NoFile = EmptyNoFile;
Empty.NoResource = EmptyNoResource;
Empty.NotFound = EmptyNotFound;
Empty.NotSearched = EmptyNotSearched;

export default Empty;
