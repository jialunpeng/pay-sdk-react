import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { IconPaypalText, IconPaypalWhite } from '../icons';
import { PaypalButtonProps, PaypalButtonRef } from './interface';
import cs from '../utils/classNames';
import PayMask from '../PayMask';
import Button from '../Button';
import { getPrefixCls } from '../utils/getPrefixCls';

const PaypalButton = forwardRef<
  PaypalButtonRef,
  PropsWithChildren<PaypalButtonProps>
>((props, ref) => {
  const {
    className,
    children = (
      <>
        <IconPaypalText /> Buy Now
      </>
    ),
    onClick,
    paypalUrl: propsPaypalUrl,
    createOrder,
    maskProps,
    ...others
  } = props;

  const { onClose: onMaskClose, ...restMaskProps } = maskProps || {};

  const paypalButtonRef = useRef<PaypalButtonRef>({ nativeElement: null });

  const [showMask, setShowMask] = useState(false);
  const [paypalUrl, setPaypalUrl] = useState<string>();

  useImperativeHandle(ref, () => paypalButtonRef.current);

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      // 1. 业务侧创建订单，获取参数
      const { paypalUrl } = await createOrder();
      if (paypalUrl) {
        // 2. 唤起蒙层
        setShowMask(true);
        setPaypalUrl(paypalUrl);
      }
    }
  }, [createOrder]);

  const handleOpen = useCallback(() => {
    if (propsPaypalUrl) {
      setShowMask(true);
      setPaypalUrl(propsPaypalUrl);
    }
  }, [propsPaypalUrl]);

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
        ref={paypalButtonRef}
        className={cs(getPrefixCls('paypal-btn'), className)}
        onClick={handleClick}
        {...others}
      >
        {children}
      </Button>
      {showMask && paypalUrl && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            onMaskClose?.();
          }}
          payUrl={paypalUrl}
          title={
            <>
              <IconPaypalWhite />
              PayPal
            </>
          }
          {...restMaskProps}
        />
      )}
    </React.Fragment>
  );
});

PaypalButton.displayName = 'PaypalButton';

export default memo(PaypalButton);
