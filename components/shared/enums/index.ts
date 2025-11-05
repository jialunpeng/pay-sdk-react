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

/**
 * @zh 支付页面打开模式枚举
 * @en Payment page opening mode enum
 */
export enum OpenPayUrlMode {
  /**
   * @zh 新页面或弹窗模式 - 使用 window.open() 打开新页面或弹窗，支持智能设备检测
   * @en New page or popup mode - Use window.open() to open new page or popup, supports smart device detection
   */
  Window = 'window',
  /**
   * @zh 新页面模式 - 使用 window.location.href 跳转到新页面
   * @en New page mode - Use window.location.href to navigate to new page
   */
  Href = 'href',
  /**
   * @zh 替换页面模式 - 使用 window.location.replace 替换当前页面
   * @en Replace page mode - Use window.location.replace to replace current page
   */
  Replace = 'replace',
}
