import React, {
  PropsWithChildren,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  AirwallexPopupProps,
  AirwallexPopupRef,
  AirwallexProps,
} from './interface';
import Airwallex from './airwallex';
import PayPopup from '../pay-popup';
import omit from '../utils/omit';

const AirwallexPopup = React.forwardRef<
  AirwallexPopupRef,
  PropsWithChildren<AirwallexPopupProps>
>((props, ref) => {
  const {
    visible: controlledVisible,
    onClose,
    closeOnMaskClick = true,
    bodyStyle,
    airwallexProps: propsAirwallexProps,
    ...others
  } = props;

  const airwallexRef = useRef<AirwallexPopupRef>(null);

  const [uncontrolledVisible, setUncontrolledVisible] = useState(false);
  const [airwallexProps, setAirwallexProps] = useState<AirwallexProps>();

  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : uncontrolledVisible;

  const _airwallexProps = propsAirwallexProps ?? airwallexProps;

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

  return (
    <PayPopup
      visible={visible}
      closeOnMaskClick={closeOnMaskClick}
      onClose={() => {
        if (!isControlled) {
          setUncontrolledVisible(false);
        }
        onClose?.();
      }}
      bodyStyle={{
        padding: 12,
        height: '40vh',
        overflowY: 'scroll',
        ...bodyStyle,
      }}
      {...others}
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
    </PayPopup>
  );
});

AirwallexPopup.displayName = 'AirwallexPopup';

export default AirwallexPopup;
