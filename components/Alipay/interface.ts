import React from 'react';
import { PayModalProps } from '../pay-modal';
import { ButtonProps, ButtonRef } from '../Button';

export interface AlipayProps {
  /**
   * @zh 支付宝支付 html 字符串，必须包含自动提交脚本
   * @en Alipay payment html string, must contain auto submit script
   */
  formHtml: string;
  /**
   * @zh 下方提示文字，可选，传 null/undefined/空字符串则不显示
   * @en Below prompt text, optional, if null/undefined/empty string, it will not be displayed
   */
  tipText?: string | null;
  /**
   * @zh 容器 className
   * @en Wrapper div className
   */
  wrapperClassName?: string;
  /**
   * @zh 容器 style
   * @en Wrapper div style
   */
  wrapperStyle?: React.CSSProperties;
  /**
   * @zh iframe 的 className
   * @en Iframe className
   */
  iframeClassName?: string;
  /**
   * @zh iframe 的 style
   * @en Iframe style
   */
  iframeStyle?: React.CSSProperties;
}

export interface AlipayModalProps extends PayModalProps {
  /**
   * @zh 支付宝支付属性
   * @en Alipay payment props
   */
  alipayProps?: AlipayProps;
}

export interface AlipayButtonProps extends ButtonProps {
  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderAlipayFn;

  /**
   * @zh 弹窗属性
   * @en Modal props
   */
  modalProps?: AlipayModalProps;
}

export interface AlipayButtonRef extends ButtonRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  openModal: (options?: AlipayProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  closeModal: () => void;
}

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderAlipayFn = () => Promise<AlipayProps>;

export interface AlipayModalRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  open: (options?: AlipayProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  close: () => void;
}
