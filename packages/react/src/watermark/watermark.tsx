import React, {
  forwardRef,
  useRef,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import cs from '@arco-design/web-react/es/_util/classNames';
import { ConfigContext } from '@arco-design/web-react/es/ConfigProvider';
import useMergeProps from '@arco-design/web-react/es/_util/hooks/useMergeProps';

import { WatermarkProps } from '@arco-design/web-react/es/Watermark/interface';
import useWatermark from '@arco-design/web-react/es/_hooks/useWatermark';

const defaultProps = {
  rotate: -30,
  fontStyle: {
    fontSize: '14px',
    color: 'rgba(2, 6, 14, 0.15)',
  },
  zIndex: 9999,
};

const watermarkOptionsKey = [
  'zIndex',
  'width',
  'height',
  'rotate',
  'image',
  'content',
  'fontStyle',
  'gap',
  'offset',
  'getContainer',
];

export function WatermarkComponent(baseProps: WatermarkProps, _) {
  const ctx = useContext(ConfigContext);
  const props = useMergeProps(
    baseProps,
    defaultProps,
    ctx.componentConfig?.Watermark,
  );
  const containerRef = useRef<HTMLDivElement>();

  const getContainer = useCallback(() => {
    return containerRef.current || props.getContainer?.();
  }, [containerRef.current, props.getContainer]);

  const watermarkOptions = watermarkOptionsKey.reduce((t, key) => {
    if (key in props) {
      t[key] = props[key];
    }
    return t;
  }, {});

  const { setWatermark } = useWatermark({
    ...watermarkOptions,
    getContainer,
  });

  useEffect(() => {
    setWatermark({
      ...watermarkOptions,
      getContainer,
    });
  }, [
    props.zIndex,
    props.width,
    props.height,
    props.rotate,
    props.image,
    props.content,
    JSON.stringify(props.fontStyle),
    JSON.stringify(props.gap),
    JSON.stringify(props.offset),
    getContainer,
  ]);

  const prefix = ctx.getPrefixCls('watermark');

  return props.children ? (
    <div
      className={cs(`${prefix}`, props.className, {
        [`${prefix}-rtl`]: ctx.rtl,
      })}
      style={props.style}
      ref={containerRef}
    >
      {props.children}
    </div>
  ) : null;
}

const Watermark = forwardRef(WatermarkComponent);

export default Watermark;
