import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import cs from '../utils/classNames';
import { MWeChatButtonProps, MWeChatButtonRef } from './interface';
import PayMask from '../PayMask';
import ConfirmModal from '../confirm-modal';
import Button from '../Button';
import { IconWechatPay } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';
import omit from '../utils/omit';

const MWechatButton = forwardRef<
  MWeChatButtonRef,
  PropsWithChildren<MWeChatButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconWechatPay />
        微信支付
      </>
    ),
    onClick,
    wechatUrl: propsWechatUrl,
    createOrder,
    displayType = 'modal',
    modalProps,
    maskProps,
    ...others
  } = props;

  const { retryButtonProps, finishButtonProps, onClose, ...modalPropsOthers } =
    modalProps || {};

  const { onClose: onMaskClose, ...restMaskProps } = maskProps || {};

  const mWeChatButtonRef = useRef<MWeChatButtonRef>({ nativeElement: null });

  const [showMask, setShowMask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [wechatUrl, setWechatUrl] = useState<string>();

  useImperativeHandle(ref, () => mWeChatButtonRef.current);

  const handleRetry = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (displayType === 'modal') {
        retryButtonProps?.onClick?.(event);
        setShowModal(false);
      }
    },
    [retryButtonProps, displayType]
  );

  const handleFinish = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (displayType === 'modal') {
        finishButtonProps?.onClick?.(event);
        setShowModal(false);
      }
    },
    [finishButtonProps, displayType]
  );

  const handleDisplay = useCallback(() => {
    if (displayType === 'modal') {
      setShowModal(true);
    } else {
      setShowMask(true);
    }
  }, [displayType]);

  const handleOnCloseModal = useCallback(() => {
    if (displayType === 'modal') {
      onClose?.();
      setShowModal(false);
    }
  }, [onClose, displayType]);

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      const { wechatUrl } = await createOrder();
      if (wechatUrl) {
        handleDisplay();
        setWechatUrl(wechatUrl);
      }
    }
  }, [createOrder, handleDisplay]);

  const handleOpen = useCallback(() => {
    if (propsWechatUrl) {
      handleDisplay();
      setWechatUrl(propsWechatUrl);
    }
  }, [propsWechatUrl, handleDisplay]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (createOrder) {
        handlePayCreateOrder();
      } else {
        handleOpen();
      }
      onClick?.(e);
    },
    [onClick, createOrder, handlePayCreateOrder, handleOpen]
  );

  return (
    <React.Fragment>
      <Button
        ref={mWeChatButtonRef}
        className={cs(getPrefixCls('m-wechat-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      {displayType === 'mask' && showMask && wechatUrl && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            onMaskClose?.();
          }}
          payUrl={wechatUrl}
          title={'WeChat'}
          {...restMaskProps}
        />
      )}
      {displayType === 'modal' && showModal && wechatUrl && (
        <ConfirmModal
          visible={showModal}
          onClose={handleOnCloseModal}
          retryButtonProps={{
            onClick: handleRetry,
            ...omit(retryButtonProps || {}, ['onClick']),
          }}
          finishButtonProps={{
            onClick: handleFinish,
            ...omit(finishButtonProps || {}, ['onClick']),
          }}
          payUrl={wechatUrl}
          autoOpenWindow={true}
          {...modalPropsOthers}
        />
      )}
    </React.Fragment>
  );
});

MWechatButton.displayName = 'MWechatButton';

export default memo(MWechatButton);
