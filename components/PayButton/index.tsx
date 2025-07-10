import React, { memo, PropsWithChildren } from 'react';
import { PayButtonProps, PayButtonRef } from './interface';
import { PaymentMethod } from '../shared';
import { PaypalButton } from '../Paypal';
import Stripe from '../Stripe';
import Airwallex from '../Airwallex';
import { PayssionButton } from '../Payssion';
import { MWechatButton } from '../MWeChat';
import Alipay from '../Alipay';
import Wechat from '../Wechat';
import MAlipay from '../MAlipay';

const PayButton = React.forwardRef<
  PayButtonRef,
  PropsWithChildren<PayButtonProps>
>((props, ref) => {
  if (
    props.payMethod === PaymentMethod.PaypalH5 ||
    props.payMethod === PaymentMethod.PaypalPc
  ) {
    return <PaypalButton ref={ref} {...props} />;
  }
  if (
    props.payMethod === PaymentMethod.StripeH5 ||
    props.payMethod === PaymentMethod.StripePc
  ) {
    return <Stripe.Button ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.Airwallex) {
    return <Airwallex.Button ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.Payssion) {
    return <PayssionButton ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.WechatH5) {
    return <MWechatButton ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.AlipayH5) {
    return <MAlipay.Button ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.AlipayPc) {
    return <Alipay.Button ref={ref} {...props} />;
  }
  if (props.payMethod === PaymentMethod.WechatPc) {
    return <Wechat.Button ref={ref} {...props} />;
  }
  return null;
});

PayButton.displayName = 'PayButton';

export * from './interface';

export default memo(PayButton);
