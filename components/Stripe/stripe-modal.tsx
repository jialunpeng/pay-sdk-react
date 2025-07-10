import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import cs from '../utils/classNames';
import { StripeModalProps, StripeModalRef, StripeProps } from './interface';
import PayModal from '../pay-modal';
import Stripe from './stripe';
import { getPrefixCls } from '../utils/getPrefixCls';

const StripeModal = React.forwardRef<
  StripeModalRef,
  PropsWithChildren<StripeModalProps>
>((props, ref) => {
  const {
    stripeProps: propsStripeProps,
    visible,
    onClose,
    className,
    ...rest
  } = props;

  const stripeRef = useRef<StripeModalRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [stripeProps, setStripeProps] = useState<StripeProps>();

  const isControlled = visible !== undefined;
  const _visible = isControlled ? visible : uncontrolledVisible;

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
    <PayModal
      className={cs(getPrefixCls('stripe-modal'), className)}
      visible={_visible}
      onClose={() => {
        if (!isControlled) {
          setUncontrolledVisible(false);
        }
        onClose?.();
      }}
      footer={null}
      {...rest}
    >
      {_stripeProps && <Stripe {..._stripeProps} />}
    </PayModal>
  );
});

StripeModal.displayName = 'StripeModal';

export default memo(StripeModal);
