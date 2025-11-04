import { ButtonProps, ButtonRef } from '../Button';
import { PayMaskProps } from '../PayMask';

/**
 * @version 1.1.0
 * @description
 * @zh Paypal 组件属性定义
 * @en Props for Paypal component
 */
export interface PaypalButtonProps extends ButtonProps {
  /**
   * @zh PaypalMask 组件的属性
   * @en Props for PaypalMask component
   */
  maskProps?: Omit<PayMaskProps, 'visible' | 'payUrl'>;

  /**
   * @zh Paypal 支付页面链接
   * @en Paypal payment page URL
   */
  paypalUrl?: string;

  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderPaypalFn;

  /**
   * @zh 支付状态，true 表示支付完成，false 表示支付未完成，仅在 createOrder 调用且 openMode 为 "window"时支付完成后关闭蒙层使用
   * @en Payment status, true means payment completed, false means payment not completed, only used to close the mask when payment is completed and openMode is "window"
   */
  isPayment?: boolean;

  /**
   * @zh 组件卸载时是否关闭第三方支付页面，仅在 createOrder 调用且 openMode 为 "window"时支付完成后关闭蒙层使用
   * @en Whether to close the third-party payment page when component unmounts, only effective when "isPayment" is set and openMode is "window"
   * @default true
   */
  closeWindowOnUnmount?: boolean;
}

export interface PaypalButtonRef extends ButtonRef {
  /**
   * @zh 打开支付页面
   * @en Open payment page
   */
  openPayment: (options?: PaypalSecretMap) => void;

  /**
   * @zh 关闭支付页面
   * @en Close payment page
   */
  closePayment: () => void;
}

/**
 * @zh Paypal 所需参数
 * @en Paypal required params
 */
export interface PaypalSecretMap {
  /**
   * @zh Paypal 支付页面链接
   * @en Paypal payment page URL
   */
  paypalUrl: string;
}

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderPaypalFn = () => Promise<PaypalSecretMap>;
