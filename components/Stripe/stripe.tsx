import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeProps } from './interface';
import cs from '../utils/classNames';
import { getPrefixCls } from '../utils/getPrefixCls';

const Stripe = React.forwardRef<HTMLElement, PropsWithChildren<StripeProps>>(
  (props, ref) => {
    const { stripeKey, clientSecret, className = '', ...others } = props;

    const stripeRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => stripeRef.current as HTMLElement);

    const stripePromise = useMemo(() => {
      if (!stripeKey) {
        return null;
      }
      return loadStripe?.(stripeKey);
    }, [stripeKey]);

    const classNames = cs(getPrefixCls('pay-stripe'), className);

    return (
      <div ref={stripeRef} {...others} className={classNames}>
        {clientSecret && stripePromise && (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    );
  }
);

Stripe.displayName = 'Stripe';

export default memo(Stripe);
