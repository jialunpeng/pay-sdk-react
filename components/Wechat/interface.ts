import React from 'react';
import { PayModalProps } from '../pay-modal';
import { ButtonProps, ButtonRef } from '../Button';

export interface WechatProps {
  /**
   * @zh 传入的是二维码字符串还是二维码图片url
   * @en Whether the input is a QR code string or a QR code image URL
   * @default "qrcode"
   */
  wechatType?: 'qrcode' | 'image';

  /**
   * @zh 微信支付 url
   * @en Wechat payment url
   */
  wechatUrl: string;

  /**
   * @zh 二维码下方提示文字
   * @en Tip text below the QR code
   * @default '请使用微信APP扫码支付'
   */
  tipText?: string;

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

export interface WechatButtonProps extends ButtonProps {
  /**
   * @zh 创建订单函数，返回 Paypal 所需参数
   * @en Function to create order, returns Paypal required params
   */
  createOrder?: CreateOrderWechatFn;

  /**
   * @zh 弹窗属性
   * @en Modal props
   */
  modalProps?: Omit<WechatModalProps, 'visible'>;
}

export type WechatButtonRef = ButtonRef;

/**
 * @zh 创建订单函数，返回 Paypal 所需参数
 * @en Function to create order, returns Paypal required params
 */
export type CreateOrderWechatFn = () => Promise<WechatProps>;

export interface WechatModalRef {
  /**
   * @zh 打开弹窗
   * @en Open the popup
   */
  open: (options?: WechatProps) => void;

  /**
   * @zh 关闭弹窗
   * @en Close the popup
   */
  close: () => void;
}

export interface WechatModalProps extends PayModalProps {
  /**
   * @zh Wechat 属性
   * @en Wechat props
   */
  wechatProps?: WechatProps;
}
