import {
  ElementOptionsTypeMap,
  InitOptions,
} from 'airwallex-payment-elements/types/airwallex';
import { ButtonProps, ButtonRef } from '../Button';
import { HTMLAttributes } from 'react';
import { PayModalProps } from '../pay-modal';
import { PayPopupBaseProps } from '../pay-popup';
import { PayMaskProps } from '../PayMask';

export type AirwallexElementOption<
  T extends keyof ElementOptionsTypeMap = keyof ElementOptionsTypeMap,
> = {
  type: T;
  options: ElementOptionsTypeMap[T];
};

export interface AirwallexProps
  extends AirwallexElementOption,
    HTMLAttributes<HTMLDivElement> {
  /**
   * @zh 初始化选项
   * @en Initialization options
   */
  initOptions?: InitOptions;
  /**
   * @zh 准备就绪回调
   * @en Ready callback
   */
  onReady?: (event: any) => void;
  /**
   * @zh 成功回调
   * @en Success callback
   */
  onSuccess?: (event: any) => void;
  /**
   * @zh 错误回调
   * @en Error callback
   */
  onError?: (event: any) => void;
}

export interface AirwallexRedirectProps {
  /**
   * @zh 支付页面链接
   * @en Payment page URL
   */
  airwallexUrl: string;
}

export interface AirwallexPopupProps extends PayPopupBaseProps {
  /**
   * @zh Airwallex 属性
   * @en Airwallex props
   */
  airwallexProps?: AirwallexProps;
}

export interface AirwallexPopupRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  open: (options?: AirwallexProps) => void;

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
export type CreateOrderAirwallexEmbeddedFn = () => Promise<AirwallexProps>;

export type CreateOrderAirwallexRedirectFn =
  () => Promise<AirwallexRedirectProps>;

export interface AirwallexButtonRedirectProps extends ButtonProps {
  /**
   * @zh 支付模式，redirect 会打开 Airwallex 支付页面
   * @en Payment mode, redirect will open the Airwallex payment page
   */
  payMode: 'redirect';
  /**
   * @zh 蒙层属性
   * @en Mask props
   */
  maskProps?: PayMaskProps;
  /**
   * @zh Airwallex 支付页面链接
   * @en Airwallex payment page URL
   */
  airwallexUrl?: string;
  /**
   * @zh 创建订单函数，返回 Airwallex 所需参数
   * @en Function to create order, returns Airwallex required params
   */
  createOrder?: CreateOrderAirwallexRedirectFn;
}

export interface AirwallexButtonEmbeddedBaseProps extends ButtonProps {
  /**
   * @zh 支付模式，embedded 会打开 Airwallex 支付页面
   * @en Payment mode, embedded will open the Airwallex payment page
   */
  payMode: 'embedded';
  /**
   * @zh 创建订单函数，返回 Airwallex 所需参数
   * @en Function to create order, returns Airwallex required params
   */
  createOrder?: CreateOrderAirwallexEmbeddedFn;
}

export interface AirwallexButtonEmbeddedModalProps
  extends AirwallexButtonEmbeddedBaseProps {
  displayType: 'modal';
  /**
   * @zh 弹窗属性
   * @en Modal props
   */
  modalProps?: AirwallexModalProps;
}

export interface AirwallexButtonEmbeddedPopupProps
  extends AirwallexButtonEmbeddedBaseProps {
  displayType: 'popup';
  /**
   * @zh 弹出层 属性
   * @en Popup props
   */
  popupProps?: AirwallexPopupProps;
}

// 联合类型
export type AirwallexButtonProps =
  | AirwallexButtonRedirectProps
  | AirwallexButtonEmbeddedModalProps
  | AirwallexButtonEmbeddedPopupProps;

export interface AirwallexButtonRef extends ButtonRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  openModal: (options?: AirwallexProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  closeModal: () => void;

  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  openPopup: (options?: AirwallexProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  closePopup: () => void;

  /**
   * @zh 打开支付页面
   * @en Open payment page
   */
  openPayment: (options?: AirwallexRedirectProps) => void;

  /**
   * @zh 关闭支付页面
   * @en Close payment page
   */
  closePayment: () => void;
}

export interface AirwallexModalProps extends PayModalProps {
  /**
   * @zh Airwallex 属性
   * @en Airwallex props
   */
  airwallexProps?: AirwallexProps;
}

export type AirwallexModalRef = AirwallexPopupRef;
