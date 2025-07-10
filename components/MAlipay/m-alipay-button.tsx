import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import cs from '../utils/classNames';
import MAlipayAutoSubmit from './m-alipay-auto-submit';
import { MAlipayButtonProps, MAlipayButtonRef } from './interface';
import ConfirmModal from '../confirm-modal';
import omit from '../utils/omit';
import PayMask from '../PayMask';
import Button from '../Button';
import { IconAlipay } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const MAlipayButton = forwardRef<
  MAlipayButtonRef,
  PropsWithChildren<MAlipayButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconAlipay />
        支付宝支付
      </>
    ),
    onClick,
    formHtml: propsFormHtml,
    createOrder,
    displayType = 'modal',
    modalProps,
    maskProps,
    ...others
  } = props;

  const { retryButtonProps, finishButtonProps, onClose, ...modalPropsOthers } =
    modalProps || {};

  const { onClose: onMaskClose, ...restMaskProps } = maskProps || {};

  const mAlipayButtonRef = useRef<MAlipayButtonRef>({ nativeElement: null });

  const [formHtmlString, setFormHtmlString] = useState<string>();
  const [showMask, setShowMask] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => mAlipayButtonRef.current);

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
      const { formHtml } = await createOrder();
      if (formHtml) {
        handleDisplay();
        setFormHtmlString(formHtml);
      }
    }
  }, [createOrder, handleDisplay]);

  const handleOpen = useCallback(() => {
    if (propsFormHtml) {
      handleDisplay();
      setFormHtmlString(propsFormHtml);
    }
  }, [propsFormHtml, handleDisplay]);

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

  const isShowAutoSubmit = useMemo(() => {
    if (displayType === 'modal') {
      return showModal;
    }
    return showMask;
  }, [displayType, showModal, showMask]);

  return (
    <React.Fragment>
      <Button
        ref={mAlipayButtonRef}
        className={cs(getPrefixCls('m-alipay-btn'), className)}
        onClick={handleClick}
        {...omit(others, ['displayType', 'displayProps'])}
      >
        {children}
      </Button>
      {isShowAutoSubmit && formHtmlString && (
        <MAlipayAutoSubmit formHtml={formHtmlString} />
      )}
      {displayType === 'modal' && formHtmlString && (
        <ConfirmModal
          visible={showModal}
          retryButtonProps={{
            onClick: handleRetry,
            ...omit(retryButtonProps || {}, ['onClick']),
          }}
          finishButtonProps={{
            onClick: handleFinish,
            ...omit(finishButtonProps || {}, ['onClick']),
          }}
          onClose={handleOnCloseModal}
          autoOpenWindow={false}
          {...modalPropsOthers}
        />
      )}
      {showMask && formHtmlString && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            onMaskClose?.();
          }}
          payUrl={formHtmlString}
          title={'支付宝'}
          autoOpenWindow={false}
          {...restMaskProps}
        />
      )}
    </React.Fragment>
  );
});

MAlipayButton.displayName = 'MAlipayButton';

export default memo(MAlipayButton);
