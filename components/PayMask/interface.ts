import { OpenPayUrlMode } from '../shared/enums';
import { MaskProps } from '../Mask';

/**
 * @version 1.1.0
 * @description
 * @zh 支付蒙层组件属性定义，继承自基础 Mask 组件
 * @en Props for payment mask component, extends from base Mask component
 */
export interface PayMaskProps extends MaskProps {
  /**
   * @zh 关闭蒙层的回调
   * @en Callback when the mask is closed
   */
  onClose?: () => void;

  /**
   * @zh 第三方支付页面链接
   * @en URL of the third-party payment page
   */
  payUrl?: string;

  /**
   * @zh 蒙层标题，默认值为 "PayPal"
   * @en Title of the mask, default is "PayPal"
   * @default "PayPal"
   */
  title?: React.ReactNode;

  /**
   * @zh 蒙层描述，默认值为 "Don't see the secure paypal\nbrowser? We'll help you re-\nlaunch the window to complete\nyour purchase"
   * @en Description text of the mask, default is "Don't see the secure paypal\nbrowser? We'll help you re-\nlaunch the window to complete\nyour purchase"
   * @default "Don't see the secure paypal\nbrowser? We'll help you re-\nlaunch the window to complete\nyour purchase"
   */
  desc?: React.ReactNode;

  /**
   * @zh 按钮文案，默认值为 "Click to Continue"
   * @en Text of the action button, default is "Click to Continue"
   * @default "Click to Continue"
   */
  buttonText?: string;

  /**
   * @zh 点击继续按钮的回调
   * @en Callback when the continue button is clicked
   */
  onContinue?: () => void;

  /**
   * @zh 是否自动打开支付页面
   * @en Whether to automatically open the payment page
   * @default true
   */
  autoOpenWindow?: boolean;

  /**
   * @zh 打开支付页面模式
   * @en Mode for opening the payment page
   * @default "window"
   */
  openMode?: OpenPayUrlMode;

  /**
   * @zh 是否强制打开新窗口（仅在 openMode 为 'window' 且非移动端设备时生效）
   * @en Whether to force open new window (only effective when openMode is 'window' and on non-mobile devices)
   * @default false
   */
  forceNewWindow?: boolean;

  /**
   * @zh 组件卸载时是否关闭第三方支付页面，只在 “openMode” 为 “window” 时生效
   * @en Whether to close the third-party payment page when component unmounts, only effective when "openMode" is "window"
   * @default true
   */
  closeWindowOnUnmount?: boolean;
}
