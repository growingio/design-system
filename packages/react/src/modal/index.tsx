import React from 'react';
import clsx from 'clsx';
import { default as ArcoModal } from '@arco-design/web-react/es/Modal';
import type {
  ModalProps as ArcoModalProps,
  ModalReturnProps,
} from '@arco-design/web-react/es/Modal/interface';
import type { ConfirmProps } from '@arco-design/web-react/es/Modal/confirm';
import type { ModalConfigType } from '@arco-design/web-react/es/Modal/config';
import useModal from '@arco-design/web-react/es/Modal/useModal';

export type { ModalHookReturnType } from '@arco-design/web-react/es/Modal/interface';

export type ModalProps = ArcoModalProps & {
  /**
   * 是否开启全屏模式
   */
  fullscreen?: boolean;
  children?: React.ReactNode;
};

const ModalFunction = (props: ModalProps, ref: React.Ref<HTMLDivElement>) => {
  const { className, fullscreen, alignCenter, ...restProps } = props;
  const prefixCls = 'arco-modal';
  const cls = clsx({ [`${prefixCls}-fullscreen`]: !!fullscreen }, className);
  return (
    <div ref={ref}>
      <ArcoModal
        {...restProps}
        alignCenter={!fullscreen && alignCenter}
        className={cls}
      />
    </div>
  );
};

const ForwardRefModal = React.forwardRef<HTMLDivElement, ModalProps>(
  ModalFunction,
);

const Modal = ForwardRefModal as typeof ForwardRefModal & {
  confirm: (props: ConfirmProps) => ModalReturnProps;
  info: (props: ConfirmProps) => ModalReturnProps;
  success: (props: ConfirmProps) => ModalReturnProps;
  warning: (props: ConfirmProps) => ModalReturnProps;
  error: (props: ConfirmProps) => ModalReturnProps;
  config: (config: ModalConfigType) => void;
  destroyAll: () => void;
  useModal: typeof useModal;
};

Modal.displayName = 'Modal';

Object.assign(Modal, {
  confirm: ArcoModal.confirm,
  info: ArcoModal.info,
  success: ArcoModal.success,
  warning: ArcoModal.warning,
  error: ArcoModal.error,
  config: ArcoModal.config,
  destroyAll: ArcoModal.destroyAll,
  useModal: ArcoModal.useModal,
});

export default Modal;
