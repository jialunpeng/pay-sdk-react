import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PayModal from '../pay-modal';
import { PixModalProps, PixModalRef, PixProps } from './interface';
import PixQrCode from './pix';

const PixModal = React.forwardRef<
  PixModalRef,
  PropsWithChildren<PixModalProps>
>((props, ref) => {
  const { pixProps: propsPixProps, visible, onClose, ...others } = props;

  const pixRef = useRef<PixModalRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [pixProps, setPixProps] = useState<PixProps>();

  const isControlled = visible !== undefined;
  const _visible = isControlled ? visible : uncontrolledVisible;

  useImperativeHandle(ref, () => ({
    open: (value) => {
      if (value) {
        setPixProps(value);
      }
      setUncontrolledVisible(true);
    },
    close: () => {
      setUncontrolledVisible(false);
      onClose?.();
    },
    current: pixRef.current,
  }));

  const _pixProps = propsPixProps ?? pixProps;

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
      {_pixProps?.pixCode && <PixQrCode {..._pixProps} />}
    </PayModal>
  );
});

PixModal.displayName = 'PixModal';

export default memo(PixModal);
