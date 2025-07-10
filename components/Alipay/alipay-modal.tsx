import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PayModal from '../pay-modal';
import { AlipayModalProps, AlipayModalRef, AlipayProps } from './interface';
import Alipay from './alipay';

const AlipayModal = React.forwardRef<
  AlipayModalRef,
  PropsWithChildren<AlipayModalProps>
>((props, ref) => {
  const { alipayProps: propsAlipayProps, visible, onClose, ...others } = props;

  const alipayRef = useRef<AlipayModalRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [alipayProps, setAlipayProps] = useState<AlipayProps>();

  const isControlled = visible !== undefined;
  const _visible = isControlled ? visible : uncontrolledVisible;

  useImperativeHandle(ref, () => ({
    open: (value) => {
      if (value) {
        setAlipayProps(value);
      }
      setUncontrolledVisible(true);
    },
    close: () => {
      setUncontrolledVisible(false);
      onClose?.();
    },
    current: alipayRef.current,
  }));

  const _alipayProps = propsAlipayProps ?? alipayProps;

  return (
    <PayModal
      visible={_visible}
      onClose={() => {
        if (!isControlled) {
          setUncontrolledVisible(false);
        }
        onClose?.();
      }}
      {...others}
    >
      {_alipayProps && <Alipay {..._alipayProps} />}
    </PayModal>
  );
});

AlipayModal.displayName = 'AlipayModal';

export default memo(AlipayModal);
