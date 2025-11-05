import { PaymentMethod } from '../shared';
import { PaypalButtonProps, PaypalButtonRef } from '../Paypal';
import { StripeButtonProps, StripeButtonRef } from '../Stripe';
import { AirwallexButtonProps, AirwallexButtonRef } from '../Airwallex';
import { PayssionButtonProps, PayssionButtonRef } from '../Payssion';
import { MWeChatButtonProps, MWeChatButtonRef } from '../MWeChat';
import { MAlipayButtonProps, MAlipayButtonRef } from '../MAlipay';
import { AlipayButtonProps, AlipayButtonRef } from '../Alipay';
import { WechatButtonProps, WechatButtonRef } from '../Wechat';

/**
 * @zh PayPal 按钮基础属性
 * @en Base props for PayPal button
 */
interface BasePaypalButtonProps {
  payMethod: PaymentMethod.PaypalH5 | PaymentMethod.PaypalPc;
}

/**
 * @zh Stripe 按钮基础属性
 * @en Base props for Stripe button
 */
interface BaseStripeButtonProps {
  payMethod: PaymentMethod.StripeH5 | PaymentMethod.StripePc;
}

/**
 * @zh Airwallex 按钮基础属性
 * @en Base props for Airwallex button
 */
interface BaseAirwallexButtonProps {
  payMethod: PaymentMethod.Airwallex;
}

/**
 * @zh Payssion 按钮基础属性
 * @en Base props for Payssion button
 */
interface BasePayssionButtonProps {
  payMethod: PaymentMethod.Payssion;
}

/**
 * @zh MWeChat 按钮基础属性
 * @en Base props for MWeChat button
 */
interface BaseMWeChatButtonProps {
  payMethod: PaymentMethod.WechatH5;
}

/**
 * @zh MAlipay 按钮基础属性
 * @en Base props for MAlipay button
 */
interface BaseMAlipayButtonProps {
  payMethod: PaymentMethod.AlipayH5;
}

/**
 * @zh Alipay 按钮基础属性
 * @en Base props for Alipay button
 */
interface BaseAlipayButtonProps {
  payMethod: PaymentMethod.AlipayPc;
}

/**
 * @zh Wechat 按钮基础属性
 * @en Base props for Wechat button
 */
interface BaseWechatButtonProps {
  payMethod: PaymentMethod.WechatPc;
}

/**
 * @zh PayPal 按钮完整属性
 * @en Full props for PayPal button
 */
type RealPaypalButtonProps = BasePaypalButtonProps & PaypalButtonProps;

/**
 * @zh Stripe 按钮完整属性
 * @en Full props for Stripe button
 */
type RealStripeButtonProps = BaseStripeButtonProps & StripeButtonProps;

/**
 * @zh Airwallex 按钮完整属性
 * @en Full props for Airwallex button
 */
type RealAirwallexButtonProps = BaseAirwallexButtonProps & AirwallexButtonProps;

/**
 * @zh Payssion 按钮完整属性
 * @en Full props for Payssion button
 */
type RealPayssionButtonProps = BasePayssionButtonProps & PayssionButtonProps;

/**
 * @zh MWeChat 按钮完整属性
 * @en Full props for MWeChat button
 */
type RealMWeChatButtonProps = BaseMWeChatButtonProps & MWeChatButtonProps;

/**
 * @zh MAlipay 按钮完整属性
 * @en Full props for MAlipay button
 */
type RealMAlipayButtonProps = BaseMAlipayButtonProps & MAlipayButtonProps;

/**
 * @zh MAlipay 按钮完整属性
 * @en Full props for MAlipay button
 */
type RealAlipayButtonProps = BaseAlipayButtonProps & AlipayButtonProps;

/**
 * @zh Wechat 按钮完整属性
 * @en Full props for Wechat button
 */
type RealWechatButtonProps = BaseWechatButtonProps & WechatButtonProps;

/**
 * @zh 支付按钮属性联合类型，根据 payMethod 自动分发
 * @en Union type for pay button props, auto-dispatch by payMethod
 */
export type PayButtonProps =
  | RealPaypalButtonProps
  | RealStripeButtonProps
  | RealAirwallexButtonProps
  | RealPayssionButtonProps
  | RealMWeChatButtonProps
  | RealMAlipayButtonProps
  | RealAlipayButtonProps
  | RealWechatButtonProps;

/**
 * @zh 通用的支付按钮 ref 类型，支持所有支付方式
 * @en Generic pay button ref type that supports all payment methods
 */
export type GenericPayButtonRef =
  | PaypalButtonRef
  | StripeButtonRef
  | AirwallexButtonRef
  | PayssionButtonRef
  | MWeChatButtonRef
  | MAlipayButtonRef
  | AlipayButtonRef
  | WechatButtonRef;
