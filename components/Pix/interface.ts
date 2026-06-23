import React from 'react';
import { PayModalProps } from '../pay-modal';
import { ButtonProps, ButtonRef } from '../Button';

export interface PixProps {
  /**
   * @zh PIX 支付码字符串（后端返回的 code_url）
   * @en PIX payment code string (code_url returned by backend)
   */
  pixCode: string;

  /**
   * @zh 二维码下方提示文字
   * @en Tip text below the QR code
   * @default '请使用银行App扫码支付'
   */
  tipText?: string;

  /**
   * @zh 是否显示 PIX Code 文本 + 复制按钮
   * @en Whether to show PIX Code text + copy button
   * @default true
   */
  showCopyButton?: boolean;

  /**
   * @zh 容器自定义 class
   * @en Custom class for the container
   */
  className?: string;

  /**
   * @zh 容器自定义 style
   * @en Custom style for the container
   */
  style?: React.CSSProperties;
}

export interface PixButtonProps extends ButtonProps {
  /**
   * @zh 创建订单函数，返回 Pix 所需参数
   * @en Function to create order, returns Pix required params
   */
  createOrder?: CreateOrderPixFn;

  /**
   * @zh 弹窗属性
   * @en Modal props
   */
  modalProps?: PixModalProps;
}

export interface PixButtonRef extends ButtonRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  openModal: (options?: PixProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  closeModal: () => void;
}

/**
 * @zh 创建订单函数，返回 Pix 所需参数
 * @en Function to create order, returns Pix required params
 */
export type CreateOrderPixFn = () => Promise<PixProps>;

export interface PixModalRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  open: (options?: PixProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  close: () => void;
}

export interface PixModalProps extends PayModalProps {
  /**
   * @zh Pix 属性
   * @en Pix props
   */
  pixProps?: PixProps;
}
