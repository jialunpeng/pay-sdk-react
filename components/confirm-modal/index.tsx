import React, { useCallback } from 'react';
import { ConfirmModalProps } from './interface';
import { usePayWindowOpen } from '../hooks/usePayWindowOpen';
import PayModal from '../pay-modal';
import { OpenPayUrlMode } from '../shared/enums';

const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const {
    visible,
    title = '支付确认',
    desc = (
      <>
        <div>1. 如果您已完成支付，请点击[支付完成]</div>
        <div>2. 如果未支付成功，可点击[重新支付]</div>
      </>
    ),
    retryButtonProps,
    finishButtonProps,
    icon = (
      <span role="img" aria-label="success">
        ✔️
      </span>
    ),
    showClose = true,
    maskClosable = false,
    onClose,
    payUrl,
    autoOpenWindow = false,
    openMode = OpenPayUrlMode.Window,
    forceNewWindow,
  } = props;

  const {
    children: retryButtonChildren = '重新支付',
    ...retryButtonPropsRest
  } = retryButtonProps || {};

  const {
    children: finishButtonChildren = '支付完成',
    ...finishButtonPropsRest
  } = finishButtonProps || {};

  const { closeWindow } = usePayWindowOpen({
    payUrl: payUrl || '',
    onClose,
    autoOpen: autoOpenWindow,
    openMode: openMode,
    ...(openMode === OpenPayUrlMode.Window && { forceNewWindow }),
  });

  const handleClose = useCallback(() => {
    onClose?.();
    if (autoOpenWindow) closeWindow();
  }, [onClose, autoOpenWindow, closeWindow]);

  if (!visible) return null;

  return (
    <PayModal
      visible={visible}
      icon={icon}
      title={title}
      desc={desc}
      showClose={showClose}
      maskClosable={maskClosable}
      onClose={handleClose}
      retryButtonProps={{
        children: retryButtonChildren,
        ...retryButtonPropsRest,
      }}
      finishButtonProps={{
        children: finishButtonChildren,
        ...finishButtonPropsRest,
      }}
    />
  );
};

export * from './interface';

export default ConfirmModal;
