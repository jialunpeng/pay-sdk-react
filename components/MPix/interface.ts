import { ButtonProps, ButtonRef } from '../Button';
import { ConfirmModalProps } from '../confirm-modal';
import { PayMaskProps } from '../PayMask';

export interface MPixButtonProps extends ButtonProps {
  /**
   * @zh PIX 支付码字符串（可直接传入或通过 createOrder 获取）
   * @en PIX payment code string
   */
  pixCode?: string;

  /**
   * @zh 创建订单函数，返回 PIX 所需参数
   * @en Function to create order, returns Pix required params
   */
  createOrder?: CreateOrderMPixFn;

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

export type MPixButtonRef = ButtonRef;

export interface MPixFormData {
  /**
   * @zh PIX 支付码字符串
   * @en PIX payment code string
   */
  pixCode: string;
}

/**
 * @zh 创建订单函数，返回 PIX 所需参数
 * @en Function to create order, returns Pix required params
 */
export type CreateOrderMPixFn = () => Promise<MPixFormData>;
