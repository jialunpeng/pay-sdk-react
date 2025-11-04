import React, {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import AirwallexPopup from './airwallex-popup';
import {
  AirwallexButtonProps,
  AirwallexButtonRef,
  AirwallexModalRef,
  AirwallexPopupRef,
  AirwallexProps,
  AirwallexRedirectProps,
} from './interface';
import AirwallexModal from './airwallex-modal';
import Button from '../Button';
import PayMask from '../PayMask';
import omit from '../utils/omit';

const AirwallexButton = forwardRef<
  AirwallexButtonRef,
  PropsWithChildren<AirwallexButtonProps>
>((props, ref) => {
  const { children = 'Airwallex', onClick, createOrder, ...others } = props;

  const airwallexButtonRef = useRef<AirwallexButtonRef>(null);

  const airwallexPopupRef = useRef<AirwallexPopupRef>(null);
  const airwallexModalRef = useRef<AirwallexModalRef>(null);

  const [showMask, setShowMask] = useState(false);
  const [airwallexUrl, setAirwallexUrl] = useState<string>();

  useImperativeHandle(ref, () => ({
    get nativeElement() {
      return airwallexButtonRef.current?.nativeElement || null;
    },
    openModal: (options?: AirwallexProps) => {
      airwallexModalRef.current?.open(options);
    },
    closeModal: () => {
      airwallexModalRef.current?.close();
    },
    openPopup: (options?: AirwallexProps) => {
      airwallexPopupRef.current?.open(options);
    },
    closePopup: () => {
      airwallexPopupRef.current?.close();
    },
    openPayment: (options?: AirwallexRedirectProps) => {
      if (options) {
        setAirwallexUrl(options.airwallexUrl);
        setShowMask(true);
      }
    },
    closePayment: () => {
      setShowMask(false);
    },
    current: airwallexButtonRef.current,
  }));

  const handlePayCreateOrder = useCallback(async () => {
    if (createOrder) {
      // 1. 业务侧创建订单，获取参数
      const options = await createOrder();

      if (options) {
        if (props?.payMode === 'embedded') {
          if (props?.displayType === 'modal') {
            airwallexModalRef?.current?.open(options as AirwallexProps);
          } else {
            airwallexPopupRef.current?.open(options as AirwallexProps);
          }
        } else {
          setShowMask(true);
          setAirwallexUrl((options as AirwallexRedirectProps).airwallexUrl);
        }
      }
    }
  }, [createOrder, props]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(e);
      if (createOrder) {
        handlePayCreateOrder();
        return;
      }
      if (props?.payMode === 'embedded') {
        if (props?.displayType === 'modal') {
          if (props?.modalProps?.airwallexProps?.initOptions) {
            airwallexModalRef?.current?.open();
          }
        } else {
          if (props?.popupProps?.airwallexProps?.initOptions) {
            airwallexPopupRef?.current?.open();
          }
        }
        return;
      }
      if (props?.payMode === 'redirect') {
        setShowMask(true);
        setAirwallexUrl(props?.airwallexUrl);
      }
    },
    [onClick, createOrder, handlePayCreateOrder, props]
  );

  return (
    <React.Fragment>
      <Button
        ref={airwallexButtonRef}
        onClick={handleClick}
        {...omit(others, [
          'payMode',
          'displayType',
          'createOrder',
          'airwallexUrl',
          'maskProps',
          'popupProps',
          'modalProps',
        ])}
      >
        {children}
      </Button>
      {props?.payMode === 'embedded' && props?.displayType === 'popup' && (
        <AirwallexPopup ref={airwallexPopupRef} {...props?.popupProps} />
      )}
      {props?.payMode === 'embedded' && props?.displayType === 'modal' && (
        <AirwallexModal ref={airwallexModalRef} {...props?.modalProps} />
      )}
      {props?.payMode === 'redirect' && showMask && airwallexUrl && (
        <PayMask
          visible={showMask}
          onClose={() => {
            setShowMask(false);
            props?.maskProps?.onClose?.();
          }}
          payUrl={airwallexUrl}
          title={'Airwallex'}
          {...omit(props?.maskProps || {}, ['onClose'])}
        />
      )}
    </React.Fragment>
  );
});

AirwallexButton.displayName = 'AirwallexButton';

export default memo(AirwallexButton);
