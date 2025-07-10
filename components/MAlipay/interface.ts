import { ButtonProps, ButtonRef } from '../Button';
import { ConfirmModalProps } from '../confirm-modal';
import { PayMaskProps } from '../PayMask';

export interface MAlipayButtonProps
  extends ButtonProps,
    Partial<MAlipayFormData> {
  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderMAlipayFn;

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
  modalProps?: Omit<
    ConfirmModalProps,
    'visible' | 'payUrl' | 'autoOpenWindow' | 'openMode'
  >;

  /**
   * @zh 蒙层属性
   * @en Mask props
   */
  maskProps?: Omit<
    PayMaskProps,
    'visible' | 'payUrl' | 'autoOpenWindow' | 'openMode'
  >;
}

export type MAlipayButtonRef = ButtonRef;

export interface MAlipayFormData {
  /**
   * @zh 支付宝支付 html 字符串
   * @en Alipay payment html string
   */
  formHtml: string;
}

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderMAlipayFn = () => Promise<MAlipayFormData>;
