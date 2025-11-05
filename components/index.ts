export type {
  PaypalButtonProps,
  PaypalButtonRef,
  CreateOrderPaypalFn,
  PaypalSecretMap,
} from './Paypal/interface';
export { PaypalButton } from './Paypal';

export type {
  BasesStripeProps,
  StripeProps,
  StripePopupProps,
  StripePopupRef,
  StripeButtonProps,
  StripeButtonRef,
  CreateOrderStripeFn,
  StripeModalRef,
} from './Stripe/interface';
import StripeDefault from './Stripe';
import { StripeButton, StripePopup, StripeModal } from './Stripe';
const Stripe = Object.assign({}, StripeDefault, {
  Button: StripeButton,
  Popup: StripePopup,
  Modal: StripeModal,
}) as typeof StripeDefault & {
  Button: typeof StripeButton;
  Popup: typeof StripePopup;
  Modal: typeof StripeModal;
};
export { Stripe };
export { StripeButton, StripePopup, StripeModal };

export type {
  AirwallexProps,
  AirwallexPopupProps,
  AirwallexPopupRef,
  AirwallexButtonProps,
  AirwallexButtonRef,
  CreateOrderAirwallexEmbeddedFn,
  CreateOrderAirwallexRedirectFn,
  AirwallexModalProps,
  AirwallexModalRef,
} from './Airwallex/interface';

import AirwallexDefault from './Airwallex';
import { AirwallexButton, AirwallexPopup, AirwallexModal } from './Airwallex';
const Airwallex = Object.assign({}, AirwallexDefault, {
  Button: AirwallexButton,
  Popup: AirwallexPopup,
  Modal: AirwallexModal,
}) as typeof AirwallexDefault & {
  Button: typeof AirwallexButton;
  Popup: typeof AirwallexPopup;
  Modal: typeof AirwallexModal;
};
export { Airwallex };
export { AirwallexButton, AirwallexPopup, AirwallexModal };

export type {
  PayssionButtonProps,
  PayssionButtonRef,
  CreateOrderPayssionFn,
  PayssionSecretMap,
} from './Payssion/interface';
export { PayssionButton } from './Payssion';

export type {
  MWeChatButtonProps,
  MWeChatButtonRef,
  CreateOrderMWeChatFn,
  MWeChatFormData,
} from './MWeChat/interface';
export { MWechatButton } from './MWeChat';

export type {
  MAlipayButtonProps,
  MAlipayButtonRef,
  CreateOrderMAlipayFn,
  MAlipayFormData,
} from './MAlipay/interface';

import MAlipayDefault from './MAlipay';
import { MAlipayButton } from './MAlipay';
const MAlipay = Object.assign({}, MAlipayDefault, {
  Button: MAlipayButton,
}) as typeof MAlipayDefault & {
  Button: typeof MAlipayButton;
};
export { MAlipay };
export { MAlipayButton };

export type {
  AlipayProps,
  AlipayModalProps,
  AlipayButtonProps,
  AlipayButtonRef,
  AlipayModalRef,
} from './Alipay/interface';
import AlipayDefault from './Alipay';
import { AlipayButton, AlipayModal } from './Alipay';
const Alipay = Object.assign({}, AlipayDefault, {
  Button: AlipayButton,
  Modal: AlipayModal,
}) as typeof AlipayDefault & {
  Button: typeof AlipayButton;
  Modal: typeof AlipayModal;
};
export { Alipay };
export { AlipayButton, AlipayModal };

export type {
  WechatProps,
  WechatModalProps,
  WechatButtonProps,
  WechatButtonRef,
  WechatModalRef,
} from './Wechat/interface';
import WechatDefault from './Wechat';
import { WechatButton, WechatModal } from './Wechat';

const Wechat = Object.assign({}, WechatDefault, {
  Button: WechatButton,
  Modal: WechatModal,
}) as typeof WechatDefault & {
  Button: typeof WechatButton;
  Modal: typeof WechatModal;
};
export { Wechat };
export { WechatButton, WechatModal };

export type {
  PayButtonProps,
  GenericPayButtonRef,
} from './PayButton/interface';
import PayButton from './PayButton';
export { PayButton };

export * from './shared';
