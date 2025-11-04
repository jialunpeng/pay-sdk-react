import { OpenPayUrlMode } from '../shared/enums';
import { PayModalProps } from '../pay-modal';
export interface ConfirmModalProps extends PayModalProps {
  /**
   * @zh 支付页面 url
   * @en Payment page url
   */
  payUrl?: string;
  /**
   * @zh 是否自动打开支付页面，默认 true
   * @en Whether to automatically open the payment page, default is true
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
}
