import { ButtonProps, ButtonRef } from '../Button';
import { PayMaskProps } from '../PayMask';
import { ConfirmModalProps } from '../confirm-modal';

/**
 * @version 1.1.0
 * @description
 * @zh Paypal 组件属性定义
 * @en Props for Paypal component
 */
export interface MWeChatButtonProps extends ButtonProps {
  /**
   * @zh 微信支付页面链接
   * @en Wechat payment page URL
   */
  wechatUrl?: string;

  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderMWeChatFn;
  /**
   * @zh 显示类型，默认值为 "modal"
   * @en Display type, default is "modal"
   * @default "modal"
   */
  displayType?: 'modal' | 'mask';
  /**
   * @zh 弹窗属性
   * @en Modal props
   */
  modalProps?: ConfirmModalProps;
  /**
   * @zh 蒙层属性
   * @en Mask props
   */
  maskProps?: Omit<PayMaskProps, 'visible' | 'payUrl'>;
}

export type MWeChatButtonRef = ButtonRef;

export interface MWeChatFormData {
  /**
   * @zh 微信支付页面链接
   * @en Wechat payment page URL
   */
  wechatUrl: string;
}

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderMWeChatFn = () => Promise<MWeChatFormData>;
