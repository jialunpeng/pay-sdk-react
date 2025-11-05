import React, { useEffect, useState } from 'react';
import Mask from '../Mask';
import { PayMaskProps } from './interface';
import { usePayWindowOpen } from '../hooks/usePayWindowOpen';
import { mergeProps } from '../utils/with-default-props';
import cs from '../utils/classNames';
import { getPrefixCls } from '../utils/getPrefixCls';
import { OpenPayUrlMode } from '../shared/enums';

const classPrefix = getPrefixCls('mask');

const defaultProps = {
  visible: false,
  title: 'Pay',
  desc: `Don't see the secure pay browser? We'll help you re-launch the window to complete your purchase`,
  buttonText: 'Click to Continue',
  autoOpenWindow: true,
};

const PayMask: React.FC<PayMaskProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const {
    visible,
    payUrl,
    onClose,
    onMaskClick,
    onContinue,
    openMode,
    autoOpenWindow,
    forceNewWindow,
    className,
    destroyOnClose = true,
    closeWindowOnUnmount = true,
    ...rest
  } = props;

  const [isWindowMonitoring, setIsWindowMonitoring] = useState(false);

  const { openWindow, closeWindow } = usePayWindowOpen({
    payUrl: payUrl || '',
    onClose: () => {
      onClose?.();
      setIsWindowMonitoring(false);
    },
    autoOpen: autoOpenWindow,
    openMode,
    closeWindowOnUnmount,
    ...(openMode === OpenPayUrlMode.Window && { forceNewWindow }),
  });

  useEffect(() => {
    if (visible && autoOpenWindow) {
      openWindow();
    }
  }, [visible, autoOpenWindow, openWindow]);

  useEffect(() => {
    if (visible && isWindowMonitoring && !autoOpenWindow) {
      openWindow();
    }
  }, [visible, isWindowMonitoring, autoOpenWindow, openWindow]);

  const handleContinue = () => {
    if (!autoOpenWindow) {
      setIsWindowMonitoring(true);
    } else {
      openWindow();
    }
    onContinue?.();
  };

  const handleClose = () => {
    onClose?.();
    closeWindow();
  };

  const classNames = cs(classPrefix, className);

  return (
    <Mask
      visible={visible}
      onMaskClick={(e) => {
        handleClose();
        onMaskClick?.(e);
      }}
      className={classNames}
      destroyOnClose={destroyOnClose}
      {...rest}
    >
      <div className={`${classPrefix}-content`}>
        <button className={`${classPrefix}-close`} onClick={handleClose}>
          ×
        </button>
        <div className={`${classPrefix}-title`}>{props.title}</div>
        <div className={`${classPrefix}-desc`}>{props.desc}</div>
        <div className={`${classPrefix}-continue`} onClick={handleContinue}>
          {props.buttonText}
        </div>
      </div>
    </Mask>
  );
};

export * from './interface';

export default PayMask;
