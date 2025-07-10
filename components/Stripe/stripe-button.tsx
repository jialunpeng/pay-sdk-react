import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  StripeButtonProps,
  StripeButtonRef,
  StripeModalRef,
  StripePopupRef,
} from './interface';
import StripePopup from './stripe-popup';
import StripeModal from './stripe-modal';
import Button from '../Button';

const StripeButton = forwardRef<
  StripeButtonRef,
  PropsWithChildren<StripeButtonProps>
>((props, ref) => {
  const {
    children = 'Stripe',
    onClick,
    displayType = 'popup',
    stripePopupProps,
    stripeModalProps,
    createOrder,
    ...others
  } = props;

  const stripeButtonRef = useRef<StripeButtonRef>({ nativeElement: null });

  const stripePopupRef = useRef<StripePopupRef>(null);
  const stripeModalRef = useRef<StripeModalRef>(null);

  useImperativeHandle(ref, () => stripeButtonRef.current);

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      // 1. 业务侧创建订单，获取参数
      const options = await createOrder();
      if (options?.clientSecret && options?.stripeKey) {
        // 2. 唤起弹窗
        if (displayType === 'modal') {
          stripeModalRef.current?.open(options);
        } else {
          stripePopupRef.current?.open(options);
        }
      }
    }
  }, [createOrder, displayType]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (createOrder) {
        handlePayCreateOrder();
      } else {
        if (displayType === 'modal') {
          stripeModalRef?.current?.open();
        } else {
          stripePopupRef?.current?.open();
        }
      }
      onClick?.(e);
    },
    [onClick, createOrder, handlePayCreateOrder, displayType]
  );

  return (
    <React.Fragment>
      <Button ref={stripeButtonRef} onClick={handleClick} {...others}>
        {children}
      </Button>
      {displayType === 'popup' && (
        <StripePopup ref={stripePopupRef} {...stripePopupProps} />
      )}
      {displayType === 'modal' && (
        <StripeModal ref={stripeModalRef} {...stripeModalProps} />
      )}
    </React.Fragment>
  );
});

StripeButton.displayName = 'StripeButton';

export default memo(StripeButton);
