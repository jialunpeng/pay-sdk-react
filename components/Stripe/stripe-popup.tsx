import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import cs from '../utils/classNames';
import {
  BasesStripeProps,
  StripePopupProps,
  StripePopupRef,
} from './interface';
import Stripe from '.';
import PayPopup from '../pay-popup';
import { getPrefixCls } from '../utils/getPrefixCls';
const StripePopup = React.forwardRef<
  StripePopupRef,
  PropsWithChildren<StripePopupProps>
>((props, ref) => {
  const {
    visible: controlledVisible,
    onClose,
    closeOnMaskClick = true,
    className,
    bodyStyle,
    stripeProps: propsStripeProps,
    ...others
  } = props;

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [stripeProps, setStripeProps] = useState<BasesStripeProps>();
  const stripeRef = useRef<StripePopupRef>(null);

  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : uncontrolledVisible;

  useImperativeHandle(ref, () => ({
    open: (value) => {
      if (value) {
        setStripeProps(value);
      }
      setUncontrolledVisible(true);
    },
    close: () => {
      setUncontrolledVisible(false);
      onClose?.();
    },
    current: stripeRef.current,
  }));

  const _stripeProps = propsStripeProps ?? stripeProps;

  return (
    <PayPopup
      className={cs(getPrefixCls('stripe-popup'), className)}
      visible={visible}
      onClose={() => {
        if (!isControlled) {
          setUncontrolledVisible(false);
        }
        onClose?.();
      }}
      closeOnMaskClick={closeOnMaskClick}
      bodyStyle={{ height: '40vh', overflowY: 'scroll', ...bodyStyle }}
      {...others}
    >
      {_stripeProps && <Stripe {..._stripeProps} />}
    </PayPopup>
  );
});

StripePopup.displayName = 'StripePopup';

export default memo(StripePopup);
