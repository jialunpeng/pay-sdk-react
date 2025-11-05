import MAlipay from './m-alipay-auto-submit';
import MAlipayButton from './m-alipay-button';

export * from './interface';

type MAlipayComponentType = typeof MAlipay & {
  Button: typeof MAlipayButton;
};

const MAlipayComponent = Object.assign({}, MAlipay, {
  Button: MAlipayButton,
}) as MAlipayComponentType;

export default MAlipayComponent;

export { MAlipayButton };
