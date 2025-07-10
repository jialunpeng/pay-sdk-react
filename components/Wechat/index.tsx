import Wechat from './wechat';
import WechatButton from './wechat-button';
import WechatModal from './wechat-modal';

type WechatComponentType = typeof Wechat & {
  Button: typeof WechatButton;
  Modal: typeof WechatModal;
};

const WechatComponent = Wechat as WechatComponentType;
WechatComponent.Button = WechatButton;
WechatComponent.Modal = WechatModal;

export * from './interface';

export default WechatComponent;
