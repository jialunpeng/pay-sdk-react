import Alipay from './alipay';
import AlipayButton from './alipay-button';
import AlipayModal from './alipay-modal';

type AlipayComponentType = typeof Alipay & {
  Button: typeof AlipayButton;
  Modal: typeof AlipayModal;
};

const AlipayComponent = Alipay as AlipayComponentType;
AlipayComponent.Button = AlipayButton;
AlipayComponent.Modal = AlipayModal;

export * from './interface';

export default AlipayComponent;
