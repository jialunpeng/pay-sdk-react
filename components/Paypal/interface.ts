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
}

export type PaypalButtonRef = ButtonRef;

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
