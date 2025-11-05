import Alipay from './alipay';
import AlipayButton from './alipay-button';
import AlipayModal from './alipay-modal';

type AlipayComponentType = typeof Alipay & {
  Button: typeof AlipayButton;
  Modal: typeof AlipayModal;
};

const AlipayComponent = Object.assign({}, Alipay, {
  Button: AlipayButton,
  Modal: AlipayModal,
}) as AlipayComponentType;

export * from './interface';

export default AlipayComponent;

export { AlipayButton, AlipayModal };
