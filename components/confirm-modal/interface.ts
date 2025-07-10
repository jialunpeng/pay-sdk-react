import { OpenPayUrlMode } from '../hooks/usePayWindowOpen';
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
}
