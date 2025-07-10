import React, {
  memo,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PayModal from '../pay-modal';
import { WechatModalProps, WechatModalRef, WechatProps } from './interface';
import Wechat from './wechat';

const WechatModal = React.forwardRef<
  WechatModalRef,
  PropsWithChildren<WechatModalProps>
>((props, ref) => {
  const { wechatProps: propsWechatProps, visible, onClose, ...others } = props;

  const wechatRef = useRef<WechatModalRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [wechatProps, setWechatProps] = useState<WechatProps>();

  const isControlled = visible !== undefined;
  const _visible = isControlled ? visible : uncontrolledVisible;

  useImperativeHandle(ref, () => ({
    open: (value) => {
      if (value) {
        setWechatProps(value);
      }
      setUncontrolledVisible(true);
    },
    close: () => {
      setUncontrolledVisible(false);
      onClose?.();
    },
    current: wechatRef.current,
  }));

  const _wechatProps = propsWechatProps ?? wechatProps;

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
      {_wechatProps?.wechatUrl && <Wechat {..._wechatProps} />}
    </PayModal>
  );
});

WechatModal.displayName = 'WechatModal';

export default memo(WechatModal);
