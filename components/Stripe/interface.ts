import { ButtonProps, ButtonRef } from '../Button';
import { HTMLAttributes } from 'react';
import { PayModalProps } from '../pay-modal';
import { PayPopupBaseProps } from '../pay-popup';

export interface BasesStripeProps {
  /**
   * @zh Stripe 支付的 clientSecret
   * @en The clientSecret for Stripe payment
   */
  clientSecret: string;

  /**
   * @zh Stripe 公钥
   * @en The public key for Stripe
   */
  stripeKey: string;
}

/**
 * @version 1.1.0
 * @description
 * @zh Stripe 组件属性定义，包含基础属性和原生 div 属性
 * @en Props for Stripe component, including base props and native div attributes
 */
export type StripeProps = BasesStripeProps & HTMLAttributes<HTMLDivElement>;

/**
 * @version 1.1.0
 * @description
 * @zh Stripe 弹窗组件属性定义
 * @en Props for Stripe popup component
 */
export interface StripePopupProps extends PayPopupBaseProps {
  /**
   * @zh Stripe 属性
   * @en Stripe props
   */
  stripeProps?: BasesStripeProps;
}

/**
 * @version 1.1.0
 * @description
 * @zh Stripe 弹窗组件 Ref 实例方法
 * @en Ref methods for Stripe popup component
 */
export interface StripePopupRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  open: (secretMap?: BasesStripeProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  close: () => void;
}

/**
 * @zh 创建订单函数，返回 Stripe 所需参数
 * @en Function to create order, returns Stripe required params
 */
export type CreateOrderStripeFn = () => Promise<BasesStripeProps>;

export interface StripeButtonProps extends ButtonProps {
  /**
   * @zh 显示类型，默认值为 "modal"
   * @en Display type, default is "modal"
   * @default "popup"
   */
  displayType?: 'modal' | 'popup';

  /**
   * @zh Stripe 弹窗属性
   * @en Stripe popup props
   */
  stripePopupProps?: StripePopupProps;

  /**
   * @zh Stripe 弹窗属性
   * @en Stripe modal props
   */
  stripeModalProps?: StripeModalProps;

  /**
   * @zh 创建订单函数
   * @en Function to create order
   */
  createOrder?: CreateOrderStripeFn;
}

export type StripeButtonRef = ButtonRef;

export interface StripeModalProps extends PayModalProps {
  /**
   * @zh Stripe 属性
   * @en Stripe props
   */
  stripeProps?: BasesStripeProps;
}

export type StripeModalRef = StripePopupRef;
