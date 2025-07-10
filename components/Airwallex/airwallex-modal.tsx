import React, {
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  AirwallexModalProps,
  AirwallexModalRef,
  AirwallexProps,
} from './interface';
import PayModal from '../pay-modal';
import Airwallex from './airwallex';
import omit from '../utils/omit';

const AirwallexModal = React.forwardRef<
  AirwallexModalRef,
  PropsWithChildren<AirwallexModalProps>
>((props, ref) => {
  const {
    airwallexProps: propsAirwallexProps,
    visible,
    onClose,
    footer = null,
    ...rest
  } = props;

  const airwallexRef = useRef<AirwallexModalRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [airwallexProps, setAirwallexProps] = useState<AirwallexProps>();

  const isControlled = visible !== undefined;
  const _visible = isControlled ? visible : uncontrolledVisible;

  useImperativeHandle(ref, () => ({
    open: (value) => {
      if (value) {
        setAirwallexProps(value);
      }
      setUncontrolledVisible(true);
    },
    close: () => {
      setUncontrolledVisible(false);
      onClose?.();
    },
    current: airwallexRef.current,
  }));

  const _airwallexProps = propsAirwallexProps ?? airwallexProps;

  return (
    <PayModal
      visible={_visible}
      onClose={() => {
        if (!isControlled) {
          setUncontrolledVisible(false);
        }
        onClose?.();
      }}
      footer={footer}
      {...rest}
    >
      {_airwallexProps && (
        <Airwallex
          onSuccess={(event) => {
            if (!isControlled) {
              setUncontrolledVisible(false);
            }
            _airwallexProps?.onSuccess?.(event);
          }}
          onError={(event) => {
            if (!isControlled) {
              setUncontrolledVisible(false);
            }
            _airwallexProps?.onError?.(event);
          }}
          {...omit(_airwallexProps, ['onSuccess', 'onError'])}
        />
      )}
    </PayModal>
  );
});

AirwallexModal.displayName = 'AirwallexModal';

export default AirwallexModal;
