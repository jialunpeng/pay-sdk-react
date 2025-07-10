import { ButtonProps, ButtonRef } from '../Button';
import { PayMaskProps } from '../PayMask';

/**
 * @version 1.1.0
 * @description
 * @zh Paypal 组件属性定义
 * @en Props for Paypal component
 */
export interface PayssionButtonProps extends ButtonProps {
  /**
   * @zh PayssionMask 组件的属性
   * @en Props for PayssionMask component
   */
  maskProps?: Omit<PayMaskProps, 'visible' | 'payUrl'>;

  /**
   * @zh Payssion 支付页面链接
   * @en Payssion payment page URL
   */
  payssionUrl?: string;

  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderPayssionFn;
}

export type PayssionButtonRef = ButtonRef;

export interface PayssionSecretMap {
  /**
   * @zh Payssion 支付页面链接
   * @en Payssion payment page URL
   */
  payssionUrl: string;
}

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderPayssionFn = () => Promise<PayssionSecretMap>;
