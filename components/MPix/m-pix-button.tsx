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
import { MPixButtonProps, MPixButtonRef } from './interface';
import PayMask from '../PayMask';
import ConfirmModal from '../confirm-modal';
import Button from '../Button';
import { IconPix } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';
import omit from '../utils/omit';

const MPixButton = forwardRef<
  MPixButtonRef,
  PropsWithChildren<MPixButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconPix />
        PIX
      </>
    ),
    onClick,
    pixCode: propsPixCode,
    createOrder,
    displayType = 'modal',
    modalProps,
    maskProps,
    ...others
  } = props;

  const { retryButtonProps, finishButtonProps, onClose, ...modalPropsOthers } =
    modalProps || {};

  const { onClose: onMaskClose, ...restMaskProps } = maskProps || {};

  const mPixButtonRef = useRef<MPixButtonRef>({ nativeElement: null });

  const [showMask, setShowMask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pixCode, setPixCode] = useState<string>();

  useImperativeHandle(ref, () => mPixButtonRef.current);

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
      const { pixCode: code } = await createOrder();
      if (code) {
        handleDisplay();
        setPixCode(code);
      }
    }
  }, [createOrder, handleDisplay]);

  const handleOpen = useCallback(() => {
    if (propsPixCode) {
      handleDisplay();
      setPixCode(propsPixCode);
    }
  }, [propsPixCode, handleDisplay]);

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
        ref={mPixButtonRef}
        className={cs(getPrefixCls('m-pix-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      {displayType === 'mask' && showMask && pixCode && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            onMaskClose?.();
          }}
          payUrl={pixCode}
          title={'PIX'}
          {...restMaskProps}
        />
      )}
      {displayType === 'modal' && showModal && pixCode && (
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
          payUrl={pixCode}
          autoOpenWindow={true}
          {...modalPropsOthers}
        />
      )}
    </React.Fragment>
  );
});

MPixButton.displayName = 'MPixButton';

export default memo(MPixButton);
