import React, { memo, PropsWithChildren } from 'react';
import { PayButtonProps, GenericPayButtonRef } from './interface';
import { PaymentMethod } from '../shared';
import { PaypalButton, PaypalButtonRef } from '../Paypal';
import { StripeButton, StripeButtonRef } from '../Stripe';
import { AirwallexButton, AirwallexButtonRef } from '../Airwallex';
import { PayssionButton, PayssionButtonRef } from '../Payssion';
import { MWechatButton, MWeChatButtonRef } from '../MWeChat';
import { AlipayButton, AlipayButtonRef } from '../Alipay';
import { WechatButton, WechatButtonRef } from '../Wechat';
import { MAlipayButton, MAlipayButtonRef } from '../MAlipay';

const PayButton = React.forwardRef<
  GenericPayButtonRef,
  PropsWithChildren<PayButtonProps>
>((props, ref) => {
  const typedRef = ref as React.Ref<GenericPayButtonRef>;

  if (
    props.payMethod === PaymentMethod.PaypalH5 ||
    props.payMethod === PaymentMethod.PaypalPc
  ) {
    return (
      <PaypalButton ref={typedRef as React.Ref<PaypalButtonRef>} {...props} />
    );
  }
  if (
    props.payMethod === PaymentMethod.StripeH5 ||
    props.payMethod === PaymentMethod.StripePc
  ) {
    return (
      <StripeButton ref={typedRef as React.Ref<StripeButtonRef>} {...props} />
    );
  }
  if (props.payMethod === PaymentMethod.Airwallex) {
    return (
      <AirwallexButton
        ref={typedRef as React.Ref<AirwallexButtonRef>}
        {...props}
      />
    );
  }
  if (props.payMethod === PaymentMethod.Payssion) {
    return (
      <PayssionButton
        ref={typedRef as React.Ref<PayssionButtonRef>}
        {...props}
      />
    );
  }
  if (props.payMethod === PaymentMethod.WechatH5) {
    return (
      <MWechatButton ref={typedRef as React.Ref<MWeChatButtonRef>} {...props} />
    );
  }
  if (props.payMethod === PaymentMethod.AlipayH5) {
    return (
      <MAlipayButton ref={typedRef as React.Ref<MAlipayButtonRef>} {...props} />
    );
  }
  if (props.payMethod === PaymentMethod.AlipayPc) {
    return (
      <AlipayButton ref={typedRef as React.Ref<AlipayButtonRef>} {...props} />
    );
  }
  if (props.payMethod === PaymentMethod.WechatPc) {
    return (
      <WechatButton ref={typedRef as React.Ref<WechatButtonRef>} {...props} />
    );
  }
  return null;
});

PayButton.displayName = 'PayButton';

export * from './interface';

export default memo(PayButton);
