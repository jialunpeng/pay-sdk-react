import MAlipay from './m-alipay-auto-submit';
import MAlipayButton from './m-alipay-button';

export * from './interface';

type MAlipayComponentType = typeof MAlipay & {
  Button: typeof MAlipayButton;
};

const MAlipayComponent = MAlipay as MAlipayComponentType;
MAlipayComponent.Button = MAlipayButton;

export default MAlipayComponent;
