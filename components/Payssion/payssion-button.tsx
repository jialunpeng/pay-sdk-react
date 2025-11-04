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
import {
  PayssionButtonProps,
  PayssionButtonRef,
  PayssionSecretMap,
} from './interface';
import PayMask from '../PayMask';
import Button from '../Button';
import { IconPayssionPay } from '../icons';
import { getPrefixCls } from '../utils/getPrefixCls';

const PayssionButton = forwardRef<
  PayssionButtonRef,
  PropsWithChildren<PayssionButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconPayssionPay />
        Payssion
      </>
    ),
    onClick,
    payssionUrl: propsPayssionUrl,
    createOrder,
    maskProps,
    ...others
  } = props;

  const { onClose, ...restMaskProps } = maskProps || {};

  const payssionButtonRef = useRef<PayssionButtonRef>(null);

  const [showMask, setShowMask] = useState(false);
  const [payssionUrl, setPayssionUrl] = useState<string>();

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return payssionButtonRef.current?.nativeElement || null;
    },
    openPayment: (options?: PayssionSecretMap) => {
      if (options) {
        setPayssionUrl(options.payssionUrl);
        setShowMask(true);
      }
    },
    closePayment: () => {
      setShowMask(false);
    },
    current: payssionButtonRef.current,
  }));

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      // 1. 业务侧创建订单，获取参数
      const { payssionUrl } = await createOrder();
      if (payssionUrl) {
        // 2. 唤起蒙层
        setShowMask(true);
        setPayssionUrl(payssionUrl);
      }
    }
  }, [createOrder]);

  const handleOpen = useCallback(() => {
    if (propsPayssionUrl) {
      setShowMask(true);
      setPayssionUrl(propsPayssionUrl);
    }
  }, [propsPayssionUrl]);

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
        ref={payssionButtonRef}
        className={cs(getPrefixCls('payssion-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      {payssionUrl && showMask && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            onClose?.();
          }}
          payUrl={payssionUrl}
          title={'Payssion'}
          {...restMaskProps}
        />
      )}
    </React.Fragment>
  );
});

PayssionButton.displayName = 'PayssionButton';

export default memo(PayssionButton);
