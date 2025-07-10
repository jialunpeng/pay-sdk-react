export enum PaymentMethod {
  /**
   * @zh 微信(pc)
   * @en Wechat(pc)
   */
  WechatPc = 'wechat-pc',
  /**
   * @zh 支付宝(pc)
   * @en Alipay(pc)
   */
  AlipayPc = 'alipay-pc',
  /**
   * @zh paypal(pc)
   * @en Paypal(pc)
   */
  PaypalPc = 'paypal-pc',
  /**
   * @zh stripe(pc)
   * @en Stripe(pc)
   */
  StripePc = 'stripe-pc',
  /**
   * @zh 微信(H5)
   * @en Wechat(H5)
   */
  WechatH5 = 'wechat-h5',
  /**
   * @zh 支付宝(H5)
   * @en Alipay(H5)
   */
  AlipayH5 = 'alipay-h5',
  /**
   * @zh paypal(H5)
   * @en Paypal(H5)
   */
  PaypalH5 = 'paypal-h5',
  /**
   * @zh 微信内部(H5)
   * @en Wechat inside(H5)
   */
  WechatInsideH5 = 'wechat-inside-h5',
  /**
   * @zh stripe(H5)
   * @en Stripe(H5)
   */
  StripeH5 = 'stripe-h5',

  /**
   * @zh payssion支付
   * @en Payssion
   */
  Payssion = 'payssion',
  /**
   * @zh 空中云汇
   * @en Airwallex
   */
  Airwallex = 'airwallex',
}
